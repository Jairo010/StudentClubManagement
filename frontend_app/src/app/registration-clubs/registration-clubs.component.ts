import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClubsService } from '../services/api_serivices/clubs.service';
import { Router } from '@angular/router';
import { IClub } from '../interfaces/clubs.interface';

@Component({
  selector: 'app-registration-clubs',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './registration-clubs.component.html',
  styleUrls: ['./registration-clubs.component.css']
})
export class RegistrationClubsComponent {
  clubs = inject(ClubsService);
  router = inject(Router);
  register = new FormGroup({
  name: new FormControl<any>('', [Validators.required]),
  description: new FormControl<any>('', [Validators.required]),
  card: new FormControl<any>('', [Validators.required]),
  });

  onSubmit() {
    if (this.register.valid) {
      const clubData:IClub = {
        name: this.register.get('name')?.value,
        description: this.register.get('description')?.value,
        cardResponsible: this.register.get('card')?.value,
      };

      this.clubs.createClub(clubData).subscribe(
        response => {
          console.log('Club registrado exitosamente', response);
        },
        error => {
          console.error('Error al registrar el club', error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }
}
