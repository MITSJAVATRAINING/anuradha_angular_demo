import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-modal',
  templateUrl: './emp-modal.component.html',
  styleUrls: ['./emp-modal.component.css']
})
export class EmpModalComponent implements OnInit {

  employeeId = 0;

  constructor(public dialogRef: MatDialogRef<EmpModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.employeeId = data.employeeId;
  }

  ngOnInit(): void {

  }

  onClose() {
    this.dialogRef.close('Cancel');
  }
}
