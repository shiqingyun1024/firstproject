
$(function () {
    var back;
    var standard;
    $.get('http://10.9.9.116:8080/financial/history_signal/image_data/1/standard',function(data){
        standard = data;
        createChart();
    });
    $.get('http://10.9.9.116:8080/financial/history_signal/image_data/1/back',function(data){
        back = data;
        createChart();
    });
       var createChart = function () {
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
                },
                yAxis: {
                    tickPixelInterval: 50,//y轴上的间隔
                },
                xAxis: {
                    tickPixelInterval: 50,//x轴上的间隔
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
                series:[{
                    name : '回测净值',
                    data : back
                },{
                    name : '基准净值',
                    data : standard
                }],
            });
        };
});
