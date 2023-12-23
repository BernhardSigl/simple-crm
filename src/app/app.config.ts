import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "simple-crm-tool", "appId": "1:28409962573:web:7c579a9af5f2d29dc17c04", "storageBucket": "simple-crm-tool.appspot.com", "apiKey": "AIzaSyDrWQgTjrF62MHpIlNZAdSAdcFfPDl3_3A", "authDomain": "simple-crm-tool.firebaseapp.com", "messagingSenderId": "28409962573" }))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
