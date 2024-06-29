import {
  ApexNonAxisChartSeries,
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
  ApexYAxis,
  ApexTitleSubtitle,
  ApexTooltip,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  plotOptions?: ApexPlotOptions;
  dataLabels?: ApexDataLabels;
  fill: ApexFill;
  theme: ApexTheme;
  legend?: ApexLegend;
  grid: ApexGrid;
  stroke?: ApexStroke;
  title?: ApexTitleSubtitle;
  tooltip?: ApexTooltip;
};

export type CircleChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  legend: ApexLegend;
  stroke: ApexStroke;
  theme: ApexTheme;
};
