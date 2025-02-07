import { bootstrapApplication } from '@angular/platform-browser';
//import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { PublicClientApplication } from '@azure/msal-browser';

import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
//--appConfig,

// MSAL Configuration
const msalInstance = new PublicClientApplication({
  auth: {
    clientId: 'CLIENT ID',
    authority: 'https://login.microsoftonline.com/<Tenant ID>/oauth2/v2.0/authorize',
    redirectUri: "http://localhost:4200",//window.location.origin,
    postLogoutRedirectUri: '/'
  },
  cache: {
    cacheLocation: 'localStorage',
  }
});

// Initialize MSAL and handle redirect
msalInstance.initialize().then(() => {
  msalInstance.handleRedirectPromise().then((authResponse) => {
    if (authResponse) {
      console.log('User authenticated:', authResponse);
      // Acquire token after authentication
      msalInstance.acquireTokenSilent({
        scopes: ['User.Read'],
        account: msalInstance.getAllAccounts()[0]
      }).then(tokenResponse => {
        console.log('Access token acquired:', tokenResponse.accessToken);
      }).catch(err => {
        console.error(err);
        // Handle token acquisition error
      });
    } else {
      console.log('No authentication response received');
      // Redirect to login if user is not authenticated
      msalInstance.loginRedirect({
        scopes: ['User.Read']
      }).catch(err => {
        console.error(err);
      });
    }
  }).catch(err => {
    console.error(err);
  });
}).catch(err => {
  console.error(err);
});


bootstrapApplication(AppComponent,  {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(ReactiveFormsModule)
  ],
}).catch((err) => console.error(err));
