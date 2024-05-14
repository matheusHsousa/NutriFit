import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GymService } from '../gym.service';
import { DialogTreinosComponent } from '../dialog-treinos/dialog-treinos.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.scss'],
})
export class GymComponent {

  selectedObjective: any = [];

  obj: string[] = [
    'Hipertrofia Muscular (Musculação)',
    'Perda de Peso e Queima de Gordura',
    'Força',
    'Condicionamento Cardiovascular',
    'Flexibilidade e Mobilidade',
    'Treinamento Funcional',
    'Treinamento Esportivo',
    'Reabilitação',
    'Treinamento de Resistência',
    'Treinamento de Core',
  ];

  dias: number[] = [1, 2, 3, 4, 5, 6, 7];

  pesoFormGroup = this._formBuilder.group({
    peso: ['', Validators.required],
  });
  disponibilidadeFormGroup = this._formBuilder.group({
    disponibilidade: ['', Validators.required],
  });
  objetivoForm = this._formBuilder.group({
    obj: ['', Validators.required],
  });
  
  constructor(
    private _formBuilder: FormBuilder,
    private gymService: GymService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getDadosJson();
  }

  valores() {
    const objetivoFormValue = this.objetivoForm.value.obj;
    const disponibilidadeFormValue =
      this.disponibilidadeFormGroup.value.disponibilidade;
    let convertNumber = '';

    if (
      disponibilidadeFormValue !== null &&
      disponibilidadeFormValue !== undefined
    ) {
      this.getDadosJson();

      if (disponibilidadeFormValue > '1' && disponibilidadeFormValue < '4') {
        convertNumber = 'AB';
      } else {
        convertNumber = 'ABC';
      }

      if (this.selectedObjective && this.selectedObjective.treinos) {
        const filteredTreinos = this.selectedObjective.treinos.filter(
          (treino: any) => treino.id === convertNumber &&
          treino.objetivo === objetivoFormValue
        );
        this.dialog.open(DialogTreinosComponent, {
          width: '600px',
          data: {
            trainning: filteredTreinos,
          },
        });
      }
    } else {
      console.log('disponibilidadeFormValue is null or undefined');
    }
  }

  getDadosJson() {
    this.gymService.getObjectivos().subscribe((data) => {
      this.selectedObjective = data;
    });
  }
}
