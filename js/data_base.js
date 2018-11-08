// 基于准备好的dom，初始化echarts实例
var data_base_chart = echarts.init(document.getElementById('data_base'));


console.log(maxlist)
// 指定图表的配置项和数据
var data_base_option = {
    title: {
        text: '基础数据统计'
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
        data: date_base
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'max',
            type:'line',
            stack: '总量',
            data:maxlist
        },
        {
            name:'avg',
            type:'line',
            stack: '总量',
            data:avglist
        },
        {
            name:'min',
            type:'line',
            stack: '总量',
            data:minlist
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
data_base_chart.setOption(data_base_option);