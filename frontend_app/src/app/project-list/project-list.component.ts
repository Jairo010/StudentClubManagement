import { Component, inject } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment.development';
import { MetaDataColumn } from '../shared/interfaces/metacolumn.interface';
import { ProjectsService } from '../services/api_serivices/projects.service';

export interface IProjects{
  name:string; 
  description:string; 
} 
@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, SharedModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  private projectsService = inject(ProjectsService);

  data:any = []

  
  MetaDataColumn: MetaDataColumn[] = [
    {field:'id', title:'Codigo'},
    {field:'name', title:'Nombre'},
    {field:'description', title:'Descripcion'},
    {field:'dateStart', title:'Fecha Inicio'},
    {field:'dateEnd', title:'Fecha FIn'},
    {field:'club', title:'Club'},
  ]
  records:any =[]
  totalRecords = this.records.length
  constructor(){
    this.loadProjects()
  }
  
  field: any=[];
  loadProjects(){
    this.projectsService.getProjects().subscribe(
      (data) =>{
        
        
        this.records = data.data;
        console.log(this.records);
        this.records.forEach((dato:any) => {
          
          this.field.push({
            id: dato.id,
            name: dato.Nombre,
            description: dato.Descripcion,
            dateStart: dato.Fecha_Ini,
            dateEnd: dato.Fecha_Fin,
            club: dato.Id_Club.Nombre
          });
        })

        this.totalRecords = this.records.length
        this.changePage(0)
      }
    )
    
  }
  changePage(page:number){
    const pageSize = environment.PAGE_SIZE
    const skip = pageSize * page
    this.data = this.field.slice(skip, skip + pageSize)
  }
  openForm(row:IProjects){


  }
  delete(id:string){
    this.projectsService.deleteProject(id).subscribe(() => {
      this.loadProjects()
    }, (error) => {
      console.error('Error deleting project:', error);
    });
  }
  }
