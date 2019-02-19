var os = require('os');
var uptime = os.uptime();

// Hours, minutes and seconds
var hours = (uptime / 3600).toFixed(0);
var minutes = ((uptime % 3600) / 60).toFixed(0);
var seconds = uptime % 60;
var time = timeGenerator();

function timeGenerator() {
    if (uptime <= 3600) {
        var score = (minutes + "min " + seconds + "sec");
    } else {
        var score = (hours + "h " + minutes + "min " + seconds + "sec");
    };
    console.log("Uptime :" + score);
}

exports.print = timeGenerator;