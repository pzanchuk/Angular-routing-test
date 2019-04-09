import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SecondComponent } from './second/second.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: '',
    component: SecondComponent,
    outlet: "second"
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
