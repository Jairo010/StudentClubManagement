import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CoreModule } from "../core/core.module";
import { UserService } from '../services/api_serivices/user.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [CoreModule,FormsModule, 
      ReactiveFormsModule,]
})
export class LoginComponent {

  member = inject(UserService);

  login = new FormGroup({
    email: new FormControl<any>('', [Validators.required, Validators.email]),
    password: new FormControl<any>('', [Validators.required]),
  });


  onLogin(){
    
  }

}
