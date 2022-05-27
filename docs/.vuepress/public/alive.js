function get_alive() {
    setTimeout("_get_alive()", 100) // 防止vuepress原页面覆盖
}


function _get_alive() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dicewp.rhodescafe.net/data/alive.json?cache=" + Date.now());
    xhr.onload = function () {
        var now = Date.now() / 1000;
        var time = now - Number(xhr.responseText);

        var alive = document.getElementById("alive");
        if (time < 120) {
            alive.innerText = "✅";
        } else {
            alive.innerText = "❌";
        }

        var text = "";
        if (time > 3600) {
            text += parseInt(time / 3600) + "时";
            time %= 3600
        }

        if (time > 60) {
            text += parseInt(time / 60) + "分";
            time %= 60
        }

        text += parseInt(time) + "秒";
        var report_time = document.getElementById("alive-report-time");
        report_time.innerText = text;
    };
    xhr.send();

}