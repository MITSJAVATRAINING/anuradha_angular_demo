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
  data = [];
  ngOnInit(): void {
    let data = this.testService.getMatCardData();
    console.log(data);

    this.data = data;
    this.data.forEach((d) => {
      if (this.capbilityl1Name.indexOf(d.cpbltyL0Nme) <= -1) {
        this.capbilityl1Name.push(d.cpbltyL0Nme);
      }
    });
    console.log('capbilityl1Name', this.capbilityl1Name);

    this.capbilityl1Name.forEach((l1Name) => {
      let l2Names = [];
      this.data.forEach((d) =>{
        if (l2Names.indexOf(d.cpbltyL1Nme) <= -1 && d.cpbltyL0Nme == l1Name) {
          l2Names.push(d.cpbltyL1Nme);
        }
      });
      this.capbilityl1l2Name.set(l1Name, l2Names);
    });

    console.log('capbilityl1l2Name', this.capbilityl1l2Name);

    this.capbilityl1Name.forEach((l1Name) => {
      
      this.capbilityl1l2Name.get(l1Name).forEach(l2Name => {
        let l3Names = [];
        this.data.forEach((d) =>{
          if (l3Names.indexOf(d.cpbltyL2Nme) <= -1 && d.cpbltyL1Nme == l2Name) {
            l3Names.push(d.cpbltyL2Nme);
          }
        });
        this.capbilityl2l3Name.set(l2Name, l3Names);
      });
    });
    console.log('capbilityl2l3Name', this.capbilityl2l3Name);
    
  }

  getKeys(map) {
    return Array.from(map.keys());
  }
}
