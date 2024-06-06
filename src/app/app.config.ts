import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


<<<<<<< HEAD
export const appConfig: ApplicationConfig = {
 providers: [provideRouter(routes), provideHttpClient(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync()],
};
=======

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes), provideHttpClient(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync()],
   };
>>>>>>> d532dac02b853851a67013834d7772384bdd9397
