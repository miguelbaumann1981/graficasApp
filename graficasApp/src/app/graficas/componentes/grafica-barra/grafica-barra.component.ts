import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  @Input() barChartLabels: Label[] = [];
  @Input() barChartData: ChartDataSets[] = [];
  @Input() horizontal: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartType = 'horizontalBar';
    }
  }

}
