import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../logicdiraba/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellsService {
  private apiUrl = 'http://localhost:9000/api/users';

  constructor(private http: HttpClient) { }

  getSales(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
