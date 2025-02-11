// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dashbaord',
//   templateUrl: './dashbaord.component.html',
//   styleUrls: ['./dashbaord.component.scss']
// })
// export class DashbaordComponent {

// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpService } from '../../services/http.service';


@Component({
    selector: 'app-dashbaord',
    templateUrl: './dashbaord.component.html',
    styleUrls: ['./dashbaord.component.scss']
})
export class DashboardComponent implements OnInit {
  itemForm!: FormGroup;
  events: any[] = [];
  isUser: boolean = false;
  isAdmin: boolean = false;
  showMessage: boolean = false;
  responseMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private httpService: HttpService,
    private authService: AuthService
  ) {
    this.itemForm = this.fb.group({
      eventId: ['', [Validators.required]],
      studentId: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.checkUserRole();
    this.fetchEvents();
  }

  checkUserRole(): void {
    // Placeholder for checking user role, replace with actual logic
    const role = this.authService.getRole; // Assumed method to get user role
    if (role === 'user') {
      this.isUser = true;
    } else if (role === 'admin') {
      this.isAdmin = true;
    }
  }

  onSubmit(): void {
    if (this.itemForm.valid) {
      this.httpService.createEvent(this.itemForm.value).subscribe(
        response => {
          this.showMessage = true;
          this.responseMessage = 'Event created successfully!';
          this.fetchEvents();
          this.itemForm.reset();
        },
        error => {
          console.error('Error saving event', error);
          this.showMessage = true;
          this.responseMessage = 'Error saving event';
        }
      );
    } else {
      this.showMessage = true;
      this.responseMessage = 'Please fill in all required fields.';
    }
  }

  fetchEvents(): void {
    this.httpService.GetAllevents().subscribe(
      response => {
        this.events = response;
      },
      error => {
        console.error('Error fetching events', error);
      }
    );
  }

  onUpdate(event: any): void {
    if (this.itemForm.valid) {
      this.httpService.updateEvent(this.itemForm.value, event.id).subscribe(
        (response) => {
          this.showMessage = true;
          this.responseMessage = 'Event updated successfully!';
          this.fetchEvents();
          this.itemForm.reset();
        },
        (error) => {
          console.error('Error updating event', error);
          this.showMessage = true;
          this.responseMessage = 'Error updating event';
        }
      );
    }
  }
}

