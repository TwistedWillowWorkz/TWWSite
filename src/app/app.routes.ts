import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { Projects } from './pages/projects/projects';
import { Journal } from './pages/journal/journal';
import { About } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'projects', component: Projects },
  { path: 'journal', component: Journal },
  { path: 'about', component: About },
  { path: '**', redirectTo: '' }
];
