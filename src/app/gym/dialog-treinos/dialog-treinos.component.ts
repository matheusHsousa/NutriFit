import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GymComponent } from '../gym/gym.component';


interface Treino {
  exercicios: { nome: string, series: string, repeticoes: string }[]; 
}

@Component({
  selector: 'app-dialog-treinos',
  templateUrl: './dialog-treinos.component.html',
  styleUrls: ['./dialog-treinos.component.scss']
})


export class DialogTreinosComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: GymComponent) {}
  banana: any = [];
  treinningA: any[] = [];
  treinningB: any[] = [];
  treinningC: any;

  serieA: any[] = [];
  serieB: any[] = [];
  serieC: any[] = [];

  repeticaoA: any[] = [];
  repeticaoB: any[] = [];
  repeticaoC: any[] = [];

  ngOnInit() {
    this.banana = this.data;
  
    const exerciciosPorTreino: any[] = this.banana.trainning.map((treino: Treino) =>
      treino.exercicios.map(exercicio => exercicio.nome)
    );

    const serie: any[] = this.banana.trainning.map((treino: Treino) =>
    treino.exercicios.map(exercicio => exercicio.series ));

    const repeticao: any[] = this.banana.trainning.map((treino: Treino) =>
    treino.exercicios.map(exercicio => exercicio.repeticoes ));
    
    console.log(this.banana);
    this.treinningA = exerciciosPorTreino[0];
    this.treinningB = exerciciosPorTreino[1];

    this.serieA = serie[0];
    this.serieB = serie[1];
    this.serieC = serie[2];

    this.repeticaoA = repeticao[0]
    this.repeticaoB = repeticao[1]
    this.repeticaoC = repeticao[2]

    if(exerciciosPorTreino[2] !== ""){
      this.treinningC = exerciciosPorTreino[2]
    }else{
      this.treinningC = false
    }
}
}