import { Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { YoutubeComponent } from './pages/youtube/youtube.component';

export const routes: Routes = [
  // Default Path
  {
    path: '', redirectTo: 'youtube', pathMatch: 'full'
  },
  // Path for the signin page
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'youtube',
    component: YoutubeComponent
  },
  // Wildcard Route
  {
    path: '**',
    // redirectTo: 'signin',
    component: PagenotfoundComponent
  }
];
