import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {UserComponent} from "../user/user.component";

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  /*Track te dice cual es el identificador unico*/
  template: `
    <h3>Los juegos favoritos del {{username}}</h3>
    <ul>
    @for (game of games; track game.id){
      <li>{{game.name}}</li>
    }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username ='';
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
