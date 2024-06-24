import { Component, OnInit, inject } from '@angular/core';
import { IParticipants } from '../interfaces/participants.interface';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ParticipantsService } from '../services/api_serivices/participants/participants.service';
import { CommonModule } from '@angular/common';
import { UniversitiesService } from '../services/api_serivices/universities/universities.service';
import { Router } from '@angular/router';
export interface IUniversities {
  Id_Universidades: string;
  Nombre_Universidad: string;
  city: string;
  province: string;
}
@Component({
  selector: 'app-registration-participants',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './registration-participants.component.html',
  styleUrls: ['./registration-participants.component.css']
})

export class RegistrationParticipantsComponent implements OnInit {
regresar() {
  this.router.navigate(['/']);

}
  registerForm: FormGroup;
  universitys: IUniversities[] = [];
  private universitiesService = inject(UniversitiesService);
  

  constructor(private fb: FormBuilder, private participantsService: ParticipantsService, private router:Router) {
    this.registerForm = this.fb.group({
      card: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      document: ['', Validators.required],
      idUniversity: ['', Validators.required],
      status: [false, Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadUniversitys();
  }

  loadUniversitys() {
    this.universitiesService.getUniversities().subscribe(data => {
      this.universitys = data.data;
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const newParticipant: IParticipants = this.registerForm.value;
      this.participantsService.createParticipant(newParticipant).subscribe(
        response => {
          console.log('Participant registered successfully', response);
          alert('Participante registrado correctamente');
          this.router.navigate(['/login']);

        },
        error => {
          console.error('Error registering participant', error);
          alert('Error al registrar al participante, intentelo nuevamente');
        }
      );
    } else {
      alert('Formulario Invalido.');
    }
  }
}
