import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MembersListComponent } from '../members-list/members-list.component';

@Component({
  selector: 'app-navbar',  
  standalone: true,
  imports: [RouterOutlet, MembersListComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}