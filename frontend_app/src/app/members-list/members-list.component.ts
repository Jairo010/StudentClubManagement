import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from "../shared/shared.module";
import { environment } from '../../environments/environment.development';
import { MetaDataColumn } from '../shared/interfaces/metacolumn.interface';
import { CoreModule } from "../core/core.module";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MembersService } from '../services/api_serivices/members.service';
import { FormComponent } from '../core/form/form.component';

export interface IMembers {
  nombre: string;
  apellido: string;
  semestre: string;
}

@Component({
  selector: 'app-members-list',
  standalone: true,
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css'],
  imports: [CommonModule, MatButtonModule, MatIconModule, SharedModule, CoreModule]
})
export class MembersListComponent {
  expanded = true;

  toggleExpanded(expanded: boolean) {
    this.expanded = expanded;
  }

  records: IMembers[] = [];
  data: IMembers[] = [];
  totalRecords = this.records.length;

  metaDataColumns: MetaDataColumn[] = [
    { field: 'Nombre', title: 'Nombre' },
    { field: 'Apellido', title: 'Apellido' },
    { field: 'Semestre', title: 'Semestre' }
  ];

  constructor(
    private memberService: MembersService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private bottomSheet: MatBottomSheet
  ) {
    this.loadMembers();
  }

  loadMembers() {
    this.memberService.getMembers().subscribe((response: IMembers[]) => {
      this.records = response;
      this.totalRecords = this.records.length;
      this.changePage(0);
    });
  }

  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE;
    const skip = pageSize * page;
    this.data = this.records.slice(skip, skip + pageSize);
  }

  openForm(row: IMembers | null = null) {
    const options = {
      panelClass: 'panel-container',
      disableClose: true,
      data: row
    };
    const reference: MatDialogRef<FormComponent> = this.dialog.open(FormComponent, options);

    reference.afterClosed().subscribe((response) => {
      if (!response) { return; }
      if (response.id) {
        const member = { ...response };
        this.memberService.updateMember(response.card, member).subscribe(() => {
          this.loadMembers();
          this.showMessage('Registro actualizado');
        });
      } else {
        const member = { ...response };
        this.memberService. signUpUserMember(member).subscribe(() => {
          this.loadMembers();
          this.showMessage('Registro exitoso');
        });
      }
    });
  }

  delete(id: string) {
    this.memberService.deleteMember(id).subscribe(() => {
      this.loadMembers();
      this.showMessage('Registro eliminado');
    });
  }

  showMessage(message: string, duration: number = 5000) {
    this.snackBar.open(message, '', { duration });
  }

  showBottomSheet(title: string, fileName: string, data: any) {
    this.bottomSheet.open(DownloadComponent, { data: this.data });
  }

  doAction(action: string) {
    switch (action) {
      case 'DOWNLOAD':
        this.showBottomSheet('Lista de Miembros', 'miembros', this.records);
        break;
      case 'NEW':
        this.openForm();
        break;
    }
  }
}
