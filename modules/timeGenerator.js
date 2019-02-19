var os = require('os');
var uptime = os.uptime();

// Hours, minutes and seconds
var hours = (uptime / 3600);
var minutes = ((uptime % 3600) / 60);
var seconds = uptime % 60;
var time = timeGenerator();

function timeGenerator() {
    if (uptime <= 3600) {
        (minutes + "min " + seconds + "sec");
    } else {
        (hours + "h " + minutes + "min " + seconds + "sec");
    };
    console.log('Uptime: ', uptime);
}

exports.print = timeGenerator;