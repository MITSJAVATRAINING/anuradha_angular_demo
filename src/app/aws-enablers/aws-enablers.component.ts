import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { AWSEnabler } from '../generic.interface';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EmpModalComponent } from '../emp-modal/emp-modal.component';

@Component({
  selector: 'app-aws-enablers',
  templateUrl: './aws-enablers.component.html',
  styleUrls: ['./aws-enablers.component.css'],
})
export class AwsEnablersComponent implements OnInit {
  constructor(private testService: TestService, private dialog: MatDialog) {}

  awsEnablers: any[];
  mappedAssets: any[];
  allAssets: any[];
  filteredAssets: any[];
  portFolioCount: any[];
  noOfColumns = 0;
  scores = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  dataAWSTable: any[] = [];

  filter(enablerName, portfolioName) {
    let assets = this.mappedAssets.filter(
      (ma) => ma.portfolioName == portfolioName && ma.enablerName == enablerName
    );
    if (assets.length > 0) {
      let filteredAssets = [];
      assets.forEach((a) => {
        let fAsset = this.allAssets.filter(
          (as) => (as.assetName = a.assetName)
        );
        if (fAsset) {
          filteredAssets.push(fAsset);
        }
      });
      this.filteredAssets = filteredAssets;
    }
  }


  openPopUp() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = '60%';
    dialogConfig.position = {
      top: '30px',
    };
    dialogConfig.data = {
      employeeId: 101
    };
    const dialogRef = this.dialog.open(EmpModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('here');
    });
  }

  ngOnInit(): void {

    this.loadA();
    // refreshdata(row.EnablerName, row.CF);
    // refreshdata(row.EnablerName, row.SF);
    // refreshdata(row.EnablerName, row.CM);
    // refreshdata(row.EnablerName, row.MF);

    console.log('this.dataAwsTable', this.dataAWSTable);
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
    this.awsEnablers.forEach((aws) => {
      if (aws.IsChecked && aws.score == undefined) {
        //pop up logic.
      }
    });

    // success part;

    //this.awsEnablers = new awsEnablers;
  }

  loadA() {
    this.awsEnablers = this.testService.getAwsEnablers();
    this.portFolioCount = this.testService.getPortfolioEnablers();

    this.awsEnablers.forEach((aws) => {
      let data = {
        EnablerName: aws.awsEnabler,
        CF: '',
        MF: '',
        CM: '',
        SF: '',
      } as any;
      this.portFolioCount.forEach((port) => {
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
  }
}
