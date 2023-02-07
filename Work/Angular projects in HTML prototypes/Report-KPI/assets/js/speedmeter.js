$(function () {

    var gaugeOptions = {

        chart: {
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '120%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'red',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        exporting: { enabled: false },
        credits: {
            enabled: false
        },

        // tooltip: {
        //     enabled: false
        // },

        // the value axis
        yAxis: {
            stops: [
                [0.1, '#55BF3B'], // green
                [0.5, '#DDDF0D'], // yellow
                [0.9, '#DF5353'] // red
            ],
            // lineWidth: 0,
            // minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
            tickLength: 100,
            title: {
                y: 100
            },
            labels: {
                y: 11
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };

    // The speed gauge
    document.getElementById("container-speed").highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 11,
            title: {
                text: 'COMPANY OVER ALL PERFORMANCE',
                verticalAlign: 'bottom',
                y: 80,
                // floating: true,
                style: {
                    color: '#111',
                    fontWeight: '600',
                },
              
            }
        },

        credits: {
            enabled: false
        },

        series: [{
            name: 'Speed',
            data: [2],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                       '<span style="font-size:12px;color:silver"></span></div>'
            },
            tooltip: {
                valueSuffix: ''
            }
        }]

    }));

    // The RPM gauge
    document.getElementById("container-rpm").highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 10,
            title: {
                text: 'COMPANY OVER ALL PERFORMANCE',
                verticalAlign: 'bottom',
                y: 80,
                floating: true,
                style: {
                    color: '#111',
                    fontWeight: '600',
                },
              
            }
        },


        series: [{
            name: 'RPM',
            data: [1.15],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                       '<span style="font-size:12px;color:silver></span></div>'
            },
            tooltip: {
                valueSuffix: ' '
            }
        }]

    }));

    // Bring life to the dials
    setInterval(function () {
        // // Speed
        // var chart = document.getElementById("container-speed").highcharts(),
        //     point,
        //     newVal,
        //     inc;

        // if (chart) {
        //     point = chart.series[0].points[0];
        //     inc = Math.round((Math.random() - 0.5) * 100);
        //     newVal = point.y + inc;

        //     if (newVal < 0 || newVal > 11) {
        //         newVal = point.y - inc;
        //     }

        //     point.update(newVal);
        // }

        // RPM
        chart = document.getElementById("container-rpm").highcharts();
        if (chart) {
            point = chart.series[0].points[0];
            inc = Math.random() - 0.5;
            newVal = point.y + inc;

            if (newVal < 0 || newVal > 11) {
                newVal = point.y - inc;
            }

            point.update(newVal);
        }
    }, 2000);


});