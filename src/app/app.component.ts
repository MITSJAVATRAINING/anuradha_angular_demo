import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TestService } from './test.service';
import { Chart } from 'chart.js';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-chart';


  constructor(public testService: TestService) {
  }

  // data: any = [
  //   {
  //   eid: 'e101',
  //   ename: 'ravi',
  //   esal: 1000
  //   },
  //   {
  //   eid: 'e102',
  //   ename: 'ram',
  //   esal: 2000
  //   },
  //   {
  //   eid: 'e103',
  //   ename: 'rajesh',
  //   esal: 3000
  //   }
  // ];

  // EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  // EXCEL_EXTENSION = '.xlsx';

  // public exportAsExcelFile(json: any[], excelFileName: string): void {
  //   const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
  //   const workbook: XLSX.WorkBook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
  //   const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  //   this.saveAsExcelFile(excelBuffer, excelFileName);
  // }
  // private saveAsExcelFile(buffer: any, fileName: string): void {
  //    const data: Blob = new Blob([buffer], {type: this.EXCEL_TYPE});
  //    FileSaver.saveAs(data, fileName + '_export_' + new  Date().getTime() + this.EXCEL_EXTENSION);
  // }


  //   @ViewChild('myChart') barCanvas;

  //   barChar: Chart;



  //   // public chartType: string = 'doughnut';

  public num;

  public chartType = 'bar';

  @ViewChild(BaseChartDirective, { static: true }) chart: any;

  public chartDatasets: Array<any> = [
    { data: [65, 59], label: 'My First dataset' },
    { data: [11, 12], label: 'My Second dataset' },
  ];

  public chartLabels: Array<any> = ['Jan', 'Feb'];

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

  public chartOptions: any = {
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



  // ngAfterViewInit() {

  //   this.barChar = new Chart(this.barCanvas.nativeElement, {
  //      type: 'bar',
  //      data: {
  //        labels: this.chartLabels,
  //        datasets: this.chartDatasets
  //      },
  //      options: {
  //       animation: {
  //         duration: 10,
  //       },
  //       scales: {
  //         xAxes: [{
  //           stacked: true,
  //           gridLines: {
  //             display: false
  //           },
  //         }],
  //         yAxes: [{
  //           stacked: true
  //         }],
  //       }, // scales
  //       legend: {
  //         display: true
  //       },
  //       onClick: this.chartClicked.bind(this),
  //     }
  //   });
  // }


  // public chartHovered(e: any): void { }


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


  public chartClicked(e): void {
    console.log(e);

    console.log(this.chart.chart.tooltip._active[0]._model.datasetLabel);
    console.log(this.chart.chart.tooltip._active[0]._model.label);

  }

  ngOnInit(): void {

    //  this.exportAsExcelFile(this.data, 'sample');
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

    // const data: any = [];

    // const uniqueBHSType = ['Hold', 'Buy'];

    // data.forEach(d => {
    //   if (d.indexof(d.BHSType) === -1 ){
    //     uniqueBHSType.push(d.BHSType);
    //   }
    // });

    // uniqueBHSType.forEach(bhsType => {
    //   const generic = data.filter(d => d.BHSType = bhsType);
    // });
  }


}
