import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  userIdControl = new FormControl('qq');
}
