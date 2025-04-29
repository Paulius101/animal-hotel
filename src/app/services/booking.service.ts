import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private apiUrl = 'http://localhost:8080/api/bookings'; // New backend API URL

  constructor(private http: HttpClient) { }

  // Fetch pricing options from the backend API
  postBooking(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  getBookings(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/1`);
  }

  editBooking(id: number, data: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, data);
  }

  deleteBooking(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  getBookingById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
