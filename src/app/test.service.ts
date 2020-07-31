import { Injectable } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  public testS: Subject<any> = new Subject();

  public employeeName: Subject<any> = new Subject();
 
  public test(): Observable<any> {
   return  this.testS.asObservable();
  }

  public getEmployeeName(): Observable<any> {
    return this.employeeName.asObservable();
  }

  public setEmployeeName(employeeName: string): any {
    this.employeeName.next(employeeName);
  }
}
