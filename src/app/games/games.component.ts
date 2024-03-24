import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  /*Track te dice cual es el identificador unico*/
  template: `
    <p>Forma NUEVA de la directiva for de angular</p>
    <ul>
    @for (game of games; track game.id){
      <li>{{game.name}}</li>
    }
    </ul>
    <p>Forma ANTIGUA de la directiva for de angular</p>
    <ul>
      <li *ngFor="let game of games">
        <a href="{{game.id}}">{{game.name}}</a>
      </li>
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
games = [
  {
    id: 1,
    name: 'Uncharted 4'
  },
  {
    id: 2,
    name: 'Horizon Zero Dawn'
  },
  {
    id:3,
    name: 'Bloodborne'
  }
]
}
