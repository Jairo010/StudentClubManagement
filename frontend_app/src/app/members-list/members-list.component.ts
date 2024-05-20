import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SharedModule } from "../shared/shared.module";
import { environment } from '../../environments/environment.development';
import { MetaDataColumn } from '../shared/interfaces/metacolumn.interface';
import { UserService } from '../services/api_serivices/user.service';
import { MembersService } from '../services/api_serivices/members.service';

export interface IMembers{
  name:string; 
  age:number; 
} 

@Component({
    selector: 'app-members-list',
    standalone: true,
    templateUrl: './members-list.component.html',
    styleUrl: './members-list.component.css',
    imports: [CommonModule, MatButtonModule, MatIconModule, SharedModule]
})
export class MembersListComponent  {
  private membersService = inject(MembersService);

  data:any = []

  
  MetaDataColumn: MetaDataColumn[] = [
    {field:'card', title:'Cedula'},
    {field:'name', title:'Nombre'},
    {field:'lastName', title:'Apellido'},
    {field:'semester', title:'Semestre'},
    {field:'major', title:'Carrera'},
    {field:'rol', title:'Rol'},
  ]
  records:any =[]
  totalRecords = this.records.length
  constructor(){
    this.loadMembers()
  }
  field: any=[];
  loadMembers(){
    this.membersService.getMembers().subscribe(
      (data) =>{
        
        this.records = data.data;
        this.records.forEach((array:any) => {

          array.forEach((dato: any) => {
            this.field.push({
              card: dato.cedula,
              name: dato.Nombre,
              lastName: dato.Apellido,
              semester: dato.Semestre,
              major: dato.Carreras.Nombre,
              rol: dato.Roles.Nombre
            });
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
  openForm(row:IMembers){


  }
  delete(id:string){

  }
}
