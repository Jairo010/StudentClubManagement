import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
    selector: 'app-members-list',
    standalone: true,
    templateUrl: './members-list.component.html',
    styleUrl: './members-list.component.css',
    imports: [CommonModule, MatButtonModule, MatIconModule, NavbarComponent]
})
export class MembersListComponent {
  members = [
    { name: 'John Doe', age: 30 },
    { name: 'Jane Smith', age: 25 },
    { name: 'Alice Johnson', age: 35 },
    { name: 'Bob Davis', age: 40 },
  ];
}
