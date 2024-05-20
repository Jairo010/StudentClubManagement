import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IMembers } from '../../interfaces/members.interface';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  title=""
  group!:FormGroup

  constructor(
    private reference:MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IMembers){
      this.title = data ? "EDITAR" : "NUEVO"
    }

  ngOnInit(): void {
    this.loadForm()
  }

  loadForm(){
    this.group = new FormGroup({
      email: new FormControl<any>('', [Validators.required, Validators.email]),
      password: new FormControl<any>('', [Validators.required]),
      card: new FormControl<any>('', [Validators.required]),
      name: new FormControl<any>('', [Validators.required]),
      lastName: new FormControl<any>('', [Validators.required]),
      semester: new FormControl<any>('', [Validators.required]),
      major: new FormControl<any>('1', [Validators.required]),  
      rol: new FormControl<any>('1', [Validators.required]),  
    });
  }

  save(){
    const record = this.group.value
    this.reference.close(record)
  }

}
