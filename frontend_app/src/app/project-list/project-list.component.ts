import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment.development';
import { MetaDataColumn } from '../shared/interfaces/metacolumn.interface';

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
  data: IProjects[] = [
    { name: 'Configuración de un software administrativo', description: 'Se realizara la configuración del sistema administrativo de la celula academica' },
    { name: 'Recaudación de fondo para eventos', description: 'Se realizara diferentes actividades que ayuden a generar fondos para los diferentes eventos' },
    { name: 'Venta de insumos tecnologicos', description:'Se realizara una venta de insumos tecnologicos para la obtención de fondos' },
    { name: 'Programación de fiestas de la facultad', description: 'Organización de eventos para la comunidad universitaria' },
    { name: 'Configuración de un software administrativo', description: 'Se realizara la configuración del sistema administrativo de la celula academica' },
    { name: 'Recaudación de fondo para eventos', description: 'Se realizara diferentes actividades que ayuden a generar fondos para los diferentes eventos' },
    { name: 'Venta de insumos tecnologicos', description:'Se realizara una venta de insumos tecnologicos para la obtención de fondos' },
    { name: 'Programación de fiestas de la facultad', description: 'Organización de eventos para la comunidad universitaria' },
    { name: 'Configuración de un software administrativo', description: 'Se realizara la configuración del sistema administrativo de la celula academica' },
    { name: 'Recaudación de fondo para eventos', description: 'Se realizara diferentes actividades que ayuden a generar fondos para los diferentes eventos' },
    { name: 'Venta de insumos tecnologicos', description:'Se realizara una venta de insumos tecnologicos para la obtención de fondos' },
    { name: 'Programación de fiestas de la facultad', description: 'Organización de eventos para la comunidad universitaria' }
  ];
  MetaDataColumn: MetaDataColumn[] = [
    {field:'name', title:'Nombre'},
    {field:'description', title:'Descripción'},
  ]
  records: IProjects[]=[]
  totalRecords = this.records.length
  constructor(){
    this.loadProjects()
  }
  loadProjects(){
    this.records = this.data
    this.totalRecords = this.records.length
    this.changePage(0)
  }
  changePage(page:number){
    const pageSize = environment.PAGE_SIZE
    const skip = pageSize * page
    this.data = this.records.slice(skip, skip + pageSize)
  }
  openForm(row:IProjects){


  }
  delete(id:string){

  }
}
