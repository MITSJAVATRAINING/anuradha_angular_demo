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

  public getMatCardData() {
    let json  = [{"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Strategic Outlook","cpbltyL2Nme":"Strategy Management"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Strategic Outlook","cpbltyL2Nme":"Environmental, Social & Governance Investing"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Strategic Outlook","cpbltyL2Nme":"Marketing & Brand Management"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Strategic Outlook","cpbltyL2Nme":"Communications Management"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Strategic Outlook","cpbltyL2Nme":"Regulations & Directives Integration"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Strategic Outlook","cpbltyL2Nme":"Product Management"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Strategic Outlook","cpbltyL2Nme":"Project Portfolio Management"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Strategic Outlook","cpbltyL2Nme":"Project Portfolio Management 2"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Strategic Outlook","cpbltyL2Nme":"Project Portfolio Management 3"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Strategic Outlook","cpbltyL2Nme":"Project Portfolio Management 4"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Relationships","cpbltyL2Nme":"Customer Management"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Relationships","cpbltyL2Nme":"Partner Management"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Relationships","cpbltyL2Nme":"Regulator Engagement"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Relationships","cpbltyL2Nme":"Human Capital Management"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Culture","cpbltyL2Nme":"Customer Centric Experiences"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Culture","cpbltyL2Nme":"Innovation Incubation"},
    {"cpbltyL0Nme":"Customers & Markets","cpbltyL1Nme":"Culture","cpbltyL2Nme":"Continuous Improvement"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Loans & Properties","cpbltyL2Nme":"Deal Underwriting"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Loans & Properties","cpbltyL2Nme":"Loan Origination Support"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Loans & Properties","cpbltyL2Nme":"Loan Quality Management"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Loans & Properties","cpbltyL2Nme":"Loan Activity Processing"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Loans & Properties","cpbltyL2Nme":"Custodial Services"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Loans & Properties","cpbltyL2Nme":"Loss Mitigation Management"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Loans & Properties","cpbltyL2Nme":"Occupancy Management"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Loans & Properties","cpbltyL2Nme":"Equity Investment Management"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Securities & Other Instruments","cpbltyL2Nme":"Formation"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Securities & Other Instruments","cpbltyL2Nme":"Issuance"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Securities & Other Instruments","cpbltyL2Nme":"Bond Administration"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Securities & Other Instruments","cpbltyL2Nme":"Disclosure Management"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Securities & Other Instruments","cpbltyL2Nme":"5"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Shared","cpbltyL2Nme":"Delivery Settlement"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Shared","cpbltyL2Nme":"Pipeline Management"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Shared","cpbltyL2Nme":"Pricing"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Shared","cpbltyL2Nme":"Trading/Execution"},
    {"cpbltyL0Nme":"Journeys & Core","cpbltyL1Nme":"Shared","cpbltyL2Nme":"Trading/Execution 5sdsd"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Financial","cpbltyL2Nme":"Cash Management"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Financial","cpbltyL2Nme":"Capital Management"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Financial","cpbltyL2Nme":"Tax Management"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Financial","cpbltyL2Nme":"BalanceSheet Management"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Financial","cpbltyL2Nme":"Finance Management & Reporting"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Financial","cpbltyL2Nme":"Payables & Receivables"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Financial","cpbltyL2Nme":"Payables & 6 Receivables"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Risk","cpbltyL2Nme":"Audit Management"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Risk","cpbltyL2Nme":"Governance & Complaince"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Risk","cpbltyL2Nme":"Incident Management"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Risk","cpbltyL2Nme":"Insurance Management"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Risk","cpbltyL2Nme":"Risk Management"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Corporate Services","cpbltyL2Nme":"Program Management"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Corporate Services","cpbltyL2Nme":"Facilities Management"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Corporate Services","cpbltyL2Nme":"Technology Management"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Corporate Services","cpbltyL2Nme":"Procurement Services"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Corporate Services","cpbltyL2Nme":"Legal Services"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Corporate Services","cpbltyL2Nme":"Investigations Management"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Corporate Services","cpbltyL2Nme":"Data & Information Management"},
    {"cpbltyL0Nme":"Enabling & Supporting","cpbltyL1Nme":"Corporate Services","cpbltyL2Nme":"Agreement/Contract Management"}]   ;
    return json;

    };
  
}
