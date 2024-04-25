import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrationprojectsComponent } from "./registrationprojects/registrationprojects.component";
import { LoginComponent } from "./login/login.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CoreModule } from "./core/core.module";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RegistrationprojectsComponent, LoginComponent, NavbarComponent, CoreModule]
})
export class AppComponent {
  title = 'frontend_app';
}
