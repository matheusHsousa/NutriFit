import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-imc',
  templateUrl: './dialog-imc.component.html',
  styleUrls: ['./dialog-imc.component.scss'],
})
export class DialogImcComponent {
  dataSource = this.data
  displayedColumns: string[] = ['diaSemana', 'cafeDaManha', 'almoco', 'jantar'];
  diasDaSemana = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(this.dataSource)
  }

 
}
