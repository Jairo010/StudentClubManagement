import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { TasksService } from '../services/api_serivices/tasks.service';
import { MetaDataColumn } from '../shared/interfaces/metacolumn.interface';
import { environment } from '../../environments/environment.development';
import { ITasks } from '../interfaces/tasks.interface';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, SharedModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent {
  private tasksService = inject(TasksService);

  data:any = []

  constructor() {
    this.loadTasks()
  }

  
  MetaDataColumn: MetaDataColumn[] = [
    {field:'id', title:'Codigo'},
    {field:'name', title:'Nombre'},
    {field:'description', title:'Descripcion'},
    {field:'limitDate', title:'Fecha Limite'},
    {field:'state', title:'Estado'},
    {field:'evidence', title:'Evidencia'},
    {field:'project', title:'Proyecto'},
  ]
  records:any[] =[]
  totalRecords = this.records.length
  
  field: any=[];
  loadTasks(){
    this.tasksService.getTasks().subscribe(
      (data) =>{
        this.records = data.data;
        console.log(this.records);
        this.records.forEach((dato:any) => {
          
          this.field.push({
            id: dato.id,
            name: dato.Nombre,
            description: dato.Descripcion,
            limitDate: dato.Fecha_Limite,
            state: dato.Estado,
            evidence: dato.Evidencia,
            project: dato.Id_Proyecto.Nombre
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
  openForm(row:ITasks){


  }
  delete(id:string){

  }
}
