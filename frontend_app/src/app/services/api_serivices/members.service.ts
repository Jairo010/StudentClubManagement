import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ISignUp } from '../../interfaces/userAuth.interface';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { IMembers } from '../../members-list/members-list.component';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http: HttpClient) { }


  getMembers(): Observable<any>{
    return this.http.get<any>(environment.URL_API+"members")
  }

  getMemberById(id:number): Observable<any>{
    return this.http.get<any>(environment.URL_API+`members/${id}`)
  }

  updateMember(id:string,member:IMembers): Observable<IMembers>{
    return this.http.put<IMembers>(environment.URL_API+`members/${id}`,member)
  }

  deleteMember(id:string): Observable<any>{
    return this.http.delete<any>(environment.URL_API+`members/${id}`)
  }
}
