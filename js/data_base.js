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
        data: ['max', 'avg', 'min']
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
        //boundaryGap: false,
        data: date_base
    },
    yAxis: {
        // scale:true,
        type: 'value',
        max: 120,
        min: 30
    },
    /*series: [

        {
            name: 'max',
            type: 'line',
            data: maxlist,
            itemStyle: {
                normal: {
                    color: '#d14a61',
                }
            }
        },
        {
            name: 'avg',
            type: 'bar',
            data: avglist,
            itemStyle: {
                normal: {
                    color: '#675bba'
                }
            }
        },
        {
            name: 'min',
            type: 'bar',
            data: minlist,
            itemStyle: {
                normal: {
                    color:'#5793f3',
                }
            }
        }
    ]*/
};

// 使用刚指定的配置项和数据显示图表。
data_base_chart.setOption(data_base_option);