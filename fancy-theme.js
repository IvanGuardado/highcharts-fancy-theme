(function(Highcharts){
'use strict';

Highcharts.setOptions({
  exporting: null,
  title: { text: null },
  colors: [
    '#D70060',
    '#00A1CB',
    '#61AE24',
    '#F18D05',
    '#D0D102',
    '#E54028',
    '#01A4A4'
  ],
  yAxis: {
      visible: false,
      gridLineColor:'#f1f1f1',
      title: { text: null },
  },
  tooltip: {
      shared: true,
      valueSuffix: ' units'
  },
  credits: { enabled: false },
  legend:{
      borderWidth: 0,
      verticalAlign: 'top',
      align: 'right',
      floating: true,
      style: {left: 0}
  },
  series: {
    allowPointSelect: true
  },
  plotOptions: {
      series: {
          lineWidth: 4,
          fillOpacity: 0.2,
          marker: {
            radius: 0,
            symbol: 'circle',
            states: { 
              hover: { radius: 5 }
            }
          }
      }
  }
});
}(Highcharts));