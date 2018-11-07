// 基于准备好的dom，初始化echarts实例
var data_compare_chart = echarts.init(document.getElementById('data_compare'));

console.log(maxlist)
// 指定图表的配置项和数据
var data_compare_option = {
    title: {
        text: '历史数据对比'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['昨日','今日']
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
        data: hms
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'昨日',
            type:'line',
            stack: '总量',
            data:maxlist
        },
        {
            name:'今日',
            type:'line',
            stack: '总量',
            data:minlist
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。

data_compare_chart.setOption(data_compare_option);
