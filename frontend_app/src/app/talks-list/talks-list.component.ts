import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ITalks } from '../interfaces/talks.interface';
import { TalksService } from '../services/api_serivices/talks/talks.service';
import { TalksEditFormComponent } from '../talks-edit-form/talks-edit-form.component';
import { MetaDataColumn } from '../shared/interfaces/metacolumn.interface';
import { environment } from '../../environments/environment.development';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-talks-list',
  standalone: true,
  templateUrl: './talks-list.component.html',
  styleUrls: ['./talks-list.component.css'],
  imports: [CommonModule, MatButtonModule, MatIconModule, SharedModule]
})
export class TalksListComponent {
  private talksService = inject(TalksService);

  data: any = [];
  displayedColumns: string[] = ['id','topic', 'image', 'startDate', 'endDate', 'status', 'actions'];

  MetaDataColumn: MetaDataColumn[] = [
    { field: 'id', title: 'Codigo' },
    { field: 'topic', title: 'Tema' },
    { field: 'image', title: 'Imagen' },
    { field: 'startDate', title: 'Fecha de Inicio' },
    { field: 'endDate', title: 'Fecha de Fin' },
    { field: 'status', title: 'Estado' }
  ];

  records: any = [];
  totalRecords = this.records.length;
  field: any[] = [];

  constructor(private dialog: MatDialog) {
    this.loadTalks();
  }

  loadTalks() {
    this.talksService.getTalks().subscribe(
      (data) => {
        this.records = data.data;
        this.records.forEach((talk: any) => {
          this.field.push({
            id: talk.id_Charla,
            topic: talk.Tema_Charla,
            image: talk.Imagen_Charla,
            startDate: talk.Hora_Inicio,
            endDate: talk.Hora_Fin,
            status: talk.Estado_Charla
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

  openForm(row: ITalks | null = null) {
    const options = {
      panelClass: 'panel-container',
      disableClose: true,
      data: row
    };

    const dialogRef: MatDialogRef<TalksEditFormComponent> = this.dialog.open(TalksEditFormComponent, options);

    dialogRef.afterClosed().subscribe((response) => {
      if (!response) { return; }
      if (response.id) {
        const talkData = { ...response };
        this.talksService.updateTalk(talkData).subscribe(() => {
          alert('Charla actualizada exitosamente');
          this.reloadPage();
        });
      }
    });
  }

  delete(id:string){
    if (confirm("¿Está seguro de eliminar esta charla?")) {
    this.talksService.deleteTalk(id).subscribe(() => {
      this. reloadPage() 
    }, (error) => {
      console.error('Error deleting member:', error);
    });
   }
  }

  reloadPage() {
    window.location.reload();
  }
}
