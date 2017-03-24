/**
 * Created by acer on 2017/3/19.
 */
$(function () {
    var seriesOptions = [],
        seriesCounter = 0,
        names = ['back','standard'],
    //    []
    // create the chart when all data is loaded
        createChart = function () {
            $('#container').highcharts('StockChart', {
                rangeSelector: {
                    selected: 4
                },
                title: {
                    text: '我是标题'
                },
                //图例
                legend: {
                    enabled: true,
                },
                labelFormatter: function() {
                    /*
                     *  格式化函数可用的变量：this， 可以用 console.log(this) 来查看包含的详细信息
                     *  this 代表当前数据列对象，所以默认的实现是 return this.name
                     */
                    return  this.name + '(Click to hide or show)';
                },
                yAxis: {
                    labels: {
                        formatter: function () {
                            return this.value;
                        },
                        //maxStaggerLines: 8,
                    },
                    plotLines: [{
                        value: 0,
                        width: 2,
                        //color: 'silver'
                    }]
                },
                plotOptions: {
                    series: {
                        type : "line",
                    }
                },
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change})<br/>',
                    valueDecimals: 2
                },
                series: seriesOptions,
                rangeSelector : {enabled: false },
                // 版权信息
                credits:{
                    enabled:false // 禁用版权信息
                },
                yAxis: {
                    categories: ['back','standard'] ,
                    allowDecimals: 'true',
                    labels: { align: 'left'},
                },
                xAxis: {
                    categories: ['back','standard'] ,
                    allowDecimals: 'true',
                },
                yAxis: [{
                    title: {
                        text: null
                    },
                    plotLines: [{
                        value: 0,
                        width: 2,
                        color: '#808080'
                    }],
                    labels: {
                        enabled:false
                    }
                },
                    {
                        title: {
                            text: null
                        },
                        plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#4e93d2'
                        }],
                        labels: {
                            enabled:false
                        }
                    },
                    {tickPositions: [0.00, 5.00, 10.00, 15.00,20.00,25.00]} // 指定竖轴坐标点的值

                ]
            });
        };
    $.each(names, function (i, name) {
        $.get('../standard.json', function (data) {
                seriesOptions[i] = {
                    name: name,
                    data: data
                };
            // As we're loading the data asynchronously, we don't know what order it will arrive. So
            // we keep a counter and create the chart when all the data is loaded.
            seriesCounter += 1;
            if (seriesCounter === names.length) {
                createChart();
            }
        });

    });
});
//data.jianshukeji.com/jsonp?filename=json/msft-c.json&callback=?