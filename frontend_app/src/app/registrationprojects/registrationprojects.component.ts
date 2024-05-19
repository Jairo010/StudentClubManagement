import { Component, inject } from '@angular/core';
import { ProjectsService } from '../services/api_serivices/projects.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
    selector: 'app-registrationprojects',
    standalone: true,
    templateUrl: './registrationprojects.component.html',
    styleUrl: './registrationprojects.component.css',
    imports: [FormsModule, ReactiveFormsModule]
})
export class RegistrationprojectsComponent {
  member = inject(ProjectsService);

  register = new FormGroup({
    name: new FormControl<any>('', [Validators.required, Validators.email]),
    description: new FormControl<any>('', ),
    startDate: new FormControl<any>('', [Validators.required,]),
    endDate: new FormControl<any>('', [Validators.required,]),
    ckub: new FormControl<any>('', [Validators.required,]),
  });


  onSubmit(){
    
  }
}

