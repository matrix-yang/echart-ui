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
        data: hms
    },
    yAxis: {
        scale:true,
        type: 'value'
    },
    series: [
        {
            name:'昨日',
            type:'line',
            data:oldlist,
            itemStyle: {
                normal: {
                    color: '#ba0e0e'
                }
            }
        },
        {
            name:'今日',
            type:'line',
            data:newlist,
            itemStyle: {
                normal: {
                    color: '#2eba1e'
                }
            }
        }
    ]
};

data_compare_chart.setOption(data_compare_option)

// 使用刚指定的配置项和数据显示图表。
var ref = window.setInterval(function () {
/*    newlist.push(2+Math.random()*3)
    if (newlist.length>=oldlist.length){
        oldlist.push(12+Math.random()*3)
        hms.push(121)
        console.log(hms.length,oldlist.length)
    }*/
    data_compare_chart.setOption(
        {
            xAxis: {
                type: 'category',
                data: hms
            },
            series: [

                {
                    name:'今日',
                    type:'line',
                    data:newlist
                },
                {
                    name:'昨日',
                    type:'line',
                    data:oldlist
                },
            ]
        }
    );
}, 1000);
