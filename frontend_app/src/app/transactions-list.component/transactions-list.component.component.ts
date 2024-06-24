import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { TransactionsRegisterFormComponent } from '../transactions-register-form/transactions-register-form.component';
import { TransactionsService } from '../services/api_serivices/transactions/transactions.service';
import { MetaDataColumn } from '../shared/interfaces/metacolumn.interface';
import { environment } from '../../environments/environment.development';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-transactions-list',
  standalone: true,
  templateUrl: './transactions-list.component.component.html',
  styleUrl: './transactions-list.component.component.css',
  imports: [CommonModule, MatButtonModule, MatIconModule,SharedModule]
})
export class TransactionsListComponent implements OnInit {
  private transactionsService = inject(TransactionsService);

  data: any[] = [];
  displayedColumns: string[] = ['id', 'amount', 'typeRegister', 'typeTransaction', 'idCompetition', 'idGroup', 'total', 'description', 'actions'];

  ngOnInit(): void {
    this.loadTransactions();
  }

  MetaDataColumn: MetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'amount', title: 'Monto' },
    { field: 'typeRegister', title: 'Tipo de Registro' },
    { field: 'typeTransaction', title: 'Tipo de Transacción' },
    { field: 'idCompetition', title: 'Concurso' },
    { field: 'idGroup', title: 'Grupo' },
    { field: 'total', title: 'Total' },
    { field: 'description', title: 'Descripción' },
    { field: 'actions', title: 'Acciones' }
  ];

  records: any[] = [];
  totalRecords = this.records.length;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.loadTransactions();
  }

  loadTransactions() {
    this.transactionsService.getTransactions().subscribe(
      (data) => {
        this.records = data;
        this.totalRecords = this.records.length;
        this.changePage(0);
      },
      (error) => {
        console.error('Error al cargar las transacciones:', error);
      }
    );
  }

  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE;
    const skip = pageSize * page;
    this.data = this.records.slice(skip, skip + pageSize);
  }

  openForm(row: any | null = null) {
    const options = {
      panelClass: 'panel-container',
      disableClose: true,
      data: row
    };

    const dialogRef = this.dialog.open(TransactionsRegisterFormComponent, options);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.snackBar.open('Transacción registrada exitosamente', 'Cerrar', {
          duration: 3000,
        });
        this.loadTransactions();
      }
    });
  }

  deleteTransaction(id: number) {
    if (confirm('¿Está seguro de eliminar esta transacción?')) {
      this.transactionsService.deleteTransaction(id.toString()).subscribe(() => {
        this.snackBar.open('Transacción eliminada correctamente', 'Cerrar', {
          duration: 3000,
        });
        this.loadTransactions();
      }, (error) => {
        console.error('Error al eliminar la transacción:', error);
      });
    }
  }
}
