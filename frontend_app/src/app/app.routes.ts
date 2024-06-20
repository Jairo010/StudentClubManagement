import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationprojectsComponent } from './registrationprojects/registrationprojects.component';
import { MembersListComponent } from './members-list/members-list.component';
import { PageIndexComponent } from './core/page-index/page-index.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { RegistrationMembersComponent } from './registration-members/registration-members.component';
import { ResgistrationTasksComponent } from './resgistration-tasks/resgistration-tasks.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { RegistrationClubsComponent } from './registration-clubs/registration-clubs.component';
import { ClubEditFormComponent } from './club-edit-form/club-edit-form.component';
import { ClubsListComponent } from './club-list/club-list.component';
import { EventsListComponent } from './events-list/events-list.component';
import { RegistrationEventsComponent } from './registration-events/registration-events.component';
import { UniversityComponent } from './university/university.component';
import { UniversityListComponent } from './university-list/university-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'pages-index', component: PageIndexComponent},
    { path: 'miembros', component: MembersListComponent },
    { path: 'registromiembros', component: RegistrationMembersComponent},
    { path: 'registroproyectos', component: RegistrationprojectsComponent},
    { path: 'proyectos', component: ProjectListComponent},
    { path: 'clubs', component: RegistrationClubsComponent},
    { path: 'clubs-list', component: ClubsListComponent},
    { path: 'registrotareas', component: ResgistrationTasksComponent},
    { path: 'tareas', component: TasksListComponent},
    { path: 'eventos', component: EventsListComponent},
    { path: 'events', component: RegistrationEventsComponent},
    { path: 'university', component: UniversityComponent},
    { path: 'university-list', component: UniversityListComponent},
];
