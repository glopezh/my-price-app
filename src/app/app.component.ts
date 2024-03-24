import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/*DECORADOR: Describe como va a ser nuestro componente*/
@Component({
  selector: 'app-root', /*La forma en que nos referimos al componente*/
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html', /*lo que renderiza*/
  styleUrl: './app.component.css'
})
/*APLICA MAGIA A ESTA CLASE APPCOMPONENT*/
export class AppComponent {
  title = 'my-price-app';
  city = 'Barcelona';
}
/*Stadalone --> significa que lo pondremos en imports, lo que queremos usar en este componente*/
