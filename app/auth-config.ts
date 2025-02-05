import { BrowserCacheLocation, LogLevel } from '@azure/msal-browser';

export const msalConfig = {
  auth: {
    clientId: 'your-client-id', // Replace with your Entra ID App ID
    authority: 'https://login.microsoftonline.com/your-tenant-id', // Replace with your Tenant ID
    redirectUri: 'http://localhost:4200'
  },
  cache: {
    cacheLocation: BrowserCacheLocation.LocalStorage,
    storeAuthStateInCookie: true
  },
  system: {
    loggerOptions: {
      loggerCallback: (level: LogLevel, message: string) => {
        console.log(message);
      },
      logLevel: LogLevel.Info,
      piiLoggingEnabled: false
    }
  }
};

export const loginRequest = {
  scopes: ['openid', 'profile', 'email']
};
