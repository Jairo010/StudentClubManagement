import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrationprojectsComponent } from "./registrationprojects/registrationprojects.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RegistrationprojectsComponent
    ]
})
export class AppComponent {
  title = 'frontend_app';
}
