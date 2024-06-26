import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {CommonModule} from "@angular/common";
import {ComentsComponent} from "./coments/coments.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,UserComponent,ComentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my-price-app';
  city = 'Barcelona';
}
