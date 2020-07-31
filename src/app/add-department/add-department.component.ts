import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  constructor(private testService: TestService) { }

  public employeeName = '';

  ngOnInit(): void {

    this.testService.getEmployeeName().subscribe(response => {
      console.log('In department component', response);
      this.employeeName = response;
    });
  }

}
