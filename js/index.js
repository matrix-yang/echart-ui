var maxlist = [13.99, 14.08, 14.74, 10.32, 14.7, 12.05, 8.74, 14.33, 9.09, 14.3, 14.69, 9.09, 8.82, 8.31, 13.78]
var avglist = [4.66, 7.14, 4.24, 5.33, 5.36, 5.8, 4.96, 6.76, 7.15, 6.06, 6.5, 4.77, 5.85, 5.79, 4.95]
var minlist = [2.48, 3.92, 3.08, 2.04, 3.46, 3.94, 3.86, 2.97, 3.94, 2.37, 3.72, 3.29, 3.08, 3.67, 2.77]
var timelist = [1541473948000, 1541473968000, 1541473988000, 1541474008000, 1541474028000,
    1541474048000, 1541474068000, 1541474088000, 1541474108000, 1541474128000,
    1541474148000, 1541474168000, 1541474188000, 1541474208000, 1541474228000]

var data_base_select=""

var date = []

var hms=[]

var date_now = []

var data_now = []

var stat_url='http://172.28.40.61:8010/service/stat'
var query_url='http://172.28.40.61:8010/service/query'

init()

function init() {
    for (var i = 0; i < 15; i++) {
        var d = formatDateTime(timelist[i])
        date.push(d)
        var hhmmss= time2hms(timelist[i])
        hms.push(hhmmss)
    }

    var ref = window.setInterval(get_now_date, 2000);

}




function get_now_date() {

    data_now.push(12.5)
    var now = Date.parse(new Date())
    var d = formatDateTime(now)
    date_now.push(d)
    console.log("now is",d)

}


function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

function formatDateTime(inputTime) {
    var date = new Date(inputTime);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
};

function time2hms(inputTime) {
    var date = new Date(inputTime);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return h + ':' + minute + ':' + second;
};

function get_base_select_value() {
    var select = document.getElementById("base_select");
    var value = select.value;
    return value
}

