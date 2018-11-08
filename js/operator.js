
function get_base(type,start,end,interval) {
    var reqid = uuid();
    var start1 =1541600000000          //测试完毕后删除
    var end1=1541663526000
    var paramer = {
        "reqId": reqid,
        "mertic": "electricity",//643602038
        "stationId": "1",
        "deviceId": "643602038",//DEV100000000000
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

            data_base_chart.setOption(data_base_option);
        },
        error: function (msg) {
            console.log(msg)
        }
    })
}
function get5min() {
    console.log("select value is ", get_base_select_value())
    var end = Date.parse(new Date()) - 30 * 1000;  //30秒前00
    var start = end - 3*24*3600*1000;  //5分钟前
    console.log(start,end,formatDateTime(start),formatDateTime(end))
    get_base("",start,end,20)
    console.log("ts2dt------->",ts2dt(['1541618940000','1541618940000','1541618940000']))
};

function get1h() {
    console.log("select value is ", get_base_select_value())
    var reqid = uuid();
    var end = Date.parse(new Date()) - 30 * 1000;  //30秒前
    var start = end - 60 * 60 * 1000;  //5分钟前
    var paramer = {
        "reqId": reqid,
        "mertic": "electricity",
        "stationId": "1",
        "deviceId": "DEV100000000000",
        "startTime": start,
        "endTime": end,
        "type": "max",      // 聚合方式，支持max、min、avg
        "decimal": 2,  // 小数格式
        "interval": 2*60     // 若不传该key，则只取一个总的统计值
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

function get1d() {
    console.log("select value is ", get_base_select_value())
    var reqid = uuid();
    var end = Date.parse(new Date()) - 30 * 1000;  //30秒前
    var start = end - 24 * 60 * 60 * 1000;  //5分钟前
    var paramer = {
        "reqId": reqid,
        "mertic": "electricity",
        "stationId": "1",
        "deviceId": "DEV100000000000",
        "startTime": start,
        "endTime": end,
        "type": "max",      // 聚合方式，支持max、min、avg
        "decimal": 2,  // 小数格式
        "interval": 30*60     // 若不传该key，则只取一个总的统计值
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

function get1m() {
    console.log("select value is ", get_base_select_value())
    var reqid = uuid();
    var end = Date.parse(new Date()) - 30 * 1000;  //30秒前
    var start = end - 30 * 24 * 60 * 60 * 1000;  //5分钟前
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

function init_now() {
    console.log("select value is ", get_base_select_value())
    var reqid = uuid();
    var end = Date.parse(new Date()) - 30 * 1000;  //30秒前
    var start = end - 30 * 24 * 60 * 60 * 1000;  //5分钟前
    var paramer = {
        "reqId": reqid,
        "mertic": "electricity",
        "stationId": "1",
        "deviceId": "DEV100000000000",
        "startTime": start,
        "endTime": end,
        "type": "max",      // 聚合方式，支持max、min、avg
        "decimal": 2,  // 小数格式
        "interval": 20     // 若不传该key，则只取一个总的统计值
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
}