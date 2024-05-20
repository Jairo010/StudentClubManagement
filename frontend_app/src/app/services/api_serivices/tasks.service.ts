import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ITasks } from '../../interfaces/tasks.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  http = inject(HttpClient);

  createTasks(task: ITasks): Observable<ITasks>{
    return this.http.post<ITasks>(environment.URL_API+"tasks",task)
  }

  getTasks(): Observable<any>{
    return this.http.get<any>(environment.URL_API+"tasks")
  }

  getTaskById(id:number): Observable<any>{
    return this.http.get<any>(environment.URL_API+`tasks/${id}`)
  }

  updateTask(task:ITasks): Observable<ITasks>{
    return this.http.put<ITasks>(environment.URL_API+`tasks`,task)
  }

  deleteTask(id:string): Observable<any>{
    return this.http.delete<any>(environment.URL_API+`tasks/${id}`)
  }
}
