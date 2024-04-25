import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MembersListComponent } from '../members-list/members-list.component';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [RouterOutlet, MembersListComponent, MatIcon]
})
export class NavbarComponent {
  expanded=true

  toggleExpanded(expanded:boolean){
    this.expanded = expanded
  }
}