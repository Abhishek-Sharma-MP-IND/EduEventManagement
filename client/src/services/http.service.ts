import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
<<<<<<< HEAD

  public serverName=environment.apiUrl;

  //  constructor(private http: HttpClient) {}
  
  //   getBookingDetails(studentid: any): Observable<any> {
  //     return this.http.get(`${this.serverName}/api/student/registration-status/${studentid}`);
  //   }
  
  //   registerForEvent(eventId: any, details: any): Observable<any> {
  //     return this.http.post(`${this.serverName}/api/student/register/${eventId}`, details);
  //   }
  
  //   getAllEventAgenda(): Observable<any> {
  //     return this.http.get(`${this.serverName}/api/educator/agenda`);
  //   }
  
  //   GetAllevents(): Observable<any> {
  //     return this.http.get(`${this.serverName}/api/institution/events`);
  //   }
  
  //   GetAllResources(): Observable<any> {
  //     return this.http.get(`${this.serverName}/api/institution/resources`);
  //   }
  
  //   createEvent(details: any): Observable<any> {
  //     return this.http.post(`${this.serverName}/api/institution/event`, details);
  //   }
  
  //   updateEvent(details: any, eventId: any): Observable<any> {
  //     return this.http.put(`${this.serverName}/api/educator/update-material/${eventId}`, details);
  //   }
  
  //   addResource(details: any): Observable<any> {
  //     return this.http.post(`${this.serverName}/api/institution/resource`, details);
  //   }
  
  //   allocateResources(eventId: any, resourceId: any, details: any): Observable<any> {
  //     return this.http.post(`${this.serverName}/api/institution/event/allocate-resources?eventId=${eventId}&resourceId=${resourceId}`, details);
  //   }
  
  //   Login(details: any): Observable<any> {
  //     return this.http.post(`${this.serverName}/api/user/login`, details);
  //   }
  
  //   registerUser(details: any): Observable<any> {
  //     return this.http.post(`${this.serverName}/api/user/register`, details);
  //   }

  constructor(private http: HttpClient) {}
  
    private getHeaders(): HttpHeaders {
      const token = localStorage.getItem('token');
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
    }
  
    getBookingDetails(studentid: any): Observable<any> {
      return this.http.get(`${this.serverName}/api/student/registration-status/${studentid}`, { headers: this.getHeaders() });
    }
  
    registerForEvent(eventId: any, details: any): Observable<any> {
      return this.http.post(`${this.serverName}/api/student/register/${eventId}`, details, { headers: this.getHeaders() });
    }
  
    getAllEventAgenda(): Observable<any> {
      return this.http.get(`${this.serverName}/api/educator/agenda`, { headers: this.getHeaders() });
    }
    
  
    GetAllevents(): Observable<any> {
      return this.http.get(`${this.serverName}/api/institution/events`, { headers: this.getHeaders() });
    }
  
    GetAllResources(): Observable<any> {
      return this.http.get(`${this.serverName}/api/institution/resources`, { headers: this.getHeaders() });
    }
  
    createEvent(details: any): Observable<any> {
      return this.http.post(`${this.serverName}/api/institution/event`, details, { headers: this.getHeaders() });
    }
  
    updateEvent(details: any, eventId: any): Observable<any> {
      return this.http.put(`${this.serverName}/api/educator/update-material/${eventId}`, details, { headers: this.getHeaders() });
    }
  
    addResource(details: any): Observable<any> {
      return this.http.post(`${this.serverName}/api/institution/resource`, details, { headers: this.getHeaders() });
    }
  
    allocateResources(eventId: any, resourceId: any, details: any): Observable<any> {
      return this.http.post(`${this.serverName}/api/institution/event/allocate-resources?eventId=${eventId}&resourceId=${resourceId}`, details, { headers: this.getHeaders() });
    }
  
    Login(details: any): Observable<any> {
      return this.http.post(`${this.serverName}/api/user/login`, details, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
    }
  
    registerUser(details: any): Observable<any> {
      return this.http.post(`${this.serverName}/api/user/register`, details, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
    }
  
=======
  public serverName=environment.apiUrl;
//todo: Complete missing code..





 constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getBookingDetails(studentid: any): Observable<any> {
    return this.http.get(`${this.serverName}/api/student/registration-status/${studentid}`, { headers: this.getHeaders() });
  }

  registerForEvent(eventId: any, details: any): Observable<any> {
    return this.http.post(`${this.serverName}/api/student/register/${eventId}`, details, { headers: this.getHeaders() });
  }

  getAllEventAgenda(): Observable<any> {
    return this.http.get(`${this.serverName}/api/educator/agenda`, { headers: this.getHeaders() });
  }

  GetAllevents(): Observable<any> {
    return this.http.get(`${this.serverName}/api/institution/events`, { headers: this.getHeaders() });
  }

  GetAllResources(): Observable<any> {
    return this.http.get(`${this.serverName}/api/institution/resources`, { headers: this.getHeaders() });
  }

  createEvent(details: any): Observable<any> {
    return this.http.post(`${this.serverName}/api/institution/event`, details, { headers: this.getHeaders() });
  }

  updateEvent(details: any, eventId: any): Observable<any> {
    return this.http.put(`${this.serverName}/api/educator/update-material/${eventId}`, details, { headers: this.getHeaders() });
  }

  addResource(details: any): Observable<any> {
    return this.http.post(`${this.serverName}/api/institution/resource`, details, { headers: this.getHeaders() });
  }

  allocateResources(eventId: any, resourceId: any, details: any): Observable<any> {
    return this.http.post(`${this.serverName}/api/institution/event/allocate-resources?eventId=${eventId}&resourceId=${resourceId}`, details, { headers: this.getHeaders() });
  }

  Login(details: any): Observable<any> {
    return this.http.post(`${this.serverName}/api/user/login`, details, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  registerUser(details: any): Observable<any> {
    return this.http.post(`${this.serverName}/api/user/register`, details, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

>>>>>>> 841a5a2fcbdc8ce3fe4a97910d8e3c10de8423bc
  
}
