import { Component, inject } from '@angular/core';
import { CoreModule } from '@angular/flex-layout';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClubsService } from '../services/api_serivices/clubs.service';

@Component({
  selector: 'app-registration-clubs',
  standalone: true,
  imports: [CoreModule,FormsModule, 
    ReactiveFormsModule,],
  templateUrl: './registration-clubs.component.html',
  styleUrl: './registration-clubs.component.css'
})
export class RegistrationClubsComponent {
  member = inject(ClubsService);

  register = new FormGroup({
    name: new FormControl<any>('', [Validators.required, Validators.email]),
    description: new FormControl<any>('', ),
    card: new FormControl<any>('', [Validators.required,]),
  });


  onSubmit(){
    
  }
}
