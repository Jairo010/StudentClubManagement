import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TasksService } from '../services/api_serivices/tasks/tasks.service';
import { ITasks } from '../interfaces/tasks.interface';
import { Router } from '@angular/router';
import { ProjectsService } from '../services/api_serivices/projects/projects.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resgistration-tasks',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './resgistration-tasks.component.html',
  styleUrl: './resgistration-tasks.component.css'
})
export class ResgistrationTasksComponent implements OnInit{  
  tasks = inject(TasksService);
  router = inject(Router);
  task:any;
  projectData: any[] = []
  projects = inject(ProjectsService)

  register = new FormGroup({
    name: new FormControl<any>('', [Validators.required]),
    description: new FormControl<any>('',),
    limitDate: new FormControl<any>('', [Validators.required,]),
    state: new FormControl<any>('', [Validators.required,]),
    evidence: new FormControl<any>('', [Validators.required,]),
    idProject: new FormControl<any>('', [Validators.required,]),
  });

  ngOnInit(): void {
    this.getProjects()
  
  }

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

  getProjects() {
    this.projects.getProjectsCombo().subscribe(
      response => {
        this.projectData = response;
        console.log('Project data:', this.projectData);
      },
      error => {
        console.error('Error al obtener los proyectos', error);
      }
    );
  }  
}
