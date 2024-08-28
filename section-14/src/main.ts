import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// for enabling routes needs to be added the provideRouter in providers
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
