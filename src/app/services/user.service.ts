import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users';  // Backend API URL for user services
  private fakeUser = {
    username: 'Paulius',
    ownerName: 'Paulius',
    phoneNumber: '0861957119',
    email: 'test.tester@gmail.com',
    passwordHash: 'xHebkrws',
  };

  constructor(private http: HttpClient) {}
  
  postUser(): Observable<any> {
    return this.http.post<any>(this.apiUrl, this.fakeUser);
  }
}
