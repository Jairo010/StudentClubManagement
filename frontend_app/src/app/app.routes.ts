import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationprojectsComponent } from './registrationprojects/registrationprojects.component';
import { MembersListComponent } from './members-list/members-list.component';
import { PageIndexComponent } from './core/page-index/page-index.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { RegistrationMembersComponent } from './registration-members/registration-members.component';
import { RegistrationClubsComponent } from './registration-clubs/registration-clubs.component';

export const routes: Routes = [
    { path: '', redirectTo: '/miembros', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'pages-index', component: PageIndexComponent},
    { path: 'miembros', component: MembersListComponent },
    { path: 'registromiembros', component: RegistrationMembersComponent},
    { path: 'registroproyectos', component: RegistrationprojectsComponent},
    { path: 'proyectos', component: ProjectListComponent},
    { path: 'clubs', component: RegistrationClubsComponent},

    
];
