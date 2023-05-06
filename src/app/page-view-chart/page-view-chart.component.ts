import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-page-view-chart',
  templateUrl: './page-view-chart.component.html',
  styleUrls: ['./page-view-chart.component.scss']
})
export class PageViewChartComponent {

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40, 50, 60, 70, 55, 60, 75, 40, 30, 0, 35, 55, 40, 87, 90, 30, 10, 15],
        label: 'views',
        fill: true,
        tension: 0.5,
        borderColor: 'blue',
        backgroundColor: 'rgb(149, 135, 252)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

}
