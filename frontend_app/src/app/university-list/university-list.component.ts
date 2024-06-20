import { Component, inject } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment.development';
import { MetaDataColumn } from '../shared/interfaces/metacolumn.interface';
import { MatDialog } from '@angular/material/dialog';
import { UniversityEditFormComponent } from '../university-edit-form/university-edit-form.component';
import { IUniversities } from '../interfaces/universities.interface';
import { UniversitiesService } from '../services/api_serivices/universities/universities.service';

@Component({
  selector: 'app-university-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, SharedModule],
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css']
})
export class UniversityListComponent {
  private universitiesService = inject(UniversitiesService);

  data: any = [];
  MetaDataColumn: MetaDataColumn[] = [
    { field: 'name', title: 'Nombre' },
    { field: 'city', title: 'Ciudad' },
    { field: 'province', title: 'Provincia' },
    { field: 'actions', title: 'Acciones' }
  ];
  records: any = [];
  totalRecords = this.records.length;

  constructor(private dialog: MatDialog) {
    this.loadUniversities();
  }

  field: any = [];
  loadUniversities() {
    this.universitiesService.getUniversities().subscribe(
      (data) => {
        this.records = data.data;
        console.log(this.records);
        this.records.forEach((dato: any) => {
          this.field.push({
            id: dato.id,
            name: dato.name,
            city: dato.city,
            province: dato.province
          });
        });

        this.totalRecords = this.records.length;
        this.changePage(0);
      }
    );
  }

  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE;
    const skip = pageSize * page;
    this.data = this.field.slice(skip, skip + pageSize);
  }

  openForm(row: IUniversities | null = null) {
    const options = {
      panelClass: 'panel-container',
      disableClose: true,
      data: row
    };

    const reference = this.dialog.open(UniversityEditFormComponent, options);
    
    reference.afterClosed().subscribe((response) => {
      if (!response) { return; }
      if (response.id) {
        const university = { ...response };
        this.universitiesService.updateUniversity(university).subscribe(() => {
          this.reloadPage();
        });
      }
    });
  }

  delete(id: number) {
    this.universitiesService.deleteUniversity(id).subscribe(() => {
      this.reloadPage();
    }, (error) => {
      console.error('Error deleting university:', error);
    });
  }

  reloadPage() {
    window.location.reload();
  }
}
