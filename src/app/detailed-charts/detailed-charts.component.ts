import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexPlotOptions,
  ApexDataLabels,
  ApexFill,
  ApexTheme,
  ApexLegend,
  ApexGrid,
  ApexStroke,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
  theme: ApexTheme,
  legend: ApexLegend,
  grid: ApexGrid
};

export type CircleChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  legend: ApexLegend;
  stroke: ApexStroke;
};


@Component({
  selector: 'app-detailed-charts',
  templateUrl: './detailed-charts.component.html',
  styleUrls: ['./detailed-charts.component.css']
})

export class DetailedChartsComponent implements OnInit{

  public circleChartOptions!: CircleChartOptions;
  public columnChartOptions1!: ChartOptions;
  public columnChartOptions2!: ChartOptions;
  public columnChartOptions3!: ChartOptions;
  public columnChartOptions4!: ChartOptions;


  getColumnChartOptions(): ChartOptions {
    return {
      series: [
        {
          name: 'Series 1',
          data: [44],
        },
        {
          name: 'Series 2',
          data: [13]
        },
        {
          name: 'Series 3',
          data: [17]
        },
        {
          name: 'Series 4',
          data: [25]
        }
      ],
      theme: {
        mode: 'light', 
        palette: 'palette1', 
        monochrome: {
            enabled: false,
            color: '#000',
            shadeTo: 'light',
            shadeIntensity: 0.65
        },
      },
      grid: {
        show: false,
        borderColor: 'rgba(255,255,255,0)',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
          lines: {
            show: false
          }
        },   
        yaxis: {
          lines: {
            show: false
          }
        },  
        row: {
            colors: ['rgba(255,255,255,0)'],
            opacity: 0
        },  
        column: {
            colors: ['rgba(255,255,255,0)'],
            opacity: 0
        },
      },
      chart: {
        type: 'bar',
        height: 150,
        width: 100,
        stacked: true,
        toolbar: {
          show: false
        },
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        categories: ['Jan']
      },
      fill: {
        opacity: 1
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false,
          labels: {
            colors: ['#B2BAC9'],
            useSeriesColors: false
          },
      }
    };
  }

  ngOnInit(): void {
    this.circleChartOptions = {
      series: [44, 55, 41, 17, 15],
      chart: {
        type: 'donut',
        height: 350
      },
      legend: {
        show: false,
          labels: {
            colors: ['#B2BAC9'],
            useSeriesColors: false
          },
      },
      stroke: {
        show: true,
        curve: 'straight',
        lineCap: 'butt',
        colors: undefined,
        width: 0,
        dashArray: 0, 
      }
    };

    this.columnChartOptions1 = this.getColumnChartOptions();
    this.columnChartOptions2 = this.getColumnChartOptions();
    this.columnChartOptions3 = this.getColumnChartOptions();
    this.columnChartOptions4 = this.getColumnChartOptions();
  }
}
