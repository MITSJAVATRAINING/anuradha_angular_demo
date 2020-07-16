import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private _fb: FormBuilder, private router: Router) { }


  private _employeeFormGroup: FormGroup;

  title = "add employee";

  ngOnInit() {
    this._employeeFormGroup = this._fb.group({
      firstName: ['', [Validators.required, this.nameValidator()]],
      lastName: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  nameValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {

      if (control.value && control.value[0] !== 'S') {
        return { 'nameStart': true};
      } else {
        return null;
      }
    };

  }
}
