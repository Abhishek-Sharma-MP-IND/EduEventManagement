// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { HttpService } from '../../services/http.service';
// import { AuthService } from '../../services/auth.service';

// @Component({
//   selector: 'app-add-resource',
//   templateUrl: './add-resource.component.html',
//   styleUrls: ['./add-resource.component.scss']
// })
// export class AddResourceComponent implements OnInit {

//   itemForm!: FormGroup;
//   formModel: any;
//   showError!: boolean;
//   errorMessage: any;
//   resourceList: any;
//   assignModel: any;
//   showMessage: any;
//   responseMessage: any;

//   constructor(){}
  
//   ngOnInit(): void {

//   }

//  onSubmit(){

//  }

//  getResources(){

//  }
  
// }

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { HttpService } from '../../services/http.service';
// import { AuthService } from '../../services/auth.service';

// @Component({
//   selector: 'app-add-resource',
//   templateUrl: './add-resource.component.html',
//   styleUrls: ['./add-resource.component.scss']
// })
// export class AddResourceComponent implements OnInit {

//   itemForm!: FormGroup;
//   formModel: any;
//   showError!: boolean;
//   errorMessage: any;
//   resourceList: any[] = [];
//   assignModel: any;
//   showMessage!: boolean;
//   responseMessage: any;

//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private httpService: HttpService,
//     private authService: AuthService
//   ) {
//     this.createForm();
//   }

//   ngOnInit(): void {
//     this.getResources();
//   }

//   createForm() {
//     this.itemForm = this.fb.group({
//       resourceName: ['', Validators.required],
//       resourceType: ['', Validators.required],
//       resourceDescription: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     if (this.itemForm.valid) {
//       this.formModel = this.itemForm.value;
//       this.httpService.addResource(this.formModel).subscribe(
//         response => {
//           this.responseMessage = 'Resource added successfully';
//           this.showMessage = true;
//           this.getResources();  // Refresh the resource list
//           this.itemForm.reset();
//         },
//         error => {
//           this.errorMessage = error;
//           this.showError = true;
//         }
//       );
//     } else {
//       this.showError = true;
//       this.errorMessage = 'Please fill out all fields correctly.';
//     }
//   }

//   getResources() {
//     this.httpService.GetAllResources().subscribe(
//       response => {
//         this.resourceList = response;
//       },
//       error => {
//         this.errorMessage = error;
//         this.showError = true;
//       }
//     );
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.scss']
})
export class AddResourceComponent implements OnInit {

  itemForm!: FormGroup;
  showError!: boolean;
  errorMessage: any;
  resourceList: any;
  assignModel: any;
  showMessage: any;
  responseMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itemForm = this.formBuilder.group({
      description: ['', [Validators.required]],
      resourceType: ['', [Validators.required]],
      availability: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.itemForm.valid) {
      this.httpService.addResource(this.itemForm.value).subscribe(
        (response) => {
          this.showMessage = true;
          this.responseMessage = 'Resource added successfully';
        },
        (error) => {
          this.showError = true;
          this.errorMessage = 'An error occurred while adding the resource';
        }
      );
    } else {
      this.showError = true;
      this.errorMessage = 'Please fill in all required fields';
    }
  }

  getResources(): void {
    this.httpService.GetAllResources().subscribe(
      (resources) => {
        this.resourceList = resources;
      },
      (error) => {
        this.showError = true;
        this.errorMessage = 'An error occurred while fetching the resources';
      }
    );
  }
}
