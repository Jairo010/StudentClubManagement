import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { TasksService } from '../services/api_serivices/tasks.service';
import { MetaDataColumn } from '../shared/interfaces/metacolumn.interface';
import { environment } from '../../environments/environment.development';
import { ITasks } from '../interfaces/tasks.interface';
import { TasksEditFormComponent } from '../tasks-edit-form/tasks-edit-form.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

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

  constructor(private dialog:MatDialog) {
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
  openForm(row: ITasks | null = null) {
    const options = {
      panelClass: 'panel-container',
      disableClose: true,
      data: row
    };

    const reference: MatDialogRef<TasksEditFormComponent> = this.dialog.open(TasksEditFormComponent, options);
    
    reference.afterClosed().subscribe((response) => {
      if(!response){return}
      if(response.id){
        const task = {...response}
        this.tasksService.updateTask(task).subscribe(() => {
          console.log("hora: "+JSON.stringify(task))
          this. reloadPage() 
        })
      } 
    });
  }
  delete(id:string){
    this.tasksService.deleteTask(id).subscribe(() => {
      this. reloadPage() 
    }, (error) => {
      console.error('Error deleting member:', error);
    });
  }
  reloadPage() {
    window.location.reload();
  }
}
