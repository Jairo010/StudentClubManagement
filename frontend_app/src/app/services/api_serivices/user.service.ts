import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ILogin, ISignUp } from '../../interfaces/userAuth.interface';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient);

  signUpUserMember(user:ISignUp): Observable<ISignUp>{
    return this.http.post<ISignUp>(environment.URL_API+"auth/createUser",user)
  }

  logInUserMember(user: ILogin): Observable<any> {
    return this.http.post<any>(environment.URL_API + 'auth/login', user).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400) {
          // El servidor devuelve un error de autenticación
          return throwError('Credenciales incorrectas');
        } else {
          // Otro tipo de error (por ejemplo, error de conexión con la base de datos)
          return throwError('Error de conexión con la base de datos');
        }
      })
    );
  }
}
