import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-mat-card-example',
  templateUrl: './mat-card-example.component.html',
  styleUrls: ['./mat-card-example.component.css'],
})
export class MatCardExampleComponent implements OnInit {
  constructor(private testService: TestService) {}
  capbilityl1Name = [];
  capbilityl1l2Name: Map<any, any[]> = new Map<any, any[]>();
  capbilityl2l3Name: Map<any, any[]> = new Map<any, any[]>();
  defintions: Map<any, any> = new Map<any, any>();
  data = [];
  l1Name: any = 'All';
  l2Name: any = 'All';
  l3Name: any = '';
  capbilityl2Name = [];
  ngOnInit(): void {
    let data = this.testService.getMatCardData();
    //console.log(data);

    this.data = data;
    
    //  console.log('capbilityl1Name', this.capbilityl1Name);

    
   this.populateData(this.data);

   this.populateDefintions();
  }

  populateDefintions() {
    let def = this.testService.getMatCardDef();

    def.forEach((data) => {
      // console.log(data);
      this.capbilityl1Name.forEach((tranche) => {
        if (tranche == data.tranche) {
          this.defintions.set(tranche, data.tranchedef);
        }
      });

      Array.from(this.capbilityl1l2Name.keys()).forEach((segment) => {
        if ((segment = data.segment)) {
          this.defintions.set(segment, data.segmentdef);
        }
      });

      Array.from(this.capbilityl2l3Name.keys()).forEach((capability) => {
        if ((capability = data.capability)) {
          this.defintions.set(capability, data.capabilitydef);
        }
      });
    });
  }

  getKeys(map) {
    return Array.from(map.keys());
  }

  getl1l2Keys(l1name) {
    // if (this.l2Name == undefined) {
    //   return this.capbilityl1l2Name.get(l1name);
    // } else {
    //   return this.capbilityl1l2Name
    //     .get(l1name)
    //     .filter((itm) => itm == this.l2Name);
    // }

    return this.capbilityl1l2Name.get(l1name);
  }

  onl1NameChange() {
    this.l2Name = 'All';
    if (this.l1Name == 'All') {
      this.capbilityl2Name = Array.from(this.capbilityl2l3Name.keys());
    } else {
      this.capbilityl2Name = this.capbilityl1l2Name.get(this.l1Name);
    }
  }

  getClassMiddleCard(l1Name, l2Name) {

    console.log('Inside getClassMiddle Card', this.l2Name);

    let className = 'col-md-3';
    const length = this.capbilityl2l3Name.get(l2Name).length;
    

    if (l1Name == 'Enabling & Supporting') {
      if (length > 6) {
        className = 'col-md-4 increasedwidth';
      }
    } else {
      if (length > 6) {
        className = 'col-md-6';
      }
    }
    if (this.l2Name != 'All' && this.l2Name != l2Name) {
      className = className + ' disable-mat-card';
    }
      
    return className;
    
  }

  getClassInnerCard(l1Name, l2Name, l3Name) {
    let className = 'col-md-6';
    if (this.capbilityl2l3Name.get(l2Name).length == 1) {
      className = 'col-md-12';
    }
    if (this.capbilityl2l3Name.get(l2Name).length == 2) {
      className = 'col-md-6';
    }
    
    let l3Values = this.capbilityl2l3Name.get(l2Name);
    const length = l3Values.length;
    if (l1Name == 'Enabling & Supporting') {
      if (length <= 6 && l3Name == l3Values[length - 1] && length % 2 != 0) {
        className = 'margin-left-25 col-md-6';
      }
      if (length > 6) {
        if (
          l3Name == l3Values[length - 2] &&
          length % 2 == 0 &&
          length % 3 != 0
        ) {
          className = 'col-md-4 margin-left-20';
        } else if (
          l3Name == l3Values[length - 1] &&
          length % 2 != 0 &&
          length % 3 != 0
        ) {
          className = 'col-md-4 margin-left-33';
        } else {
          className = 'col-md-4';
        }
      }
    } else {
      if (l3Name == l3Values[length - 1] && length % 2 != 0) {
        className = 'margin-left-25 col-md-6';
      } else if (length > 6) {
        if (l3Name == l3Values[length - 2] && length % 4 != 0) {
          className = 'col-md-3 margin-left-25';
        } else {
          className = 'col-md-3';
        }
      }
    }
    if (l3Name.includes(this.l3Name) || this.l3Name == '') {
      return className
    }
    return className + ' disable-mat-card';
  }

  populateData(data) {
    data.forEach((d) => {
      if (this.capbilityl1Name.indexOf(d.cpbltyL0Nme) <= -1) {
        this.capbilityl1Name.push(d.cpbltyL0Nme);
      }
    });
    this.capbilityl1Name.forEach((l1Name) => {
      let l2Names = [];
      data.forEach((d) => {
        if (l2Names.indexOf(d.cpbltyL1Nme) <= -1 && d.cpbltyL0Nme == l1Name) {
          l2Names.push(d.cpbltyL1Nme);
        }
      });
      this.capbilityl1l2Name.set(l1Name, l2Names);
    });
    this.capbilityl1Name.forEach((l1Name) => {
      this.capbilityl1l2Name.get(l1Name).forEach((l2Name) => {
        let l3Names = [];
        data.forEach((d) => {
          if (l3Names.indexOf(d.cpbltyL2Nme) <= -1 && d.cpbltyL1Nme == l2Name) {
              l3Names.push(d.cpbltyL2Nme);
          }
        });
        this.capbilityl2l3Name.set(l2Name, l3Names);
        this.capbilityl2Name = Array.from(this.capbilityl2l3Name.keys());
      });
    });
    
  }
}
