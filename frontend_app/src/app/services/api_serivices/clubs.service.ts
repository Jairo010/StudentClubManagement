import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IClub } from '../../interfaces/clubs.interface';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClubsService {

  http = inject(HttpClient);

  createClub(club:IClub): Observable<IClub>{
    return this.http.post<IClub>(environment.URL_API+"clubs",club)
  }

  getClubs(): Observable<any>{
    return this.http.get<any>(environment.URL_API+"clubs")
  }

  getClubById(id:number): Observable<any>{
    return this.http.get<any>(environment.URL_API+`clubs/${id}`)
  }

  updateClub(club:IClub): Observable<IClub>{
    return this.http.put<IClub>(environment.URL_API+`clubs`,club)
  }

  deleteClub(id:number): Observable<any>{
    return this.http.delete<any>(environment.URL_API+`clubs/${id}`)
  }
}
