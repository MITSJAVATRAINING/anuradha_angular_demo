import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-aws-enablers',
  templateUrl: './aws-enablers.component.html',
  styleUrls: ['./aws-enablers.component.css']
})
export class AwsEnablersComponent implements OnInit {

  constructor(private testService: TestService) { }

  awsEnablers: any[];
  noOfColumns = 0;
  scores = [0,1,2,3,4,5,6,7,8,9];

  ngOnInit(): void {

    this.awsEnablers = this.testService.getAwsEnablers();

  }

  onSave() {
    console.log('this.onSave', this.awsEnablers);
  }

}
