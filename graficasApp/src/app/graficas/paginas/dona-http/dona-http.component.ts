import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../servicios/graficas.service';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
    this.graficasService.getUsuariosRRSS().subscribe( data => {
      console.log(data);
      const labels = Object.keys(data);
      const values = Object.values(data);
      console.log(labels);
      this.doughnutChartLabels = labels;
      this.doughnutChartData.push(values);
    });

    // this.graficasService.getUsuariosRRSSDonaData().subscribe(({labels, values}) => {
    //   this.doughnutChartLabels = labels;
    //   this.doughnutChartData.push(values);
    // });

  }

}
