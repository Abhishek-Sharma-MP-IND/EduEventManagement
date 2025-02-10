<<<<<<< HEAD

=======
>>>>>>> 841a5a2fcbdc8ce3fe4a97910d8e3c10de8423bc
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';
 
 
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
 
export class CreateEventComponent implements OnInit {
  itemForm!: FormGroup;
  formModel: any = {};
  showError: boolean = false;
  errorMessage: any = [];
  eventList: any = [];
  assignModel: any = {};
  showMessage: any = false;
  responseMessage: any = '';
 
 
  constructor(private fb: FormBuilder, private httpService: HttpService, private authService: AuthService) {
    this.itemForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      materials: ['', [Validators.required]]
    });
  }
 
  ngOnInit(): void {
    this.getEvent();
  }
 
  getEvent(): void {
    this.httpService.GetAllevents().subscribe(
      (data: any) => {
        this.eventList = data;
      },
      (error: any) => {
        this.showError = true;
        this.errorMessage = 'Error fetching events';
      }
    );
  }
 
  onSubmit(): void {
    if (this.itemForm.valid) {
      this.showMessage = true;
      this.responseMessage = 'Event created successfully!';
    } else {
      this.showError = true;
      this.errorMessage = 'Please fill in all required fields.';
    }
  }
<<<<<<< HEAD
}
=======
}
 
>>>>>>> 841a5a2fcbdc8ce3fe4a97910d8e3c10de8423bc
