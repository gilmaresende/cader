import { Component, Input } from '@angular/core';
import { Login } from '../../model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  ob: Login = { username: 'Gil', password: '' };
}
