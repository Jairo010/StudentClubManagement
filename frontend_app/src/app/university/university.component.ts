import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUniversities } from '../interfaces/universities.interface';
import { CommonModule } from '@angular/common';
import { UniversitiesService } from '../services/api_serivices/universities/universities.service';

@Component({
  selector: 'app-university',
  standalone: true,
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css'],
  imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class UniversityComponent implements OnInit {
  universitiesService = inject(UniversitiesService);
  router = inject(Router);

  universitiesForm = new FormGroup({
    name: new FormControl<any>('', [Validators.required]),
    city: new FormControl<any>('', [Validators.required]),
    province: new FormControl<any>('', [Validators.required]),
  });

  ngOnInit() {}

  onSubmit() {
    if (this.universitiesForm.valid) {
      const universityData: IUniversities = {
        name: this.universitiesForm.get('name')?.value,
        city: this.universitiesForm.get('city')?.value,
        province: this.universitiesForm.get('province')?.value,
      };

      this.universitiesService.createUniversity(universityData).subscribe(
        response => {
          console.log('Universidad registrada con éxito', response);
          this.router.navigate(['/universidades']);
        },
        error => {
          console.error('Error al registrar universidad', error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }

  closeForm() {
    this.router.navigate(['/university-list']);
  }
}
