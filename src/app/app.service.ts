import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './models/api-models/users.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseApiUrl = "http://localhost:4000/api";

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(this.baseApiUrl + '/users');
  }

}
