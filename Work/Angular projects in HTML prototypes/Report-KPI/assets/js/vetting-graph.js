Highcharts.chart('vetting-graph1', {
    title: {
        text: ''
    },

    yAxis: {
        title: {
            text: ''
        },
        labels: {
            enabled: false
        }

    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2017'
        },
            labels: {
                enabled: false
            },
            visible: false,
    
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },

    series: [{
        name: 'FLEET 1',
        data: [43, 52, 57, 69, 97, 11, 13, 15],
        dashStyle: 'shortdot',
        color: '#0056D6'
    }, {
        name: 'FLEET 2',
        data: [24, 24, 29, 58, 32, 30, 12, 40],
        dashStyle: 'shortdot',
        color: '#E4608D'
    }, {
        name: 'FLEET 3',
        data: [12, 59, 22, 11, 32, 11, 18, 31],
        dashStyle: 'shortdot',
        color: '#00B5A3'
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

// 
Highcharts.chart('vetting-graph2', {
    title: {
        text: ''
    },

    yAxis: {
        title: {
            text: ''
        },
        labels: {
            enabled: false
        }

    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2017'
        },
            labels: {
                enabled: false
            },
            visible: false,
    
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },

    series: [{
        name: 'FLEET 1',
        data: [43, 52, 57, 69, 97, 11, 13, 15],
        dashStyle: 'shortdot'
    }, {
        name: 'FLEET 2',
        data: [24, 24, 29, 58, 32, 30, 12, 40],
        dashStyle: 'shortdot'
    }, {
        name: 'FLEET 3',
        data: [12, 59, 22, 11, 32, 11, 18, 31],
        dashStyle: 'shortdot'
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

// 
// 
Highcharts.chart('curve-graph', {
    chart: {
        type: 'spline',
    },
    title: {
        text: 'Safety Area',
        align: 'left',
        x: 0,
        style: {
            color: '#000',
            fontSize: '15px',
            fontWeight: 'bold'
        }
    },

    yAxis: {
        title: {
            text: ''
        },
        labels: {
            enabled: false
        }

    },

    xAxis: {
        // accessibility: {
        //     rangeDescription: 'Range: Mar to Sep'
        // },
        categories: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            // labels: {
            //     enabled: false
            // },
            // visible: false,
    
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            // pointStart: 'Month'
        }
    },

    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },

    series: [{
        name: 'A',
        color: '#e63946',
        data: [7.0, 6.9, 9.5, 10.5, 12.2, 8.5, 5.2,7.0, 6.9, 9.5]
    }, {
        name: 'B',
        color: '#0056D6',
        data: [ 4.2, 5.7, 8.5, 11.9, 12.2, 7.0, 6.6, 4.2, 5.7, 8.5],
        visible: false
    }, {
        name: 'C',
        color: '#E4608D',
        data: [8.5, 11.9, 15.2, 10.0, 6.6, 9.5, 5.2, 8.5, 11.9, 15.2],
        visible: false
    }, {
        name: 'D',
        color: '#00B5A3',
        data: [2.0, 7.6, 12.5, 9.2, 10.2, 7.0, 10.6, 2.0, 7.6, 12.5],
        visible: false
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

Highcharts.chart('curve-graph1', {
    chart: {
        type: 'spline',
    },
    title: {
        text: 'Safety Area',
        align: 'left',
        x: 0,
        style: {
            color: '#000',
            fontSize: '15px',
            fontWeight: 'bold'
        }
    },

    yAxis: {
        title: {
            text: ''
        },
        labels: {
            enabled: false
        }

    },

    xAxis: {
        // accessibility: {
        //     rangeDescription: 'Range: Mar to Sep'
        // },
        categories: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            // labels: {
            //     enabled: false
            // },
            // visible: false,
    
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            // pointStart: 'Month'
        }
    },

    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },

    series: [{
        name: 'A',
        color: '#e63946',
        data: [7.0, 6.9, 9.5, 10.5, 12.2, 8.5, 5.2,7.0, 6.9, 9.5]
    }, {
        name: 'B',
        color: '#0056D6',
        data: [ 4.2, 5.7, 8.5, 11.9, 12.2, 7.0, 6.6, 4.2, 5.7, 8.5],
        visible: false
    }, {
        name: 'C',
        color: '#E4608D',
        data: [8.5, 11.9, 15.2, 10.0, 6.6, 9.5, 5.2, 8.5, 11.9, 15.2],
        visible: false
    }, {
        name: 'D',
        color: '#00B5A3',
        data: [2.0, 7.6, 12.5, 9.2, 10.2, 7.0, 10.6, 2.0, 7.6, 12.5],
        visible: false
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

// stack column
Highcharts.chart('stackColumn', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Environmental Area',
        align: 'left',
        x: 0,
        style: {
            color: '#000',
            fontSize: '15px',
            fontWeight: 'bold'
        }
    },
    xAxis: {
        categories: ['A', 'B', 'C', 'D']
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        },
        labels: {
            enabled: false,
        },
        stackLabels: {
            enabled: false,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: 0,
        verticalAlign: 'top',
        y: 5,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false
            }
        }
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },

    series: [{
        name: '2020',
        color: '#e63946',
        data: [5, 3, 4, 7]
    }, {
        name: '2019',
        color: '#357cd2',
        data: [2, 2, 3, 2]
    }]
});

Highcharts.chart('stackColumn1', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Environmental Area',
        align: 'left',
        x: 0,
        style: {
            color: '#000',
            fontSize: '15px',
            fontWeight: 'bold'
        }
    },
    xAxis: {
        categories: ['A', 'B', 'C', 'D']
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        },
        labels: {
            enabled: false,
        },
        stackLabels: {
            enabled: false,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: 0,
        verticalAlign: 'top',
        y: 5,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false
            }
        }
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },

    series: [{
        name: '2020',
        color: '#357cd2',
        data: [7, 1, 3, 8]
    }, {
        name: '2019',
        color: '#e63946',
        data: [2, 4, 3, 1]
    }]
});