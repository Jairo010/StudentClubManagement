import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IEvents } from '../interfaces/events.interface';
import { CommonModule } from '@angular/common';
import { EventsService } from '../services/api_serivices/events/events.service';

@Component({
  selector: 'app-registration-events',
  standalone: true,
  templateUrl: './registration-events.component.html',
  styleUrls: ['./registration-events.component.css'],
  imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class RegistrationEventsComponent implements OnInit {
  events = inject(EventsService);
  router = inject(Router);
  project:any;

  eventos = new FormGroup({
    name: new FormControl<any>('', [Validators.required]),
    description: new FormControl<any>('', [Validators.required]),
    startDate: new FormControl<any>('', [Validators.required]),
    endDate: new FormControl<any>('', [Validators.required]),
    typeEvent: new FormControl<any>('', [Validators.required]),
  });

  ngOnInit() {}

  onSubmit() {
    if (this.eventos.valid) {
      const eventData: IEvents = {
        name: this.eventos.get('name')?.value,
        description: this.eventos.get('description')?.value,
        startDate: this.eventos.get('startDate')?.value,
        endDate: this.eventos.get('endDate')?.value,
        typeEvent: this.eventos.get('typeEvent')?.value,
      };

      this.events.createEvent(eventData).subscribe(
        response => {
          alert('Evento registrado exitosamente');
          console.log('Evento registrado con éxito', response);
          this.router.navigate(['/eventos']);
        },
        error => {
          alert('Error al registrar el evento');
          console.error('Error al registrar evento', error);
        }
      );
    } else {
      alert('Formulario inválido');
    }
  }

  closeForm() {
    this.router.navigate(['/eventos']);
  }
}
