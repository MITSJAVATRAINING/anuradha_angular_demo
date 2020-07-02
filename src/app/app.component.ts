import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TestService} from './test.service';
import {Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test-chart';

  constructor(public testService: TestService) {

  }

  @ViewChild('myChart') Chart: ElementRef;

  public chartType: string = 'doughnut';

  public num;



  public chartDatasets: Array<any> = [];

  public chartLabels: Array<any> = ['Jan', 'Feb', 'Mar'];

  // public chartColors: Array<any> = [
  //   {
  //     backgroundColor: 'rgba(220,220,220,0.2)',
  //     borderColor: 'rgba(220,220,220,1)',
  //     borderWidth: 2,
  //     pointBackgroundColor: 'rgba(220,220,220,1)',
  //     pointBorderColor: '#ff6666'
  //   },
  //   {
  //     backgroundColor: 'rgba(151,187,205,0.2)',
  //     borderColor: 'rgba(151,187,205,1)',
  //     borderWidth: 2,
  //     pointBackgroundColor: 'rgba(151,187,205,1)',
  //     pointBorderColor: '#fff'
  //   }
  // ];

  public chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };

  public chartClicked(e: any): void {
    console.log('chart clicked', e);

    // if (e.active[0]._model.label === 'Jan') {
    //   console.log( ' label is ' , e.active[0]._model.label);
    // }

    const index = e.active[0]._index;
    console.log(index);
    console.log(this.chartDatasets[0].data[index]);
    console.log(this.chartLabels[index]);

  }

  public chartHovered(e: any): void {
    console.log('chart hovered', e);
  }

  ngOnInit(): void {
    this.testService.test().subscribe(response => {
      console.log(response);
      this.num = response;
      this.chartDatasets =  [
        { data: [this.num, 646 , 67], label: 'My First dataset', backgroundColor: [
          '#ff3399',
          '#000000',
          '#99ff66'
          ],
          hoverBackgroundColor: [
            '#ff3399',
            '#000000',
            '#ffffff'
          ]
        }
      ];
    });

    this.testService.testS.next(1000);
  }


}
