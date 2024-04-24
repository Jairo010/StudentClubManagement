import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-members-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './members-list.component.html',
  styleUrl: './members-list.component.css',
})
export class MembersListComponent {
  members = [
    { name: 'John Doe', age: 30 },
    { name: 'Jane Smith', age: 25 },
    { name: 'Alice Johnson', age: 35 },
    { name: 'Bob Davis', age: 40 },
  ];
}
