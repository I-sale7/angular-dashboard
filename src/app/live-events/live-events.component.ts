import { Component, OnInit } from "@angular/core";

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexStroke,
  ApexFill,
  ApexGrid
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  fill: ApexFill;
  grid: ApexGrid;
};


@Component({
  selector: 'app-live-events',
  templateUrl: './live-events.component.html',
  styleUrls: ['./live-events.component.css']
})
export class LiveEventsComponent implements OnInit{

  public chartOptions!: ChartOptions;

  ngOnInit(): void {
    this.chartOptions = {
      grid: {
        show: false,
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
      },
      series: [
        {
          name: 'Series 1',
          data: [31, 40, 28, 51, 42, 109, 100]
        }
      ],
      chart: {
        type: 'area',
        height: 200,
        width: '100%',
        toolbar: {
          show: false,
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        colors: ['#E76465', '#F26666'],
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
        crosshairs: {
          show: false,
        },
        type: 'datetime',
        categories: [
          '2022-01-01T00:00:00.000Z',
          '2022-01-02T00:00:00.000Z',
          '2022-01-03T00:00:00.000Z',
          '2022-01-04T00:00:00.000Z',
          '2022-01-05T00:00:00.000Z',
          '2022-01-06T00:00:00.000Z',
          '2022-01-07T00:00:00.000Z'
        ]
      },
      fill: {
        opacity: 1,
        colors: ['#F26666'],
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
        crosshairs: {
          show: false,
        },
        title: {
          text: undefined
        }
      },
      title: {
        text: undefined,
        align: 'left'
      }
    };
  }

}
