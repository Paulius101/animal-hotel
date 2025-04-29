import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PricingOption {
  name: string;
  price: string;
  description: string[];
  serviceId: number;
}

@Injectable({
  providedIn: 'root',
})
export class PricingService {
  private apiUrl = 'http://localhost:8080/api/services'; // New backend API URL

  constructor(private http: HttpClient) {}

  // Fetch pricing options from the backend API
  getPricingOptions(): Observable<PricingOption[]> {
    return this.http.get<PricingOption[]>(this.apiUrl);
  }
}
