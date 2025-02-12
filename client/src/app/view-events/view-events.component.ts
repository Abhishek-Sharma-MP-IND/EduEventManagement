import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.scss']
})
export class ViewEventsComponent implements OnInit {
  itemForm!: FormGroup;
  events: any[] = [];
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private httpService: HttpService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      materials: ['', Validators.required]
    });
    this.fetchEvents();
  }

  // Method to handle form submission
  onSubmit(): void {
    if (this.itemForm.valid) {
      // Make an API call to save the event
      this.httpService.createEvent(this.itemForm.value).subscribe(
        response => {
          console.log('Event saved successfully', response);
          // Refresh the events list after successful save
          this.fetchEvents();
          // Clear the form
          this.itemForm.reset();
        },
        error => {
          console.error('Error saving event', error);
        }
      );
    }
  }

  // Method to fetch all events
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

  // Method to handle event update
  onUpdate(event: any): void {
    if (this.itemForm.valid) {
      this.httpService.updateEvent(this.itemForm.value, event.id).subscribe(
        response => {
          console.log('Event updated successfully', response);
          // Refresh the events list after successful update
          this.fetchEvents();
          // Clear the form
          this.itemForm.reset();
        },
        error => {
          console.error('Error updating event', error);
        }
      );
    }
  }
}