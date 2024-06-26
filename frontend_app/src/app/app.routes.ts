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
import { ClubsListComponent } from './club-list/club-list.component';
import { EventsListComponent } from './events-list/events-list.component';
import { RegistrationEventsComponent } from './registration-events/registration-events.component';
import { UniversityComponent } from './university/university.component';
import { UniversityListComponent } from './university-list/university-list.component';
import { RegistrationGroupsComponent } from './registration-groups/registration-groups.component';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { CompetitionsListComponent } from './competitions-list/competitions-list.component';
import { RegistrationCompetitionsComponent } from './registration-competitions/registration-competitions.component';
import { RegistrationSpeakersComponent } from './registration-speakers/registration-speakers.component';
import { SpeakersListComponent } from './speakers-list/speakers-list.component';
import { RegistrationTalksComponent } from './registration-talks/registration-talks.component';
import { TalksListComponent } from './talks-list/talks-list.component';
import { ClubsGeneralComponent } from './clubs-general/clubs-general.component';
import { EventsGeneralComponent } from './events-general/events-general.component';
import { RegistrationParticipantsComponent } from './registration-participants/registration-participants.component';
import { AsignSpeakersComponent } from './asign-speakers/asign-speakers.component';
import { RegistrationParticipantCompetitionComponent } from './registration-participant-competition/registration-participant-competition.component';
import { CompetitionParticipantsListComponent } from './competition-participants-list/competition-participants-list.component';
import { GroupsParticipantsComponent } from './groups-participants/groups-participants.component';
import { ListParticipantsComponent } from './list-participants/list-participants.component';
import { TransactionsRegisterFormComponent } from './transactions-register-form/transactions-register-form.component';
import { TransactionsListComponent } from './transactions-list.component/transactions-list.component.component';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'pages-index', component: PageIndexComponent },
    { path: 'miembros', component: MembersListComponent, canActivate: [AuthGuard] },
    { path: 'registromiembros', component: RegistrationMembersComponent, canActivate: [AuthGuard] },
    { path: 'registroproyectos', component: RegistrationprojectsComponent, canActivate: [AuthGuard] },
    { path: 'proyectos', component: ProjectListComponent, canActivate: [AuthGuard] },
    { path: 'clubs', component: RegistrationClubsComponent, canActivate: [AuthGuard] },
    { path: 'clubs-list', component: ClubsListComponent, canActivate: [AuthGuard] },
    { path: 'clubs-miembros', component: ClubsGeneralComponent, canActivate: [AuthGuard] },
    { path: 'registrotareas', component: ResgistrationTasksComponent, canActivate: [AuthGuard] },
    { path: 'tareas', component: TasksListComponent, canActivate: [AuthGuard] },
    { path: 'eventos', component: EventsListComponent, canActivate: [AuthGuard] },
    { path: 'eventos-generales', component: EventsGeneralComponent, canActivate: [AuthGuard] },
    { path: 'events', component: RegistrationEventsComponent, canActivate: [AuthGuard] },
    { path: 'university', component: UniversityComponent, canActivate: [AuthGuard] },
    { path: 'university-list', component: UniversityListComponent, canActivate: [AuthGuard] },
    { path: 'group', component: RegistrationGroupsComponent, canActivate: [AuthGuard] },
    { path: 'group-list', component: GroupsListComponent, canActivate: [AuthGuard] },
    { path: 'competitions', component: RegistrationCompetitionsComponent, canActivate: [AuthGuard] },
    { path: 'competitions-list', component: CompetitionsListComponent, canActivate: [AuthGuard] },
    { path: 'speakers', component: RegistrationSpeakersComponent, canActivate: [AuthGuard] },
    { path: 'speakers-list', component: SpeakersListComponent, canActivate: [AuthGuard] },
    { path: 'talks', component: RegistrationTalksComponent, canActivate: [AuthGuard] },
    { path: 'talks-list', component: TalksListComponent, canActivate: [AuthGuard] },
    { path: 'participantes', component: RegistrationParticipantsComponent, canActivate: [AuthGuard] },
    { path: 'talkspeaker-list', component: AsignSpeakersComponent, canActivate: [AuthGuard] },
    { path: 'registrar-concurso', component: RegistrationParticipantCompetitionComponent, canActivate: [AuthGuard] },
    { path: 'competition-list', component: CompetitionParticipantsListComponent, canActivate: [AuthGuard] },
    { path: 'group-competition-list', component: GroupsParticipantsComponent, canActivate: [AuthGuard] },
    { path: 'participants-list', component: ListParticipantsComponent, canActivate: [AuthGuard] },
    { path: 'Transacciones', component: TransactionsRegisterFormComponent, canActivate: [AuthGuard] },
    { path: 'Transacciones-history', component: TransactionsListComponent, canActivate: [AuthGuard] },
];
