var healthResults = [];
d3.csv("static/data.csv").then((incomingData) => {
  console.log('Got csv ' + JSON.stringify(incomingData));
  healthResults = incomingData
  scatter();
});

function scatter() {
  // Healthcare vs. Poverty
  var data = [];

  healthResults.forEach(function(result) {
    console.log(result.abbr + ', poverty ' + result.poverty + ', healthcare ' + result.healthcare)

    var trace = {
      x: [result.poverty],
      y: [result.healthcare],
      mode: 'markers+text',
      type: 'scatter',
      name: result.state,
      text: [result.abbr],
      textposition: 'bottom center',
      marker: {
        size: 12
      }
    };

    data.push(trace);
  });

  var layout = {
    title: 'Healthcare vs. Poverty',
    xaxis: {
      range: [ 8.0, 23.0 ],
      title: {
        text: 'In Poverty (%) '
      }
    },
    yaxis: {
      range: [ 0, 26.0 ],
      title: {
        text: 'Lacks Healthcare (%)'
      }
    }
  };

  Plotly.newPlot('scatter', data, layout);
}