import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClubsService } from '../services/api_serivices/clubs.service';
import { Router } from '@angular/router';
import { IClub } from '../interfaces/clubs.interface';
import { CommonModule } from '@angular/common';
import { MembersService } from '../services/api_serivices/members.service';

@Component({
  selector: 'app-registration-clubs',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './registration-clubs.component.html',
  styleUrls: ['./registration-clubs.component.css']
})
export class RegistrationClubsComponent implements OnInit{
  clubs = inject(ClubsService);
  router = inject(Router);
  members = inject(MembersService)
  memberData: any[] = [];

  register = new FormGroup({
  name: new FormControl<any>('', [Validators.required]),
  description: new FormControl<any>('', [Validators.required]),
  card: new FormControl<any>('', [Validators.required]),
  });

  ngOnInit(){
    this.getMembers();
  }

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

  getMembers(){
    this.members.getMembersCombo().subscribe(
      response => {
        this.memberData = response;
      },
      error => {
        console.error('Error al obtener los miembros', error);
      }
    );
  }
}
