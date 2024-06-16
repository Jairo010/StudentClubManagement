import { Component, inject, OnInit } from '@angular/core';
import { ProjectsService } from '../services/api_serivices/projects/projects.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IProjects } from '../interfaces/projects.interface';
import { Router } from '@angular/router';
import { ClubsService } from '../services/api_serivices/clubs/clubs.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-registrationprojects',
  standalone: true,
  templateUrl: './registrationprojects.component.html',
  styleUrl: './registrationprojects.component.css',
  imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class RegistrationprojectsComponent implements OnInit{
  projects = inject(ProjectsService);
  router = inject(Router);
  project:any;
  clubs = inject(ClubsService)
  clubsData: any[] = [];

  register = new FormGroup({
    name: new FormControl<any>('', [Validators.required]),
    description: new FormControl<any>('',),
    startDate: new FormControl<any>('', [Validators.required,]),
    endDate: new FormControl<any>('', [Validators.required,]),
    club: new FormControl<any>('', [Validators.required,]),
  });

  ngOnInit(){
    this.getClubs()    
  }

  onSubmit() {
    if (this.register.valid) {
      const projectData: IProjects = {
        name: this.register.get('name')?.value,
        description: this.register.get('description')?.value,
        startDate: this.register.get('startDate')?.value,
        endDate: this.register.get('endDate')?.value,
        idClub: this.register.get('club')?.value,
      };

      this.projects.createProject(projectData).subscribe(
        response => {
          this.project = response;
          alert('Proyecto registrado exitosamente');
          console.log('Proyecto registrado exitosamente', response);
          this.router.navigate(['proyectos']);

        },
        error => {
          console.error('Error al registrar el proyecto', error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }
    
  getClubs() {
    this.clubs.getClubsCombo().subscribe(
      response => {
        this.clubsData = response;
        console.log('Clubs data:', this.clubsData);
      },
      error => {
        console.error('Error al obtener los clubs', error);
      }
    );
  }  
  
}

