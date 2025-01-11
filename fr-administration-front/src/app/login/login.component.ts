// login.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit(): void {
    if (this.username && this.password) {
      // Logique pour la soumission du formulaire (par exemple, authentification)
      console.log('Username:', this.username);
      console.log('Password:', this.password);
    }
  }
}
