import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { OrderListModule } from 'primeng/orderlist';
import { BookingService } from '../services/booking.service';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-uzsakymai',
  imports: [CommonModule, OrderListModule, ButtonModule, DialogModule, ButtonModule, InputTextModule, DatePickerModule, ReactiveFormsModule, FormsModule],
  templateUrl: './uzsakymai.component.html',
  styleUrls: ['./uzsakymai.component.scss']
})
export class UzsakymaiComponent implements OnInit {
  bookingService = inject(BookingService);
  bookings: any[] = [];
  visible: boolean = false;
  detailsVisible: boolean = false; // For View Details dialog
  rangeDates: Date[] | undefined;
  bookingBeingEdited: any = null;
  booking: any = {};

  ngOnInit(): void {
    this.getBookings();
  }

  deleteBooking(booking: any): void {
    this.bookingService.deleteBooking(booking.bookingId).subscribe(
      (response) => {
        this.bookings = this.bookings.filter(b => b.bookingId !== booking.bookingId);
        alert('Sėkmingai ištrinta!');
      },
      (error) => {
        alert('Klaida trinant užsakymą!');
      }
    );
  }

  viewDetails(booking: any): void {
    this.booking = { ...booking };
    this.detailsVisible = true;
    console.log('Booking details:', this.booking);
  }

  openEditBookingModal(bookingBeingEdited: any): void {
    this.visible = true;
    this.resetBookingModel();
    this.bookingBeingEdited = bookingBeingEdited;
    console.log('Booking being edited:', bookingBeingEdited);
  }

  editBooking(): void {
    const bookingDTO: any = {};

    if (this.booking.petName) {
      bookingDTO.petName = this.booking.petName;
    }

    if (this.booking.dates && this.booking.dates[0]) {
      bookingDTO.startDate = this.booking.dates[0];
    }

    if (this.booking.dates && this.booking.dates[1]) {
      bookingDTO.endDate = this.booking.dates[1];
    }

    if (this.booking.notes) {
      bookingDTO.notes = this.booking.notes;
    }

    bookingDTO.serviceId = this.bookingBeingEdited.serviceId;
    bookingDTO.userId = 1;

    this.bookingService.editBooking(this.bookingBeingEdited.bookingId, bookingDTO).subscribe(
      (response) => {
        alert('Sėkmingai atnaujinti duomenys!');
        this.visible = false;
        this.resetBookingModel();
        this.getBookings();
      },
      (error) => {
        alert('Klaida atnaujinant duomenis!');
      }
    );
  }

  showDialog(serviceId: number) {
    this.visible = true;
    this.booking.serviceId = serviceId;
  }

  resetBookingModel() {
    this.booking = {};
  }

  private getBookings(): void {
    this.bookingService.getBookings().subscribe(
      (data) => {
        this.bookings = data;
      },
      (error) => {
        console.error('Error fetching bookings:', error);
      }
    );
  }

  // Close the view details dialog
  closeDetailsDialog(): void {
    this.detailsVisible = false;
  }
}
