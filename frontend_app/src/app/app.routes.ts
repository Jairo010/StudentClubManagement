import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationprojectsComponent } from './registrationprojects/registrationprojects.component';
import { MembersListComponent } from './members-list/members-list.component';
import { PageIndexComponent } from './core/page-index/page-index.component';
import { ProjectListComponent } from './project-list/project-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'pages-index', component: PageIndexComponent},
    { path: 'miembros', component: MembersListComponent },
    { path: 'registroproyectos', component: RegistrationprojectsComponent},
    { path: 'proyectos', component: ProjectListComponent},
   
];
