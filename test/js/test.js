function generateRand(size){
  var arr = [];
  for(var i=0; i<size; i++){
    arr[i] = Math.round(Math.random()*100);
  }
  return arr;
}

$('#chart-area').highcharts({
  chart: { type: 'area' },
  series:[
    { data: generateRand(10) }
  ]
});

$('#chart-line').highcharts({
  chart: { type: 'line' },
  series:[
    { data: generateRand(10) },
    { data: generateRand(10) },
    { data: generateRand(10) }
  ]
});

$('#chart-pie').highcharts({
  chart: { type: 'pie' },
  series:[
    {data: [
      ['IE', 10], ['Firefox', 20], ['Opera', 30], ['Chrome', 40], ['Safari', 50]
    ]}
  ]
});

$('#chart-column').highcharts({
  chart: { type: 'column' },
  series:[
    { data: generateRand(10) },
    { data: generateRand(10) },
    { data: generateRand(10) }
  ]
});