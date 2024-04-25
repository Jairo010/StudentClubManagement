import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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
  constructor(private router: Router) { }
  menuVisible: boolean = false;
  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }
  menuItemClicked(route: string): void {
    this.router.navigate([route]);

  }
}