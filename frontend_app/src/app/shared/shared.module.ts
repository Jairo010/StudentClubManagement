import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import {NgScrollbarModule} from 'ngx-scrollbar';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ ContainerComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    FlexModule,
    MatTableModule,
    NgScrollbarModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:[
    MatButtonModule,MatIconModule,ContainerComponent,NgScrollbarModule,FlexModule,MatTableModule
  ]
})
export class SharedModule { 
  
}
