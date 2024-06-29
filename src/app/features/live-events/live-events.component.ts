import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChartOptions } from 'src/app/shared/types';

@Component({
  selector: 'app-live-events',
  templateUrl: './live-events.component.html',
  styleUrls: ['./live-events.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LiveEventsComponent implements OnInit {
  public chartOptions!: ChartOptions;
  public totalInfo!: number;
  public totalAlerts!: number;
  public totalAlarms!: number;
  public totalData!: number;
  public totalInfoPercentage!: string;
  public totalAlertsPercentage!: string;
  public totalAlarmsPercentage!: string;

  ngOnInit(): void {
    this.updateTotals();
    this.updatePercentages();
    this.chartOptions = {
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
      grid: {
        show: false,
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
      },
      series: [
        {
          name: 'Series 1',
          data: this.generateData(),
        },
      ],
      chart: {
        type: 'area',
        height: 200,
        width: '555',
        background: 'transparent',
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
        animations: {
          enabled: true,
          easing: 'linear',
          dynamicAnimation: {
            speed: 1000,
          },
        },
      },
      dataLabels: {
        enabled: false,
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
        categories: this.generateCategories(),
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
          text: undefined,
        },
      },
      tooltip: {
        theme: 'dark',
      },
      title: {
        text: undefined,
        align: 'left',
      },
    };

    setInterval(() => {
      this.updateChart();
    }, 2000);
  }

  private generateData() {
    return Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));
  }

  private generateCategories() {
    const baseDate = new Date('2022-01-01T00:00:00.000Z');
    return Array.from({ length: 7 }, (_, i) =>
      new Date(baseDate.getTime() + i * 24 * 60 * 60 * 1000).toISOString()
    );
  }

  private updateChart() {
    this.chartOptions.series = [
      {
        name: 'Series 1',
        data: this.generateData(),
      },
    ];
    this.chartOptions.xaxis.categories = this.generateCategories();
    this.updateTotals();
    this.updatePercentages();
  }

  private updateTotals() {
    const data = this.generateData();
    this.totalData = data.reduce((acc, val) => acc + val, 0);
    this.totalInfo = this.totalData;
    this.totalAlerts = data.filter((val) => val > 50).length;
    this.totalAlarms = data.filter((val) => val > 75).length;
  }

  private updatePercentages() {
    this.totalInfoPercentage =
      ((this.totalInfo / this.totalData) * 100).toFixed(2) + '%';
    this.totalAlertsPercentage =
      ((this.totalAlerts / this.totalData) * 100).toFixed(2) + '%';
    this.totalAlarmsPercentage =
      ((this.totalAlarms / this.totalData) * 100).toFixed(2) + '%';
  }
}
