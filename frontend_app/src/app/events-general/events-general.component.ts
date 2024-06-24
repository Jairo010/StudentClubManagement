import { Component, inject } from '@angular/core';
import { EventsService } from '../services/api_serivices/events/events.service';
import { CompetitionsService } from '../services/api_serivices/competitions/competitions.service';
import { TalksService } from '../services/api_serivices/talks/talks.service';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { ICompetition } from '../interfaces/competition.interface';
import { ITalks } from '../interfaces/talks.interface';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-events-general',
  standalone: true,
  imports: [CommonModule, MatButtonModule,MatPaginatorModule, MatIconModule, MatSelectModule, MatTableModule, SharedModule, FormsModule],
  templateUrl: './events-general.component.html',
  styleUrls: ['./events-general.component.css']
})
export class EventsGeneralComponent {
  private eventsService = inject(EventsService);
  private competitionsService = inject(CompetitionsService);
  private talksService = inject(TalksService);

  events: any[] = [];
  selectedEvent: any = null;
  competitions: any[] = [];
  talks: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
  allCompetitions: ICompetition[] = [];
  allTalks: ITalks[] = [];
  pageSize = 2; 
  pageIndex = 2;
  totalCompetition = 0;
  totalTalks = 0;

  constructor(private dialog: MatDialog) {
    this.loadEvents();
    this.loadAllCompetitions();
    this.loadAllTalks();
  }

  loadEvents() {
    this.eventsService.getEvents().subscribe(data => {
      this.events = data.data;
    });
  }

  loadAllCompetitions() {
    this.competitionsService.getCompetitions().subscribe(data => {
      this.allCompetitions = data.data;
    });
  }

  loadAllTalks() {
    this.talksService.getTalks().subscribe(data => {
      this.allTalks = data.data;
    });
  }

  onEventChange(event: any) {
    this.selectedEvent = event.value;
    this.loadCompetitions();
    this.loadTalks();
  }

  loadCompetitions() {
    if (this.selectedEvent) {
      this.eventsService.getCompetitionsByEvent(this.selectedEvent.id).subscribe(data => {
        this.competitions = data.data;
        this.totalCompetition = this.competitions.length; 
        this.pageIndex = 0;
      });
    }
  }

  loadTalks() {
    if (this.selectedEvent) {
      this.eventsService.getTalksByEvent(this.selectedEvent.id).subscribe(data => {
        this.talks = data.data;
        this.totalTalks = this.talks.length; 
        this.pageIndex = 0;
      });
    }
  }

  assignCompetition() {
    const competitionId = prompt("Enter competition ID to assign:");
    if (competitionId) {
      this.eventsService.assignCompetition(this.selectedEvent.id, competitionId).subscribe(() => {
        this.loadCompetitions();
      });
    }
  }

  assignTalk() {
    const talkId = prompt("Enter talk ID to assign:");
    if (talkId) {
      this.eventsService.assignTalk(this.selectedEvent.id, talkId).subscribe({
        next: (response) => {
          console.log('Assign talk response: ', response);
          if (response.error) {
            alert(`Error: ${response.data.message}`);
          } else {
            this.loadTalks();
          }
        },
        error: (error) => {
          console.error('Assign talk error: ', error);
          alert('Failed to assign talk. Please try again.');
        }
      });
    }
  }

  deleteAssignedCompetition(idCompetition: string) {
    if (confirm("¿Está seguro de eliminar esta competicion?")) {
    this.eventsService.deleteAssignedCompetition(this.selectedEvent!.id, idCompetition).subscribe(() => {
      this.loadCompetitions();
    });
  }
  }

  deleteAssignedTalk(idTalk: string) {
    if (confirm("¿Está seguro de eliminar esta charla?")) {
      this.eventsService.deleteAssignedTalk(this.selectedEvent!.id, idTalk).subscribe({
        next: () => {
          this.loadTalks();
          console.log('Charla eliminada exitosamente');
        },
        error: (error) => {
          console.error('Error al eliminar la charla:', error);
          alert('Ocurrió un error al eliminar la charla. Por favor, inténtalo de nuevo.');
        }
      });
    }  

  }
  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
  }
}
