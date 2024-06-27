import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  grid: ApexGrid;
};

@Component({
  selector: 'app-live-workers',
  templateUrl: './live-workers.component.html',
  styleUrls: ['./live-workers.component.css']
})
export class LiveWorkersComponent implements OnInit {
  public chartOptions!: ChartOptions;

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: "Green Zone",
          color: "#66C088",
          data: [50, 61, 55, 81, 69, 82, 99, 91, 148]
        },
        {
          name: "Amber Zone",
          color: "#DA7739",
          data: [41, 35, 51, 45, 41, 69, 91, 10, 0]
        },
        {
          name: "Red Zone",
          color: "#BC4C34",
          data: [10, 31, 25, 41, 49, 62, 69, 61, 48]
        },
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight",
        width: 1
      },
      title: {
        text: undefined,
        align: "left"
      },
      grid: {
        borderColor: 'rgba(255,255,255,0.2)',
        row: {
          colors: ["transparent"], // takes an array which will be repeated on columns
          opacity: 0
        }
      },
      xaxis: {
        categories: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep" ],
        labels: { 
          show: true, 
          hideOverlappingLabels: true,
          style: {
            colors: ['#B2BAC9']
          }
        }
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            colors: ['#B2BAC9']
          }
        }
      }
    };
  }
}
