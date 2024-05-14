import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogImcComponent } from '../dialog-imc/dialog-imc.component';
import { DietaService } from '../dieta.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crate-regime',
  templateUrl: './crate-regime.component.html',
  styleUrls: ['./crate-regime.component.scss'],
})
export class CrateRegimeComponent {
  selectedObjective: any = [];
  dietas: any = [];
  obj: string[] = [
    'Perda de Peso',
    'Manutenção de Peso Saudável',
    'Ganho de Massa Muscular',
    'Melhoria da Saúde Geral',
    'Aumento de Energia',
    'Melhoria do Desempenho Esportivo',
  ];
  nameForm: FormGroup;
  pesoForm: FormGroup;
  alturaForm: FormGroup;
  objetivoForm: FormGroup;
  ageForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
    private dietaService: DietaService,
    private snackBar: MatSnackBar
  ) {
    this.nameForm = this._formBuilder.group({
      name: ['', Validators.required],
    });

    this.pesoForm = this._formBuilder.group({
      peso: ['', Validators.required],
    });

    this.alturaForm = this._formBuilder.group({
      altura: ['', Validators.required],
    });

    this.objetivoForm = this._formBuilder.group({
      obj: ['', Validators.required],
    });

    this.ageForm = this._formBuilder.group({
      age: ['', Validators.required],
    });
  }

  calculateIMC() {
    const peso = parseFloat(this.pesoForm.value.peso);
    const altura = parseFloat(this.alturaForm.value.altura) / 100;
    const imc = peso / (altura * altura);
        return imc
  }

  ngOnInit(): void {
    this.mostrarObjetivos();
  }

  mostrarObjetivos(): void {
    this.dietaService.getObjectivos().subscribe(
      (data) => {
        this.selectedObjective = data.objetivos;
      },
      (error) => {
      }
    );
  }

  mostrarObjetivosSelecionados() {
    const selectedObjective = this.objetivoForm.value.obj;
    const objetivosSelecionados = this.filterObjetivosSelecionados(selectedObjective);
  
    const imcCalculado = this.calculateIMC();
  
    if (objetivosSelecionados.length > 0) {
      const objetivoExcedente = this.findObjetivoExcedente(objetivosSelecionados, imcCalculado);
  
      if (objetivoExcedente) {
        this.mostrarDialogImc(objetivoExcedente);
      } else {
        this.mostrarSnackBar('Nenhum objetivo correspondente encontrado para o IMC calculado.');
      }
    } else {
      this.mostrarSnackBar('Ocorreu um erro ao buscar os objetivos.');
    }
  }
  
  filterObjetivosSelecionados(selectedObjective: any) {
    return this.selectedObjective.filter((objetivo: any) => objetivo.objetivo === selectedObjective);
  }
  
  findObjetivoExcedente(objetivosSelecionados: any[], imcCalculado: number) {
    return objetivosSelecionados.find((objetivo: any) => {
      const idValues = objetivo.id.match(/\((.*?)\)/);
      if (idValues) {
        const range = idValues[1].split('-').map((value: string) => parseFloat(value.trim()));
        return imcCalculado >= range[0] && imcCalculado <= range[1];
      }
      return false;
    });
  }
  
  mostrarDialogImc(objetivoExcedente: any) {
    console.log('Objetivo com base no IMC:', objetivoExcedente);
        this.dialog.open(DialogImcComponent, {
      data: [objetivoExcedente],
      height: '600px',
      width: '1000px'
    });
  }
  
  mostrarSnackBar(message: string) {
    this.snackBar.open(message, 'Fechar', {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }
  
}
