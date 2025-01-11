import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'; // Module nécessaire pour les tables Material

import { AppRoutingModule } from './app-routing.module'; // Si vous avez configuré un module de routing
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, // Déclarez tous vos composants ici
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // Nécessaire pour Angular Material
    MatTableModule, // Nécessaire pour afficher une table
    AppRoutingModule, // Si vous utilisez un module de routing
  ],
  providers: [],
  bootstrap: [AppComponent], // Composant principal de l'application
})
export class AppModule {}
