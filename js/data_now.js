// 基于准备好的dom，初始化echarts实例
var data_now_chart = echarts.init(document.getElementById('data_now'));

console.log(maxlist)
// 指定图表的配置项和数据
var data_now_option = {
    title: {
        text: '实时数据展示'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['max','avg','min']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date_now
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'max',
            type:'line',
            stack: '总量',
            data:data_now
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。

var ref = window.setInterval(function () {
    data_now_chart.setOption(data_now_option);
}, 1000);