import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { ChartConfiguration, ChartOptions } from 'chart.js';
// import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  ELEMENT_DATA: any = [
    {position: 1, product: 'Apple Iphone 8', price: 899.99, date: '2 minuts ago'},
    {position: 2, product: 'USB-C Cable', price: 8.99, date: '4 minuts ago'},
    {position: 3, product: 'Apple MacBook Pro', price: 1299.99, date: '10 minuts ago'},
    {position: 4, product: 'Samsung Galaxy S9', price: 5799.99, date: '12 minuts ago'},
    {position: 5, product: 'Lighting to USB C Adaptor', price: 16.99, date: '18 minuts ago'},
    {position: 6, product: 'Samsung Galaxy S8 256GB', price: 599.99, date: '19 minuts ago'},
    
  ];
  

  displayedColumns: string[] = ['position', 'product', 'price', 'date'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

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
        data: [ 65, 59, 80, 81, 56, 55, 40, 50, 60, 70, 55, 60, 75, 40, 30, 0, 35, 55],
        label: 'Series A',
        fill: false,
        tension: 0.5,
        borderColor: 'blue',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = false;
 
  

}
