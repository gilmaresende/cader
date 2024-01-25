import { Component } from '@angular/core';
import { Login } from '../../model/login';
import { AuthServiceService } from '../../services/auth-service.service';
import { ToastService } from 'src/app/components/prime/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private service: AuthServiceService,
    private toastService: ToastService
  ) {}

  ob: Login = { login: '', password: '' };

  logar() {
    this.service.authenticate(this.ob).subscribe({
      next: (res) => {
        if (res.body) {
          const token: string = res.body;
          this.service.login(token);
        }
      },
      error: (error) => {
        this.toastService.catchErro(error);
      },
    });
  }
}
