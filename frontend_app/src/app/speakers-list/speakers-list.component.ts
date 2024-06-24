import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ISpeakers } from '../interfaces/speakers.interface';
import { SpeakersService } from '../services/api_serivices/speakers/speakers.service';
import { SpeakersEditFormComponent } from '../speakers-edit-form/speakers-edit-form.component';
import { MetaDataColumn } from '../shared/interfaces/metacolumn.interface';
import { environment } from '../../environments/environment.development';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-speakers-list',
  standalone: true,
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.css'],
  imports: [CommonModule, MatButtonModule, MatIconModule, SharedModule]
})
export class SpeakersListComponent {
  private speakersService = inject(SpeakersService);

  data: any = [];
  displayedColumns: string[] = ['card', 'name', 'lastName', 'email', 'phone','topic', 'actions'];

  ngOnInit(): void{
    this.loadSpeakers();
  }

  MetaDataColumn: MetaDataColumn[] = [
    { field: 'card', title: 'Cédula' },
    { field: 'name', title: 'Nombre' },
    { field: 'lastName', title: 'Apellido' },
    { field: 'email', title: 'Correo' },
    { field: 'phone', title: 'Teléfono' },
    { field: 'topic', title: 'Tema' }
  ];

  records: any = [];
  totalRecords = this.records.length;
  field: any[] = [];

  constructor(private dialog: MatDialog) {
    this.loadSpeakers();
  }

  loadSpeakers() {
    this.speakersService.getSpeakers().subscribe(
      (data) => {
        this.records = data.data;
        this.records.forEach((speaker: any) => {
          this.field.push({
            card: speaker.Cedula_Ponente,
            name: speaker.Nombre_Ponente,
            lastName: speaker.Apellido_Ponente,
            email: speaker.Correo_Ponente,
            phone: speaker.Telefono_Ponente,
            biography: speaker.Biografia_Ponente,
            topic: speaker.Tema_Charla

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

  openForm(row: ISpeakers | null = null) {
    const options = {
      panelClass: 'panel-container',
      disableClose: true,
      data: row
    };

    const dialogRef: MatDialogRef<SpeakersEditFormComponent> = this.dialog.open(SpeakersEditFormComponent, options);

    dialogRef.afterClosed().subscribe((response) => {
      if (!response) { return; }
      if (response.card) {
        const speakerData = { ...response };
        this.speakersService.updateSpeaker(speakerData).subscribe(() => {
          this.reloadPage();
        });
      }
    });
  }

  delete(card: string) {
    this.speakersService.deleteSpeaker(card).subscribe(() => {
      this.reloadPage();
    }, (error) => {
      console.error('Error al eliminar el speaker:', error);
    });
  }

  reloadPage() {
    window.location.reload();
  }
}
