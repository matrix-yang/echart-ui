function get5min() {
    console.log("select value is ", get_base_select_value())
    var reqid = uuid();
    // var end = Date.parse(new Date()) - 30 * 1000;  //30秒前
    // var start = end - 5 * 60 * 1000;  //5分钟前

    var start =1500000000000
    var end=1600000500000
    console.log(start, end)
    console.log(formatDateTime(start))
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
    var paramer1 = {}
    paramer1.reqId = reqid
    paramer1.mertic = 'electricity'
    paramer1.stationId = '1'
    paramer1.deviceId = 'DEV100000000000'
    paramer1.startTime = start
    paramer1.endTime = end
    paramer1.type = 'max'
    paramer1.decimal = 2
    paramer1.interval = 20


    /*    $.post(stat_url, paramer.toString(), function (data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        });*/

    console.log(JSON.stringify(paramer))

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
            // timelist.length = 0;
            // for (var i=0;i<result.time.length;i++){
            //     timelist.push(result.time[i])
            // }
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