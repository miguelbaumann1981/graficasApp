import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  public doughnutChartLabels: Label[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: MultiDataSet = [
    [ 350, 450, 100 ]
  ];
  
  public doughnutChartType: ChartType = 'doughnut';



  constructor() { }

  ngOnInit(): void {
  }

}
