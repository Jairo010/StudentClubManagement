import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/api_serivices/user.service';
import { Router } from '@angular/router';
import { ISignUp } from '../interfaces/userAuth.interface';

@Component({
  selector: 'app-registration-members',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './registration-members.component.html',
  styleUrls: ['./registration-members.component.css']  // Asegúrate de que sea 'styleUrls' y no 'styleUrl'
})
export class RegistrationMembersComponent {
  member = inject(UserService);
  router = inject(Router); // Inyectar el Router para la navegación

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

  onSignUp() {
    if (this.register.valid) {
      const signUpData: ISignUp = {
        email: this.register.get('email')?.value,
        password: this.register.get('password')?.value,
        card: this.register.get('card')?.value,
        name: this.register.get('name')?.value,
        lastName: this.register.get('lastName')?.value,
        semester: this.register.get('semester')?.value,
        major: this.register.get('major')?.value,
        rol: this.register.get('rol')?.value,
      };

      this.member.signUpUserMember(signUpData).subscribe(
        response => {
          console.log('Registro exitoso', response);
          // Redirigir a otra página después del registro exitoso
          this.router.navigate(['/pantalla-principal']);
        },
        error => {
          console.error('Error al registrar', error);
          // Mostrar un mensaje de error al usuario (opcional)
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }
}
