import { Component, Input } from '@angular/core';
import { Login } from '../../model/login';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private service: AuthServiceService) {}

  ob: Login = { login: '', password: '' };

  logar() {
    this.service.authenticate(this.ob).subscribe({
      next: (res) => {
        if (res.body) {
          const token: string = res.body;
          localStorage.setItem('token-cader', token);
        }
      },
      error: (error) => console.log(error.error.errors),
    });
  }
}
