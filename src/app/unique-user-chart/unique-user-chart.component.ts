import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-unique-user-chart',
  templateUrl: './unique-user-chart.component.html',
  styleUrls: ['./unique-user-chart.component.scss']
})
export class UniqueUserChartComponent {

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
        data: [ 15, 39, 50, 81, 36, 75, 70, 50, 60, 75, 55, 80, 65, 45, 20, 0, 65, 45, 30, 97, 100, 40, 10, 15],
        label: 'views',
        fill: true,
        tension: 0.5,
        borderColor: 'blue',
        backgroundColor: 'rgb(253, 208, 109)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

}
