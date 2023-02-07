// Load google charts
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

var data;
var chart;

function drawChart() {

  data = google.visualization.arrayToDataTable([
    ['Element', '', { role: 'style' }],
    ['Within SLA', 20, '#86D94B'],            // RGB value
    ['SLA Met', 70, '#0047BB'],            // English color name
    ['SLA Breached', 30, '#F77573'],
  ]);

  // Optional; add a title and set the width and height of the chart
  var options = {
    'width': 360, 'height': 270, 'backgroundColor': {
      fill: 'transparent',
      fillOpacity: 0.8
    },
    'bar': { groupWidth: "45%" },
    legend: { position: 'none' },
    fontSize: 10
  };

  // Display the chart inside the <div> element with id="piechart"
  chart = new google.visualization.ColumnChart(document.getElementById('barchart'));
  chart.draw(data, options);
}

//list-dropdown
$(".detail-list-head").click(function () {
  $(this).parent().find(".drop_list").toggle();
});

//fading graph-entries
$(".entry-active").click(function () {
  event.stopPropagation();
  if (!$(".sales").hasClass("active")) {
    $(".sales").addClass("active");
    $(this).addClass("active");
    var data = $(this).find("p:first").html();
    $(".table-data").html(data);
    $(".entry-active").not($(this)).fadeTo(200, 0.33);
    $(".graph-connect").fadeTo(200, 0.33);
  }
});

$(document).click(function () {
  $(".sales").removeClass("active");
  $(".entry-active").removeClass("active");
  $(".entry-active").fadeTo(200, 1);
  $(".graph-connect").fadeTo(200, 1);
});

$(function () {
  $("#datepicker-to").datepicker({
    showOn: "button",
    buttonImage: "assets/images/calendar.png",
    buttonImageOnly: true,
    buttonText: "Select date",
    backgroundColor: "black",
  });
  $("#datepicker-from").datepicker({
    showOn: "button",
    buttonImage: "assets/images/calendar.png",
    buttonImageOnly: true,
    buttonText: "Select date",
    backgroundColor: "black"
    // altField: "#datepicker-from",
    // altFormat: "DD, d MM, yy"
  });
});

// $(function () {
//   var dateFormat = "mm/dd/yy",
//     from = $("#from")
//       .datepicker({
//         defaultDate: "+1w",
//         changeMonth: true,
//         numberOfMonths: 3
//       })
//       .on("change", function () {
//         to.datepicker("option", "minDate", getDate(this));
//       }),
//     to = $("#to").datepicker({
//       defaultDate: "+1w",
//       changeMonth: true,
//       numberOfMonths: 3
//     })
//       .on("change", function () {
//         from.datepicker("option", "maxDate", getDate(this));
//       });

//   function getDate(element) {
//     var date;
//     try {
//       date = $.datepicker.parseDate(dateFormat, element.value);
//     } catch (error) {
//       date = null;
//     }

//     return date;
//   }
// });

function slider(x, y) {
  if (y.matches) { // If media query matches
    // Optional; add a title and set the width and height of the chart

    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(draw);
  }
  if (x.matches) { // If media query matches
    // Optional; add a title and set the width and height of the chart

    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(draw2);
  }
}

function draw() {
  data = google.visualization.arrayToDataTable([
    ['Element', '', { role: 'style' }],
    ['Within SLA', 20, '#86D94B'],            // RGB value
    ['SLA Met', 70, '#0047BB'],            // English color name
    ['SLA Breached', 30, '#F77573'],
  ]);

  var options = {
    'width': 310, 'height': 270, 'backgroundColor': {
      fill: 'transparent',
      fillOpacity: 0.8,
      legend: 'none'
    },
    'bar': { groupWidth: "45%" },
    legend: { position: 'none' },
    fontSize: 10

  };

  // Display the chart inside the <div> element with id="piechart"
  chart = new google.visualization.ColumnChart(document.getElementById('barchart'));
  chart.draw(data, options);
}

function draw2() {
  data = google.visualization.arrayToDataTable([
    ['Element', '', { role: 'style' }],
    ['Within SLA', 20, '#86D94B'],            // RGB value
    ['SLA Met', 70, '#0047BB'],            // English color name
    ['SLA Breached', 30, '#F77573'],
  ]);

  var options = {
    'width': 270, 'height': 270, 'backgroundColor': {
      fill: 'transparent',
      fillOpacity: 0.8,
      legend: 'none'
    },
    'bar': { groupWidth: "45%" },
    legend: { position: 'none' },
    fontSize: 10

  };

  // Display the chart inside the <div> element with id="piechart"
  chart = new google.visualization.ColumnChart(document.getElementById('barchart'));
  chart.draw(data, options);
}

var y = window.matchMedia("(max-width: 1500px)")
var x = window.matchMedia("(max-width: 1200px)")
slider(x, y) // Call listener function at run time
y.addListener(slider) // Attach listener function on state changes


$(".s-no").click(function () {
  $("#all").removeClass("active");
  $("#all").removeClass("show");
  $("#view").addClass("active");
  $("#view").addClass("show");
  $("#all-tab").removeClass("active");
  $("#all-tab").removeClass("show");
  $("#view-tab").addClass("active");
  $("#view-tab").addClass("show");
  // $(document).scrollTop();
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});