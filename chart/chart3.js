/**
 * Created by acer on 2017/3/19.
 */
$(function () {
    var seriesOptions = [],
        seriesCounter = 0,
        names = ['back','standard'],
        na = ['回测','基准']
    //    []
    // create the chart when all data is loaded
        createChart = function () {
            $('#container').highcharts('StockChart', {
                chart: {
                    renderTo: 'container'//指向的div的id属性
                },
                exporting: {
                    enabled: false //是否能导出趋势图图片
                },
                //图例
                legend: {
                    enabled: true,
                    labelFormat: '<span style="{color}">{na}</span>'
                },
                series: seriesOptions,
                xAxis: {
                    tickPixelInterval: 200,//x轴上的间隔
                    categories: ['back', 'standard'],
                    //  title :{
                    //      text:"title"
                    //  },
                    type: 'datetime', //定义x轴上日期的显示格式
                    labels: {
                        formatter: function () {
                            var vDate = new Date(this.value);
                            //alert(this.value);
                            return vDate.getFullYear() + "/" + (vDate.getMonth() + 1) + "/" + vDate.getDate();
                        },
                        align: 'center'
                    }
                },
                yAxis: {

                },
                tooltip: {
                    xDateFormat: '%Y/%m/%d, %A'//鼠标移动到趋势线上时显示的日期格式
                },
                // 版权信息
                credits: {
                    enabled: false // 禁用版权信息
                },
                rangeSelector: {
                    buttons: [{//定义一组buttons,下标从0开始
                        type: 'week',
                        count: 1,
                        text: '1w'
                    }, {
                        type: 'month',
                        count: 1,
                        text: '1m'
                    }, {
                        type: 'month',
                        count: 3,
                        text: '3m'
                    }, {
                        type: 'month',
                        count: 6,
                        text: '6m'
                    }, {
                        type: 'ytd',
                        text: 'YTD'
                    }, {
                        type: 'year',
                        count: 1,
                        text: '1y'
                    }, {
                        type: 'all',
                        text: 'All'
                    }],
                    selected: 1//表示以上定义button的index,从0开始
                },
            });
        };
    $.each(names, function (i, name) {
        $.get('../'+name+'.json', function (data) {
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