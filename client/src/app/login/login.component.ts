import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  









 itemForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itemForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.itemForm.valid) {
      const { username, password } = this.itemForm.value;

      this.authService.login(username, password).subscribe(
        (response) => {
          // Assuming response contains a token
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']); // Redirect on successful login
        },
        (error) => {
          this.errorMessage = 'Invalid username or password';
        }
      );
    }
  }







  
}
