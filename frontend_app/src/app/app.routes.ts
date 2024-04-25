import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { RegistrationprojectsComponent } from './registrationprojects/registrationprojects.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'inicio', component: LayoutComponent },
    { path: 'registroproyectos', component: RegistrationprojectsComponent},
];
