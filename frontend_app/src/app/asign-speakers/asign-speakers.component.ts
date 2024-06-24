import { Component, OnInit } from '@angular/core';
import { TalksService } from '../services/api_serivices/talks/talks.service';
import { SpeakersService } from '../services/api_serivices/speakers/speakers.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

export interface ITalks {
  id_Charla: string;
  Tema_Charla: string;
  Imagen_Charla: string;
  Hora_Inicio: Date;
  Hora_Fin: Date;
  Estado_Charla: string;
}

@Component({
  selector: 'app-asign-speakers',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule,
    SharedModule,
    FormsModule
  ],
  templateUrl: './asign-speakers.component.html',
  styleUrls: ['./asign-speakers.component.css']
})
export class AsignSpeakersComponent implements OnInit {
  talks: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'topic', 'actions'];
  selectedTalk: any = null;
  speakers: any[] = [];
  loadingSpeakers = false;
  pageSize = environment.PAGE_SIZE;
  pageIndex = 0;

  constructor(private talksService: TalksService, private speakersService: SpeakersService) {}

  ngOnInit(): void {
    this.loadTalks();
  }

  loadTalks() {
    this.talksService.getTalksCombo().subscribe(data => {
      this.talks = data;
    });
  }

  onSelectTalk(talk: ITalks) {
    this.selectedTalk = talk;
    this.loadSpeakers();
  }

  loadSpeakers() {
    if (this.selectedTalk) {
      this.loadingSpeakers = true;
      this.talksService.getSpeakersByTalk(this.selectedTalk.id_Charla).subscribe(
        data => {
          this.speakers = data.data;
          this.loadingSpeakers = false;
        },
        error => {
          console.error('Error loading speakers:', error);
          this.loadingSpeakers = false;
        }
      );
    }
  }

  addSpeaker() {
    const speakerId = prompt("Ingrese el ID del ponente a agregar:");
    if (speakerId) {
      this.talksService.assignTalk(this.selectedTalk!.id_Charla, speakerId).subscribe(
        () => {
          this.loadSpeakers();
          alert('Se agregó el ponente correctamente.');
        },
        error => {
          console.error('Error adding speaker:', error);
        }
      );
    }
  }

  
  deleteSpeaker(speakerId: string) {
    if (confirm("¿Está seguro de eliminar este ponente?")) {
      this.talksService.deleteAssignedTalk(this.selectedTalk!.id_Charla, speakerId).subscribe(
        () => {
          this.loadSpeakers();
          alert('Se eliminó el ponente correctamente.');
        },
        error => {
          console.error('Error deleting speaker:', error);
        }
      );
    }
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.loadSpeakers(); 
  }
}
