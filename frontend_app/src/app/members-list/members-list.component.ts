import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SharedModule } from "../shared/shared.module";
import { environment } from '../../environments/environment.development';
import { MetaDataColumn } from '../shared/interfaces/metacolumn.interface';
import { CoreModule } from "../core/core.module";

export interface IMembers{
  name:string; 
  age:number; 
} 

@Component({
    selector: 'app-members-list',
    standalone: true,
    templateUrl: './members-list.component.html',
    styleUrl: './members-list.component.css',
    imports: [CommonModule, MatButtonModule, MatIconModule, SharedModule, CoreModule]
})
export class MembersListComponent {
  expanded=true

  toggleExpanded(expanded:boolean){
    this.expanded = expanded
  }
  data: IMembers[] = [
    { name: 'John Doe', age: 30 },
    { name: 'Jane Smith', age: 25 },
    { name: 'Alice Johnson', age: 35 },
    { name: 'Bob Davis', age: 40 },
    { name: 'Michael Brown', age: 28 },
    { name: 'Emily Wilson', age: 32 },
    { name: 'David Martinez', age: 45 },
    { name: 'Sarah Thompson', age: 37 },
    { name: 'Daniel Lee', age: 29 },
    { name: 'Jennifer Rodriguez', age: 41 },
    { name: 'Christopher Taylor', age: 27 },
    { name: 'Amanda Harris', age: 33 },
    { name: 'Matthew Clark', age: 38 },
    { name: 'Laura Lewis', age: 31 },
    { name: 'James White', age: 42 },
    { name: 'Olivia Moore', age: 26 },
    { name: 'Joshua King', age: 39 },
    { name: 'Sophia Turner', age: 34 },
    { name: 'Ryan Allen', age: 36 },
    { name: 'Emma Scott', age: 43 }
  ];
  
  MetaDataColumn: MetaDataColumn[] = [
    {field:'name', title:'Nombre'},
    {field:'age', title:'Edad'},
  ]
  records: IMembers[]=[]
  totalRecords = this.records.length
  constructor(){
    this.loadMembers()
  }
  loadMembers(){
    this.records = this.data
    this.totalRecords = this.records.length
    this.changePage(0)
  }
  changePage(page:number){
    const pageSize = environment.PAGE_SIZE
    const skip = pageSize * page
    this.data = this.records.slice(skip, skip + pageSize)
  }
  openForm(row:IMembers){


  }
  delete(id:string){

  }
}
