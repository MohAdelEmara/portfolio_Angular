import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';

export const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'experience',
      component: ExperienceComponent
    }
];
