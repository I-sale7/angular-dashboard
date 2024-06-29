import { Component, OnInit } from '@angular/core';
import { ChartOptions, CircleChartOptions } from 'src/app/shared/types';

export type ColumnChart = {
  chart: ChartOptions;
  totalEvent: number;
  prevYear: number;
  prevYearPercentage: number;
  average: number;
  averagePercentage: number;
};

@Component({
  selector: 'app-detailed-charts',
  templateUrl: './detailed-charts.component.html',
  styleUrls: ['./detailed-charts.component.css'],
})
export class DetailedChartsComponent implements OnInit {
  public circleChartOptions!: CircleChartOptions;
  public columnChartOptions: ColumnChart[] = [];

  getColumnChartOptions({ values }: { values: number[] }): ChartOptions {
    return {
      series: values.map((value, index) => ({
        name: 'Series ' + index,
        data: [value],
      })),
      theme: {
        mode: 'dark',
        palette: 'palette',
        monochrome: {
          enabled: false,
          color: '#000',
          shadeTo: 'dark',
          shadeIntensity: 0.65,
        },
      },
      grid: {
        show: false,
        borderColor: 'rgba(255,255,255,0)',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        row: {
          colors: ['rgba(255,255,255,0)'],
          opacity: 0,
        },
        column: {
          colors: ['rgba(255,255,255,0)'],
          opacity: 0,
        },
      },
      chart: {
        type: 'bar',
        height: 150,
        width: 80,
        background: 'transparent',
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            position: 'top', // Show labels at the top of the bars
          },
        },
      },
      xaxis: {
        categories: [''],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      fill: {
        opacity: 1,
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: number) {
          return val.toString();
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#B2BAC9'],
        },
      },
      legend: {
        show: false,
        labels: {
          colors: ['#B2BAC9'],
          useSeriesColors: false,
        },
      },
    };
  }

  ngOnInit(): void {
    this.circleChartOptions = {
      series: [44, 55, 41, 17, 15],
      chart: {
        type: 'donut',
        height: 350,
      },
      theme: {
        mode: 'dark',
        palette: 'palette1',
        monochrome: {
          enabled: false,
          color: '#000',
          shadeTo: 'dark',
          shadeIntensity: 0.65,
        },
      },

      legend: {
        show: false,
        labels: {
          colors: ['#B2BAC9'],
          useSeriesColors: false,
        },
      },
      stroke: {
        show: true,
        curve: 'straight',
        lineCap: 'butt',
        colors: undefined,
        width: 0,
        dashArray: 0,
      },
    };

    this.columnChartOptions = Array.from({ length: 4 }, (_, i) => ({
      chart: this.getColumnChartOptions({ values: [i + 10, i + 20, i + 30] }),
      totalEvent: i + 10,
      prevYear: i + 20,
      prevYearPercentage: i + 30,
      average: i + 40,
      averagePercentage: i + 50,
    }));
  }
}
