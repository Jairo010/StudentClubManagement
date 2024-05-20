import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from "../shared/shared.module";
import { environment } from '../../environments/environment.development';
import { MetaDataColumn } from '../shared/interfaces/metacolumn.interface';
import { MembersService } from '../services/api_serivices/members.service';
import { Router } from '@angular/router';

export interface IMembers {
  name: string;
  age: number;
}

@Component({
  selector: 'app-members-list',
  standalone: true,
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css'],
  imports: [CommonModule, MatButtonModule, MatIconModule, SharedModule]
})
export class MembersListComponent {
  private membersService = inject(MembersService);
  router = inject(Router);

  data: any = []

  MetaDataColumn: MetaDataColumn[] = [
    { field: 'card', title: 'Cedula' },
    { field: 'name', title: 'Nombre' },
    { field: 'lastName', title: 'Apellido' },
    { field: 'semester', title: 'Semestre' },
    { field: 'major', title: 'Carrera' },
    { field: 'rol', title: 'Rol' },
  ]
  records: any = []
  totalRecords = 0;

  constructor() {
    this.loadMembers();
  }

  field: any = [];

  loadMembers() {
    this.membersService.getMembers().subscribe(
      (data) => {
        this.records = data.data;

        this.records.forEach((record: any) => {
          if (Array.isArray(record['0'])) {
            record['0'].forEach((dato: any) => {
              this.field.push({
                id: record.id,
                card: dato.cedula,
                name: dato.Nombre,
                lastName: dato.Apellido,
                semester: dato.Semestre,
                major: dato.Carreras.Nombre,
                rol: dato.Roles.Nombre
              });
            });
          } else if (typeof record['0'] === 'object' && record['0'] !== null) {
            const dato = record['0'];
            this.field.push({
              id: record.id,
              card: dato.cedula,
              name: dato.Nombre,
              lastName: dato.Apellido,
              semester: dato.Semestre,
              major: dato.Carreras.Nombre,
              rol: dato.Roles.Nombre
            });
          } else {
            console.error('Expected an array or object but got:', record['0']);
          }
        });

        this.totalRecords = this.field.length;
        this.changePage(0);
      },
      (error) => {
        console.error('Error fetching members:', error);
      }
    );
  }

  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE;
    const skip = pageSize * page;
    this.data = this.field.slice(skip, skip + pageSize);
  }

  openForm(row: IMembers) {
    // Implement form opening logic here
  }

    delete(id: string) {
      this.membersService.deleteMember(id).subscribe(() => {
        this.loadMembers()
      }, (error) => {
        console.error('Error deleting member:', error);
      });
    }
}
