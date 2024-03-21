import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = environment.title;
  apiURL = environment.apiBaseUrl;

  constructor(){
    console.log(this.apiURL);
    console.log('App Component Loaded');
  }

}
