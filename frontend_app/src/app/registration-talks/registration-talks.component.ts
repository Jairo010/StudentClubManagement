import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ITalks } from '../interfaces/talks.interface';
import { TalksService } from '../services/api_serivices/talks/talks.service';

@Component({
  selector: 'app-registration-talks',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './registration-talks.component.html',
  styleUrls: ['./registration-talks.component.css']
})
export class RegistrationTalksComponent implements OnInit {
  talksService = inject(TalksService);
  router = inject(Router);

  talks = new FormGroup({
    topic: new FormControl<any>('', [Validators.required]),
    image: new FormControl<any>('', [Validators.required]),
    startDate: new FormControl<any>('', [Validators.required]),
    endDate: new FormControl<any>('', [Validators.required]),
    status: new FormControl<any>('', [Validators.required])
  });

  ngOnInit() {}

  onSubmit() {
    if (this.talks.valid) {
      const talkData: ITalks = {
        topic: this.talks.get('topic')?.value,
        image: this.talks.get('image')?.value,
        startDate: this.talks.get('startDate')?.value,
        endDate: this.talks.get('endDate')?.value,
        status: this.talks.get('status')?.value
      };

      this.talksService.createTalk(talkData).subscribe(
        response => {
          alert('Charla registrada con éxito');
          console.log('Charla registrada con éxito', response);
          this.router.navigate(['/talks-list']);
        },
        error => {
          alert('Error Charla registrada');
          console.error('Error al registrar charla', error);
        }
      );
    } else {
      alert('Formulario inválido');
    }
  }
}
