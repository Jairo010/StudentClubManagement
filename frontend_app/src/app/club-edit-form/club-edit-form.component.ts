import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClubsService } from '../services/api_serivices/clubs.service';

export interface IClubData {
  id?: string;
  name: string;
  description: string;
  cardResponsible: string;
}

@Component({
  selector: 'app-club-edit-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './club-edit-form.component.html',
  styleUrls: ['./club-edit-form.component.css']
})
export class ClubEditFormComponent implements OnInit {
  formVisible = true;
  title: string = "";
  group!: FormGroup;

  constructor(
    private reference: MatDialogRef<ClubEditFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IClubData,
    private clubsService: ClubsService
  ) {
    this.title = data ? "EDITAR" : "NUEVO";
  }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.group = new FormGroup({
      id: new FormControl(this.data?.id),
      name: new FormControl(this.data?.name, Validators.required),
      description: new FormControl(this.data?.description, Validators.required),
      cardResponsible: new FormControl(this.data?.cardResponsible, Validators.required),
    });
  }

  save() {
    const record = this.group.value;
    this.reference.close(record);
  }

  closeForm() {
    this.reference.close();
  }
}
