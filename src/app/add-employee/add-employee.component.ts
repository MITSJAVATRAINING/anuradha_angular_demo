import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private testService: TestService) { }

  @Input() employeeName;
  @Output() connect = new EventEmitter();

  employeeAddress = '';

  ngOnInit(): void {

    console.log('employee name is ' , this.employeeName);
    this.testService.setEmployeeName(this.employeeName);
    
    // const data = { event: 'init', msg: 'input received'};
    // this.connect.emit(data);
  }

  onChangeEmpAdd() {
    const data = { event: 'init', msg: this.employeeAddress};
    this.testService.setEmployeeName(this.employeeName);
    this.connect.emit(data);
  }

}
