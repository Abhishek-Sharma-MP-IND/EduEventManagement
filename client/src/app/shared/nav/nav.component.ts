import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
role:any;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
this.role =this.auth.getRole()
  }

  onLogout(){
    this.auth.logout();
    window.location.reload();
  }

}
