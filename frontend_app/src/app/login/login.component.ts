import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoreModule } from "../core/core.module";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [CoreModule]
})
export class LoginComponent {
  constructor(private router: Router) {
    
  }

  onLogin(){
    this.router.navigate(['/pages-index']);
  }

}
