import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  IsLoggin:any=false;
<<<<<<< HEAD
  roleName: string | null;
  constructor(private authService: AuthService, private router:Router)
  {
   
    this.IsLoggin=authService.getLoginStatus;
    this.roleName=authService.getRole;
    if(this.IsLoggin==false)
    {
      this.router.navigateByUrl('/login'); 
    
    }
  }
  logout()
{
  this.authService.logout();
  window.location.reload();
=======
  // roleName: string | null;
  constructor(private authService: AuthService, private router:Router)
  {
   
    // this.IsLoggin=authService.getLoginStatus;
    // this.roleName=authService.getRole;
    // if(this.IsLoggin==false)
    // {
    //   this.router.navigateByUrl('/login'); 
    
    // }
  }
  logout()
{
  // this.authService.logout();
  // window.location.reload();
>>>>>>> 841a5a2fcbdc8ce3fe4a97910d8e3c10de8423bc
}

}
