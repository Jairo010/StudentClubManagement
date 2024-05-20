import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrationprojectsComponent } from "./registrationprojects/registrationprojects.component";
import { CoreModule } from "./core/core.module";
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RegistrationprojectsComponent, LoginComponent, CoreModule]
})
export class AppComponent {
  title = 'frontend_app';
}
