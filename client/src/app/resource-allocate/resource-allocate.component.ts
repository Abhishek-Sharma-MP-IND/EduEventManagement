import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-resource-allocate',
  templateUrl: './resource-allocate.component.html',
  styleUrls: ['./resource-allocate.component.scss']
})
export class ResourceAllocateComponent implements OnInit{
 
//todo: complete missing code..
      itemForm: FormGroup;
      formModel: any = {};
      showError: boolean = false;
      errorMessage: any;
      resourceList: any = [];
      assignModel: any = {};
      showMessage: boolean = false;
      responseMessage: any;
      eventList: any = [];
 
      constructor(private fb: FormBuilder, private httpService: HttpService) {
        this.itemForm = this.fb.group({
          eventId: ['', Validators.required],
          resourceId: ['', Validators.required],
          allocationDetails: ['', Validators.required]
        });
      }
 
      ngOnInit(): void {
        this.getEvent();
        this.getResources();
      }
 
      getEvent() {

        this.httpService.GetAllevents().subscribe(
          (data: any) => {
            this.eventList = data;
          },
          (error:any) => {
            this.showError = true;
            // this.errorMessage = error.message;
            this.errorMessage = 'Error fetching events';
          }
        );
      }
 
      getResources() {
        this.httpService.GetAllResources().subscribe(
          (data: any) => {
            this.resourceList = data;
          },
          (error:any) => {
            this.showError = true;
            // this.errorMessage = error.message;
            this.errorMessage = 'Error fetching Resources';
          }
        );
      }
 
      onSubmit() {
        if (this.itemForm.invalid) {
          this.showError = true;
          this.errorMessage = 'All fields are required';
          return;
        }
        this.httpService.allocateResources(
          this.itemForm.value.eventId,
          this.itemForm.value.resourceId,
          { details: this.itemForm.value.allocationDetails }
        ).subscribe(
          (response:any) => {
            this.showMessage = true;
            this.responseMessage = 'Resource allocated successfully!';
            this.itemForm.reset();
          },
          (error:any) => this.handleError(error)
        );

      }
 
      handleError(error: any) {
        this.showError = true;
        this.errorMessage = error.error?.message || 'Something went wrong';
      }
     
}