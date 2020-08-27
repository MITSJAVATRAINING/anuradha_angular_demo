import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { AWSEnabler } from '../generic.interface';

@Component({
  selector: 'app-aws-enablers',
  templateUrl: './aws-enablers.component.html',
  styleUrls: ['./aws-enablers.component.css'],
})
export class AwsEnablersComponent implements OnInit {
  constructor(private testService: TestService) {}

  awsEnablers: any[];
  mappedAssets: any[];
  portFolioCount: any[];
  noOfColumns = 0;
  scores = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  dataAWSTable: any[] = [];


  ngOnInit(): void {
    this.awsEnablers = this.testService.getAwsEnablers();
    this.portFolioCount = this.testService.getPortfolioEnablers();

    this.awsEnablers.forEach(aws => {
      let data = {EnablerName: aws.awsEnabler, CF: '', MF: '', CM: '', SF: ''} as any;
      this.portFolioCount.forEach(port => {
        if (aws.awsEnabler == port.awsEnabler) {
          if (port.eaportfolio == 'CF') {
            data.CF = port.count;
          } else if (port.eaportfolio == 'MF') {
            data.MF = port.count;
          } else if (port.eaportfolio == 'CM') {
            data.CM = port.count;
          } else if (port.eaportfolio == 'SF') {
            data.SF = port.count;
          }
        }
      });
      this.dataAWSTable.push(data);
    });

    // refreshdata(row.EnablerName, row.CF);
    // refreshdata(row.EnablerName, row.SF);
    // refreshdata(row.EnablerName, row.CM);
    // refreshdata(row.EnablerName, row.MF);

    console.log('this.dataAwsTable' , this.dataAWSTable);
    this.mappedAssets = this.testService.getMappedAssetsForAws();

    this.awsEnablers.forEach((aws) => {
      aws.score = 0;
      this.mappedAssets.forEach((mappedAsset) => {
        if (aws.awsEnabler == mappedAsset.awsEnabler) {
          aws.IsChecked = true;
          aws.score = mappedAsset.score;
        }
      });
    });



  }

  onSave() {
    console.log('this.onSave', this.awsEnablers);
    this.awsEnablers.forEach(aws => {
      if (aws.IsChecked && aws.score == undefined) {
        //pop up logic.
      }
    })
  }
}
