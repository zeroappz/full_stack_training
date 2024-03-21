import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


if(environment.production == false){
    console.log('Environment: Development Mode From main.ts');
    console.log('App Version: ' + environment.appVersion);
    console.log('API Base URL: ' + environment.apiBaseUrl);
}else{
    console.log('Environment: Production Mode From main.ts');
    console.log('App Version: ' + environment.appVersion);
    console.log('API Base URL: ' + environment.apiBaseUrl);
    enableProdMode();
    window.console.log = () => {};
    window.console.error = () => {};
    window.console.warn = () => {};
    window.console.info = () => {};
    window.console.debug = () => {};
}
