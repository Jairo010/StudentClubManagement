import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TasksService } from '../services/api_serivices/tasks.service';
import { ITasks } from '../interfaces/tasks.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resgistration-tasks',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './resgistration-tasks.component.html',
  styleUrl: './resgistration-tasks.component.css'
})
export class ResgistrationTasksComponent {
  tasks = inject(TasksService);
  router = inject(Router);
  task:any;

  register = new FormGroup({
    name: new FormControl<any>('', [Validators.required]),
    description: new FormControl<any>('',),
    limitDate: new FormControl<any>('', [Validators.required,]),
    state: new FormControl<any>('', [Validators.required,]),
    evidence: new FormControl<any>('', [Validators.required,]),
    idProject: new FormControl<any>('', [Validators.required,]),
  });


  onSubmit() {
    if (this.register.valid) {
      const taskData: ITasks = {
        name: this.register.get('name')?.value,
        description: this.register.get('description')?.value,
        limitDate: this.register.get('limitDate')?.value,
        state: this.register.get('state')?.value,
        evidence: this.register.get('evidence')?.value,
        idProject: this.register.get('idProject')?.value,
      };

      this.tasks.createTasks(taskData).subscribe(
        response => {
          this.task = response;
          alert('tarea registrado exitosamente');
          console.log('Tarea registrado exitosamente', response);
          this.router.navigate(['proyectos']);

        },
        error => {
          console.error('Error al registrar una tarea', error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }
}
