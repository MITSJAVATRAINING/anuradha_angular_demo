import { Injectable } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  public testS: Subject<any> = new Subject();
 
  public test(): Observable<any> {
   return  this.testS.asObservable();
  }
}
