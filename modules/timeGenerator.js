var os = require('os');
var uptime = os.uptime();
// Hours, minutes and seconds
var hours = ~~(uptime / 3600);
var minutes = ~~((uptime % 3600) / 60);
var seconds = ~~uptime % 60;


function timeGenerator() {
    if (uptime <= 3600) {
        (minutes + "min " + seconds + "sec");
    } else {
        (hours + "h " + minutes + "min " + seconds + "sec");
    };
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU model:', cpu);
    console.log('Uptime: ', uptime);
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}