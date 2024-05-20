import { Component, inject } from '@angular/core';
import { CoreModule } from '@angular/flex-layout';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClubsService } from '../services/api_serivices/clubs.service';
import { IClub } from '../interfaces/clubs.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration-clubs',
  standalone: true,
  imports: [CoreModule,FormsModule, 
    ReactiveFormsModule,],
  templateUrl: './registration-clubs.component.html',
  styleUrl: './registration-clubs.component.css'
})
export class RegistrationClubsComponent {
  clubs = inject(ClubsService);
  router = inject(Router);
  
  register = new FormGroup({
    name: new FormControl<any>('', [Validators.required,]),
    description: new FormControl<any>('', ),
    card: new FormControl<any>('', [Validators.required,]),
  });


  onSubmit(){
    if (this.register.valid) {
      const clubData:IClub = {
        name: this.register.get('name')?.value,
        description: this.register.get('description')?.value,
        cardResponsible: this.register.get('card')?.value,
      };

      this.clubs.createClub(clubData).subscribe(
        response => {
          console.log('Club registrado exitosamente', response);
          this.router.navigate(['/clubs']);
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
