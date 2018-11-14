
function get_base(type,start,end,interval) {
    var reqid = uuid();
    //var start1 =1541600000000          //测试完毕后删除
    //var end1=1541663526000
    var base_select_value=get_base_select_value()
    var paramer = {
        "reqId": reqid,
        "mertic": base_select_value,//643602038
        "stationId": "1",
        "deviceId": "600000000",//DEV100000000000
        "startTime": start,
        "endTime": end,
        "type": "max",      // 聚合方式，支持max、min、avg
        "decimal": 2,  // 小数格式
        "interval": interval     // 若不传该key，则只取一个总的统计值
    }

    $.ajax({
        url: stat_url,
        type: "POST",
        contentType: "application/json;charset=utf-8",
        // contentType: "application/json",
        data: JSON.stringify(paramer),
        dataType: "json",
        success: function (result) {
            console.log(result)
            ts2dt(result.time)
            maxlist.length = 0;
            for (var i=0;i<result.time.length;i++){
                maxlist.push(result.value[i])
            }
        },
        error: function (msg) {
            console.log(msg)
        }
    })

    paramer.type='min'
    $.ajax({
        url: stat_url,
        type: "POST",
        contentType: "application/json;charset=utf-8",
        // contentType: "application/json",
        data: JSON.stringify(paramer),
        dataType: "json",
        success: function (result) {
            console.log(result)
            minlist.length = 0;
            for (var i=0;i<result.time.length;i++){
                minlist.push(result.value[i])
            }
        },
        error: function (msg) {
            console.log(msg)
        }
    })

    paramer.type='avg'
    $.ajax({
        url: stat_url,
        type: "POST",
        contentType: "application/json;charset=utf-8",
        // contentType: "application/json",
        data: JSON.stringify(paramer),
        dataType: "json",
        success: function (result) {
            console.log(result)
            avglist.length = 0;
            for (var i=0;i<result.time.length;i++){
                avglist.push(result.value[i])
            }


        },
        error: function (msg) {
            console.log(msg)
        }
    })

    var ref = window.setTimeout(function () {
        data_base_chart.setOption({

            tooltip: {
                trigger: 'axis',
/*                formatter: function (params) {

                    var res='<div><p>时间：'+params[0].name+'</p></div>'
                    for(var i=0;i<params.length;i++){
                        res+='<p>'+params[i].seriesName+':'+params[i].data+'</p>'
                        debugger
                    }
                    return res;
                },*/
                formatter: function (params) {
                    var res='<div><p>时间：'+params[0].name+'</p></div>'
                    res+='<p>max : '+params[0].data[2]+'</p>'
                    res+='<p>min :'+params[0].data[3]+'</p>'
                    res+='<p>'+params[1].seriesName+':'+params[1].data+'</p>'
                    return res;
                },
            },
            xAxis: {
                type: 'category',
                //boundaryGap: false,
                data: date_base,
                itemStyle: {
                    normal: {
                        color: '#675bba'
                    }
                }
            },
            series: [
                {
                    type: 'k',
                    data:get_merage_k(),
                    itemStyle: {
                        normal: {
                            color:'#0cba71',
                            /*function(value) {
                                if (value[1]>55){
                                    debugger
                                    return "#46ba21"

                                } else {
                                    return '#ba1716'
                                }
                                debugger
                                return "#46ba21"
                            },*/
                            color0: '#0cba71',
                            borderColor:'#0cba71',
                            borderColor0: '#0cba71'
                        }
                    },
                },
                {
                    name: 'avg',
                    type: 'line',
                    data: avglist,
                    itemStyle: {
                        normal: {
                            color: '#675bba'
                        }
                    }
                }
            ]
        });
    }, 1000);
}
function get5min() {
    var end = Date.parse(new Date()) - 30 * 1000;  //30秒前00
    var start = end - 5*60*1000;  //5分钟前
    console.log(start,end,formatDateTime(start),formatDateTime(end))
    get_base("",start,end,10)
};

function get1h() {
    var end = Date.parse(new Date()) - 30 * 1000;  //30秒前00
    var start = end - 60*60*1000;  //5分钟前
    console.log(start,end,formatDateTime(start),formatDateTime(end))
    get_base("",start,end,60)
};

function get1d() {
    var end = Date.parse(new Date()) - 30 * 1000;  //30秒前00
    var start = end - 24*3600*1000;  //5分钟前
    console.log(start,end,formatDateTime(start),formatDateTime(end))
    get_base("",start,end,15*60)
};

function get1m() {
    console.log("select value is ", get_base_select_value())
    var reqid = uuid();
    var end = Date.parse(new Date()) - 30 * 1000;  //30秒前
    var start = end - 15 * 24 * 60 * 60 * 1000;  //5分钟前
    var paramer = {
        "reqId": reqid,
        "mertic": "electricity",
        "stationId": "1",
        "deviceId": "DEV100000000000",
        "startTime": start,
        "endTime": end,
        "type": "max",      // 聚合方式，支持max、min、avg
        "decimal": 2,  // 小数格式
        "interval": 12*60*60     // 若不传该key，则只取一个总的统计值
    }

    $.ajax({
        url: stat_url,
        type: "POST",
        contentType: "application/json;charset=utf-8",
        // contentType: "application/json",
        data: JSON.stringify(paramer),
        dataType: "json",
        success: function (result) {
            console.log(result)
        },
        error: function (msg) {
            console.log(msg)
        }
    })
};

function refresh_new() {
    console.log("select value is ", get_base_select_value())
    var reqid = uuid();
    var end = Date.parse(new Date()) - 30 * 1000;  //30秒前
    var start = end -32* 1000;  //5分钟前
    var paramer = {
        "reqId": reqid,
        "mertic": "electricity",//643602038
        "stationId": "1",
        "deviceId": "600000000",//DEV100000000000
        "startTime": start,
        "endTime": end,
        //"type": "avg",      // 聚合方式，支持max、min、avg
        "decimal": 2,  // 小数格式
        //"interval": 2     // 若不传该key，则只取一个总的统计值
    }


    $.ajax({
        url: query_url,
        type: "POST",
        contentType: "application/json;charset=utf-8",
        // contentType: "application/json",
        data: JSON.stringify(paramer),
        dataType: "json",
        success: function (result) {
            /*oldlist.length=0
            newlist.length=0
            ts2dt(result.time)
            maxlist.length = 0;
            for (var i=0;i<result.time.length;i++){
                maxlist.push(result.value[i])
            }*/
            console.log(result)
            newlist.push(result.value[0])
            console.log('newlist.length+2>oldlist.length',newlist.length,oldlist.length)
            if (newlist.length+17>oldlist.length){
                refresh_old()
            }
        },
        error: function (msg) {
            console.log(msg)
        }
    })

}

function refresh_old() {
    var reqid = uuid();
    var end = Date.parse(new Date()) - 30 * 1000;
    var start = end - 60* 1000;
    var paramer = {
        "reqId": reqid,
        "mertic": "electricity",//600000000602038
        "stationId": "1",
        "deviceId": "600000000",//DEV100000000000
        "startTime": start,
        "endTime": end,
        "type": "avg",      // 聚合方式，支持max、min、avg
        "decimal": 2,  // 小数格式
        "interval": 2     // 若不传该key，则只取一个总的统计值
    }

    $.ajax({
        url: stat_url,
        type: "POST",
        contentType: "application/json;charset=utf-8",
        // contentType: "application/json",
        data: JSON.stringify(paramer),
        dataType: "json",
        success: function (result) {
            /*oldlist.length=0
            newlist.length=0
            ts2dt(result.time)
            maxlist.length = 0;
            for (var i=0;i<result.time.length;i++){
                maxlist.push(result.value[i])
            }*/
            //oldlist.length=0
            //hms.length=0
            for (var i=0;i<result.time.length;i++){
                oldlist.push(result.value[i])
            }
            for (var i=0;i<result.time.length;i++){
                hms.push(time2hms(result.time[i]))
            }
            console.log('init_compare',result)
        },
        error: function (msg) {
            console.log(msg)
        }
    })
}

function init_compare(){
    var reqid = uuid();
    var end = Date.parse(new Date()) - 30 * 1000;
    var start = end - 60* 1000;
    var paramer = {
        "reqId": reqid,
        "mertic": "electricity",//600000000602038
        "stationId": "1",
        "deviceId": "600000000",//DEV100000000000
        "startTime": start,
        "endTime": end,
        "type": "avg",      // 聚合方式，支持max、min、avg
        "decimal": 2,  // 小数格式
        "interval": 2     // 若不传该key，则只取一个总的统计值
    }

    $.ajax({
        url: stat_url,
        type: "POST",
        contentType: "application/json;charset=utf-8",
        // contentType: "application/json",
        data: JSON.stringify(paramer),
        dataType: "json",
        success: function (result) {
            /*oldlist.length=0
            newlist.length=0
            ts2dt(result.time)
            maxlist.length = 0;
            for (var i=0;i<result.time.length;i++){
                maxlist.push(result.value[i])
            }*/
            //oldlist.length=0
            //hms.length=0
            for (var i=0;i<result.time.length;i++){
                oldlist.push(result.value[i])
            }
            for (var i=0;i<result.time.length;i++){
                hms.push(time2hms(result.time[i]))
            }
            console.log('init_compare',result)
        },
        error: function (msg) {
            console.log(msg)
        }
    })
}
var ref = window.setInterval(function () {
    refresh_new()
}, 2000);

init()

function init() {
    /*    for (var i = 0; i < 15; i++) {
            var d = formatDateTime(timelist[i])
            date_base.push(d)
            var hhmmss= time2hms(timelist[i])
            hms.push(hhmmss)
        }

        var ref = window.setInterval(get_now_date, 2000);*/
    get5min()
    //init_compare()
}
