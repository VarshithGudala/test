import { bootstrapApplication } from '@angular/platform-browser';
//import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
//--appConfig,
bootstrapApplication(AppComponent,  {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(ReactiveFormsModule)
  ],
}).catch((err) => console.error(err));
