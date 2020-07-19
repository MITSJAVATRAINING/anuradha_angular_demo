import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor() { }

  @Input() employeeName;
  @Output() connect = new EventEmitter();

  employeeAddress = '';

  ngOnInit(): void {

    console.log('employee name is ' , this.employeeName);
 
    // const data = { event: 'init', msg: 'input received'};
    // this.connect.emit(data);
  }

  onChangeEmpAdd() {
    const data = { event: 'init', msg: this.employeeAddress};
    this.connect.emit(data);
  }

}
