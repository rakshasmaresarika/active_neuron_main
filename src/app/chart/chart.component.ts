import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartOptions, Color } from 'chart.js';
import { Chart, registerables } from 'chart.js';
// import {  } from "ng2-charts";
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit{
//   constructor(){ Chart.register(...registerables);}
  ngOnInit(){}
//   canvas: any;
//     ctx: any;
    
    // @ViewChild('mychart') mychart: any;

    // ngAfterViewInit() {
    //     this.canvas = this.mychart.nativeElement;
    //     this.ctx = this.canvas.getContext('2d');

    //     new Chart(this.ctx, {
    //         type: 'line',
    //         data: {
    //             datasets: [{
    //                 label: 'users',
    //                 data: [0, 20, 10, 30, 26, 35, 90, 15, 96, 12, 65 ],
    //                 backgroundColor: "rgb(115 185 243 / 65%)",
    //                 borderColor: "#007ee7",
    //                 fill: true,
                   
    //             },
    //             {
    //                 label: 'seasons',
    //                 data: [30, 10, 50, 70, 60, 55, 67, 90, 46, 85, 78],
    //                 backgroundColor: "#47a0e8",
    //                 borderColor: "#007ee7",
    //                 fill: true,
                   
    //             }],
    //             labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019','May 2019','Jun 2019','Jully 2019','August 2019','Septemper 2019','Octomber 2019','November 2019','December 2019']
    //         },
    //     });
    // }

    public lineChartData: ChartConfiguration<'line'>['data'] = {
      labels: [
        '25 Apr',
        '26 Apr',
        '27 Apr',
        '28 Apr',
        '29 Apr',
        '30 Apr',
        '01 may',
        '02 may',
        '03 may',
        '04 may',
        '05 may',
      ],
      datasets: [
        {
          data: [ 0, 55, 270, 111, 56, 55, 446, 108, 160, 275, 45, 30, 65, 80, 50, 10, 305, 155, 0],
          label: 'Users',
          fill: true,
          tension: 0.5,
          borderColor: 'blue',
          backgroundColor: 'rgb(149, 135, 252)'
        },
        {
          data: [ 0, 155, 470, 111, 56, 95, 246, 408, 160, 275, 45, 50, 165, 280, 50, 10, 200, 145, 90],
          label: 'Seasons',
          fill: true,
          tension: 0.5,
          borderColor: '#fdb20e',
          backgroundColor: 'rgb(253, 208, 109)'
        }
      ],
      
    };
    public lineChartOptions: ChartOptions<'line'> = {
      responsive: false
    };
    public lineChartLegend = false;

}
