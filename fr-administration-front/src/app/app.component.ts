import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Exemple de données pour la table
  dataSource = [
    { id: 1, lastname: 'Smith', firstname: 'John', age: 25 },
    { id: 2, lastname: 'Doe', firstname: 'Jane', age: 30 },
  ];

  // Colonnes affichées
  displayedColumns: string[] = ['id', 'lastname', 'firstname', 'age'];
}
