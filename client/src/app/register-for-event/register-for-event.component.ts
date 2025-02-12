import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';
 
@Component({
  selector: 'app-register-for-event',
  templateUrl: './register-for-event.component.html',
  styleUrls: ['./register-for-event.component.scss']
})
export class RegisterForEventComponent implements OnInit {
  formModel:any={};
  showError:boolean=false;
  errorMessage:any;
  eventObj:any={};
  assignModel: any={};
  showMessage: any;
  responseMessage: any;
  isUpdate: any;
 
  registeredEvents: any[] =[];
  studentId: string = '';
 
  constructor(public router:Router, private formBuilder: FormBuilder, private authService:AuthService, private httpService: HttpService)
  {
     
  }
  ngOnInit(): void {
    this.formModel = { eventId: '', studentId: ''};
  }
 
  Submit(): void {
    if (this.formModel.invalid) {
      this.showError = true;
      this.errorMessage = 'Event ID and Student ID are required.';
      return;
    }
 
    this.showError = false;
    const formData = this.formModel.value;
 
    this.httpService.registerForEvent(formData.eventId, { studentId: formData.studentId }).subscribe(
      (response) => {
        this.responseMessage = 'Registered Successfully';
        this.formModel.reset();
      },
      (error) => {
        this.showError = true;
        this.errorMessage = 'Registration failed. Please try again.';
      }
    );
  }
}