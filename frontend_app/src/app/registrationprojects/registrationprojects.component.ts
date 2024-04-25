import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from "../shared/shared.module";
@Component({
    selector: 'app-registrationprojects',
    standalone: true,
    templateUrl: './registrationprojects.component.html',
    styleUrl: './registrationprojects.component.css',
    imports: [CommonModule, MatButtonModule, MatIconModule, SharedModule]
})
export class RegistrationprojectsComponent {
  members = [
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Alice Johnson'},
    { name: 'Bob Davis' },
  ];
}

