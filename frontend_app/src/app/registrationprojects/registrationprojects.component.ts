import { Component } from '@angular/core';
@Component({
    selector: 'app-registrationprojects',
    standalone: true,
    templateUrl: './registrationprojects.component.html',
    styleUrl: './registrationprojects.component.css',
    imports: []
})
export class RegistrationprojectsComponent {
  members = [
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Alice Johnson'},
    { name: 'Bob Davis' },
  ];
}

