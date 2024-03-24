import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

/*Punto de entrada de nuestra aplicación*/
/*Cargame la aplicación y lo renderizas*/
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
