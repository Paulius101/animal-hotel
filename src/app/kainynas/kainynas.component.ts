import { Component, inject, OnInit } from '@angular/core';
import { PricingOption, PricingService } from '../services/pricing.service';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingService } from '../services/booking.service';


@Component({
  selector: 'app-kainynas',
  imports: [CommonModule, DialogModule, ButtonModule, InputTextModule, DatePickerModule, ReactiveFormsModule, FormsModule],
  templateUrl: './kainynas.component.html',
  styleUrls: ['./kainynas.component.scss']
})
export class KainynasComponent implements OnInit {
  pricingOptions: PricingOption[] = [];
  bookingService = inject(BookingService);
  visible: boolean = false;
  rangeDates: Date[] | undefined;
  booking = {
    petName: '',
    dates: [],
    notes: '',
    serviceId: null as number | null,
    userId: null
  };

  constructor(private pricingService: PricingService) { }

  ngOnInit(): void {
    this.pricingService.getPricingOptions().subscribe(
      (data) => {
        this.pricingOptions = data;
      },
      (error) => {
        console.error('Error fetching pricing data:', error);
      }
    );
  }

  showDialog(serviceId: number) {
    this.visible = true;
    this.booking.serviceId = serviceId;
  }

  submitBooking() {
    if (this.booking.dates.length !== 2) {
      alert('Pasirinite datą');
      return;
    }

    const bookingDTO = {
      petName: this.booking.petName,
      startDate: this.booking.dates[0],
      endDate: this.booking.dates[1],
      notes: this.booking.notes,
      serviceId: this.booking.serviceId,
      userId: 1
    };

    this.bookingService.postBooking(bookingDTO).subscribe(
      (response) => {
        console.log('Booking successful:', response);
        alert('Sėkmingai rezervuota!');
        this.visible = false;
        this.resetBookingModel();
      })

  }

  resetBookingModel() {
    this.booking = {
      petName: '',
      dates: [],
      notes: '',
      serviceId: null,
      userId: null
    };
  }
}
