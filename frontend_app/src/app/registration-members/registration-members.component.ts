import { Component, inject } from '@angular/core';
import { UserService } from '../services/api_serivices/user.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-members',
  standalone: true,
  imports: [FormsModule, 
    ReactiveFormsModule,],
  templateUrl: './registration-members.component.html',
  styleUrl: './registration-members.component.css'
})
export class RegistrationMembersComponent {
  member = inject(UserService);

  register = new FormGroup({
    email: new FormControl<any>('', [Validators.required, Validators.email]),
    password: new FormControl<any>('', [Validators.required]),
    card: new FormControl<any>('', [Validators.required]),
    name: new FormControl<any>('', [Validators.required]),
    lastName: new FormControl<any>('', [Validators.required]),
    semester: new FormControl<any>('', [Validators.required]),
    major: new FormControl<any>('', [Validators.required]),
    rol: new FormControl<any>('', [Validators.required]),
  });


  onSignUp(){

  }
}
