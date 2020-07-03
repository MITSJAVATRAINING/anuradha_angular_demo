import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TestService} from './test.service';
import {Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'test-chart';

  constructor(public testService: TestService) {

  }


  @ViewChild('myChart') barCanvas;

  barChar: Chart;



  // public chartType: string = 'doughnut';

  // public num;

  public chartType: string = 'bar';

public chartDatasets: Array<any> = [
  { data: [65, 59], label: 'My First dataset' },
  { data: [11, 12], label: 'My Second dataset' },
];

// public chartDatasets: Array<any> = [];

// public chartLabels: Array<any> = ['Jan', 'Feb', 'Mar'];


public chartLabels: Array<any> = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    },
    {
      backgroundColor: [
        'rgba(255, 125, 158, 0.2)',
        'rgba(3, 111, 184, 0.2)',
        'rgba(255, 255, 137, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(126, 243, 243, 0.2)',
        'rgba(255, 210, 115, 0.2)'
      ],
      borderColor: [
        'rgba(255, 125, 158, 1)',
        'rgba(3, 111, 184, 1)',
        'rgba(255, 255, 137, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(126, 243, 243, 1)',
        'rgba(255, 210, 115, 1)'
      ],
      borderWidth: 2,
    },
    ];

    public chartOptions: any =  {
      animation: {
        duration: 10,
      },
      scales: {
        xAxes: [{
          stacked: true,
          gridLines: {
            display: false
          },
        }],
        yAxes: [{
          stacked: true
        }],
      }
    };

    ngAfterViewInit() {

      this.barChar = new Chart(this.barCanvas.nativeElement, {
         type: 'bar',
         data: {
           labels: this.chartLabels,
           datasets: this.chartDatasets
         },
         options: {
          animation: {
            duration: 10,
          },
          scales: {
            xAxes: [{
              stacked: true,
              gridLines: {
                display: false
              },
            }],
            yAxes: [{
              stacked: true
            }],
          }, // scales
          legend: {
            display: true
          },
          onClick: this.chartClicked.bind(this),
        }
      });
    }

    public chartClicked(e: any, array): void {
     // console.log(e.event.layerY);
      // console.log(this.chartDatasets[e.active[0]._datasetIndex].data[e.active[0]._index]);

      let activeElement = this.barChar.getElementAtEvent(e)[0];
      console.log(activeElement);
      console.log(activeElement?._model.label + ' ' + activeElement?._model.datasetLabel);
      console.log();

    }
    public chartHovered(e: any): void { }





  // public chartOptions: any = {
  //   responsive: true,
  //   maintainAspectRatio: false
  // };

  // public chartClicked(e: any): void {
  //   console.log('chart clicked', e);

  //   // if (e.active[0]._model.label === 'Jan') {
  //   //   console.log( ' label is ' , e.active[0]._model.label);
  //   // }

  //   const index = e.active[0]._index;
  //   console.log(index);
  //   console.log(this.chartDatasets[0].data[index]);
  //   console.log(this.chartLabels[index]);

  // }

  // public chartHovered(e: any): void {
  //   console.log('chart hovered', e);
  // }

  ngOnInit(): void {
    // this.testService.test().subscribe(response => {
    //   console.log(response);
    //   this.num = response;
    //   this.chartDatasets =  [
    //     { data: [this.num, 646 , 67], label: 'My First dataset', backgroundColor: [
    //       '#ff3399',
    //       '#000000',
    //       '#99ff66'
    //       ],
    //       hoverBackgroundColor: [
    //         '#ff3399',
    //         '#000000',
    //         '#ffffff'
    //       ]
    //     }
    //   ];
    // });

    // this.testService.testS.next(1000);
  }


}
