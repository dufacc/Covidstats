am4core.ready(function() {
// Create chart instance
var chart = am4core.create("pieChart", am4charts.PieChart);

// Let's cut a hole in our Pie chart the size of 40% the radius
chart.innerRadius = am4core.percent(40);

chart.legend = new am4charts.Legend();
chart.legend.position = "right";
chart.legend.scrollable = true;
//chart.legend.width = 120;
//"sequencedAnimation": true
//"balloon": {}, adjust border color

console.log(covid_total_current)

// Add data
chart.data = [{
  "country": "Lithuania",
  "confirmed": 501.9,
  "bottles": 1500
}, {
  "country": "Czech Republic",
  "litres": 301.9,
  "bottles": 990
}, {
  "country": "Ireland",
  "litres": 201.1,
  "bottles": 785
}, {
  "country": "Germany",
  "litres": 165.8,
  "bottles": 255
}, {
  "country": "Australia",
  "litres": 139.9,
  "bottles": 452
}, {
  "country": "Austria",
  "litres": 128.3,
  "bottles": 332
}, {
  "country": "UK",
  "litres": 99,
  "bottles": 150
}, {
  "country": "Belgium",
  "litres": 60,
  "bottles": 178
}, {
  "country": "The Netherlands",
  "litres": 50,
  "bottles": 50
}];

  chart.data = [{
    "category": "Active",
    "Lithuania": 0,
    "color": colors.active.hex
  },{
    "category": "Recovered",
    "Lithuania": 0,
    "color": colors.recovered.hex
  },{
    "category": "Confirmed",
    "Lithuania": 0,
    "color": colors.confirmed.hex
  },{
    "category": "Death",
    "Lithuania": 0,
    "color": colors.deaths.hex
  },{
    "category": "Active",
    "World" : covid_total_current.confirmed - covid_total_current.recovered - covid_total_current.deaths,
    "color": colors.active.hex
  },{
    "category": "Recovered",
    "World" : covid_total_current.recovered,
    "color": colors.recovered.hex
  },{
    "category": "Confirmed",
    "World" : covid_total_current.confirmed,
    "color": colors.confirmed.hex
  },{
    "category": "Death",
    "World" : covid_total_current.deaths,
    "color": colors.deaths.hex
  }];
 xxxs=colors;

 window.selectedCountry=function(data, id){
    console.log(data)

    pieSeries._dataItems._values[0].value = data.active;
    pieSeries._dataItems._values[1].value = data.recovered;
    pieSeries._dataItems._values[2].value = data.confirmed;
    pieSeries._dataItems._values[3].value = data.deaths;
    pieSeries.dataFields.value = data.name;
    pieSeries.setVisibility(true);
 }

console.log(colors.active.hex)

// Add and configure Series
pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "Lithuania";
pieSeries.dataFields.category = "category";
pieSeries.slices.template.stroke = "#3b3b3b";
//new am4core.InterfaceColorSet().getFor("background-color");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;
pieSeries.slices.template.fillOpacity = 0.55;
pieSeries.slices.template.propertyFields.fill = "color";
pieSeries.slices.template.propertyFields.fill = "color";
pieSeries.slices.template.tooltipPosition = "pointer";
pieSeries.slices.template.properties.scale = 1;
pieSeries.tooltip.background.fill = am4core.color("#000000");
pieSeries.tooltip.background.fillOpacity = 0.2;
//pieSeries.tooltip.getStrokeFromObject = true;
//pieSeries.tooltip.background.stroke = activeColor;
pieSeries.tooltip.background.stroke = "color";
pieSeries.tooltip.fontSize = "0.9em";

// When hovered, slices become non-opaque  
var hs = pieSeries.slices.template.states.getKey("hover");
hs.properties.scale = 1;
hs.properties.fillOpacity = 1;

// Disabling labels and ticks on inner circle
pieSeries.labels.template.disabled = true;
pieSeries.ticks.template.disabled = true;

// Disable sliding out of slices
pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
pieSeries.slices.template.states.getKey("hover").properties.scale = 0.95;

pieSeries.radius = am4core.percent(40);
pieSeries.innerRadius = am4core.percent(15);


// Add second series
pieSeries2 = chart.series.push(new am4charts.PieSeries());
pieSeries2.dataFields.value = "World";
pieSeries2.dataFields.category = "category";
pieSeries2.slices.template.stroke = "#3b3b3b";
pieSeries2.slices.template.strokeWidth = 2;
pieSeries2.slices.template.strokeOpacity = 1;
pieSeries2.slices.template.fillOpacity = 0.55;
pieSeries2.slices.template.propertyFields.fill = "color";
pieSeries2.slices.template.states.getKey("hover").properties.shiftRadius = 0;
pieSeries2.slices.template.states.getKey("hover").properties.scale = 1.05;
pieSeries2.slices.template.tooltipPosition = "pointer";
pieSeries2.tooltip.background.fill = am4core.color("#000000");
pieSeries2.tooltip.background.fillOpacity = 0.2;
pieSeries2.tooltip.background.stroke = activeColor;
pieSeries2.tooltip.fontSize = "0.9em";

pieSeries2.labels.template.disabled = true;
pieSeries2.ticks.template.disabled = true;

// When hovered, slices become non-opaque  
var hs2 = pieSeries2.slices.template.states.getKey("hover");
//hs.properties.scale = 1;
hs2.properties.fillOpacity = 0.8;

//pieSeries2.alignLabels = false;
//pieSeries2.labels.template.bent = true;

//labelPie = pieSeries2.createChild(am4core.Label);
//labelPie.text = "${values.value.sum}";
//labelPie.horizontalCenter = "middle";
//labelPie.verticalCenter = "middle";
//labelPie.fontSize = 40;
//labelPie.color = "#fff";

}); // end am4core.ready()

$(document).ready(function(){
    pieSeries.setVisibility(false);
});