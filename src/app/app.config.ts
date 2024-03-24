import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

/*En Angular, los "providers" son objetos que Angular utiliza para resolver dependencias y
 proporcionar instancias de servicios, valores o cualquier otro objeto que tu aplicación necesite.
 Los providers le dicen a Angular cómo obtener o crear instancias
de una clase cuando se solicitan a través de la inyección de dependencias.*/
