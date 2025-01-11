import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, // Route par défaut vers LoginComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Initialisez les routes
  exports: [RouterModule], // Exporte RouterModule
})
export class AppRoutingModule {}
