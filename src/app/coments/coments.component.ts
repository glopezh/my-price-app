import { Component } from '@angular/core';

@Component({
  selector: 'app-coments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios de lo que sea</h3>
    <img src="https://img2.rtve.es/i/?w=1600&i=1614352806474.png" />
    <p>
      orem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
      like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
  `,
  styles: `
  img{
    width: 100%;
    height: auto;
  }`
})
export class ComentsComponent {

}
