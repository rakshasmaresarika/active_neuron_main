import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataset, ChartOptions, Color } from 'chart.js';
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

    public lineChartData: ChartDataset[] = [
        { data: [], label: "series 1"},
        { data: [], label: "series 1"},
    ]
    public lineChartLabels: any [] =[
        "jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sept", "aug", "nov", "dec"
    ]
    public lineChartOptions: ChartOptions<'line'> = {
        responsive: true
      };
    public lineChartLegend = true;
    public lineChartColors: Color[] = ["red", "blue"]
    // public lineChartType = "line"

}
