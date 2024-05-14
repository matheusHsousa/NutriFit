import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cards = [
    {
      title: 'Monte meu treino',
      description: 'Crie seu treino baseado nas suas preferências.',
      imageSrc: '../../../assets/img/exercicio_318-486884.avif',
      isHovered: false,
      rota: '/gym'
    },
    {
      title: 'Monte minha dieta',
      description: 'Crie sua dieta baseada nas suas preferências.',
      imageSrc: '../../../assets/img/2934108.png',
      isHovered: false,
      rota: '/createRegime'
    },
    {
      title: 'Monte ambos',
      description: 'Crie seu treino e dieta baseados nas suas preferências.',
      imageSrc:
        '../../../assets/img/healthy-food-and-fitness-icons-vector-21787252-removebg-preview.webp',
      isHovered: false,
      rota: '/createRegime'
    },
  ];

  constructor(private router: Router) {}

  redirectToCreateRegime(rota: string | undefined) {
    if (rota) {
      this.router.navigate([rota]);
    }
  }
  
}
