import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, SharedModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  proyectos = [
    { name: 'Configuración de un software administrativo', description: 'Se realizara la configuración del sistema administrativo de la celula academica' },
    { name: 'Recaudación de fondo para eventos', description: 'Se realizara diferentes actividades que ayuden a generar fondos para los diferentes eventos' },
    { name: 'Venta de insumos tecnologicos', description:'Se realizara una venta de insumos tecnologicos para la obtención de fondos' },
    { name: 'Programación de fiestas de la facultad', description: 'Organización de eventos para la comunidad universitaria' },
  ];
}
