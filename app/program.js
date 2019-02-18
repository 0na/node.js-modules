"use strict"

var os = require('os');
var OSinfo = require('../modules/OSinfo');
var timeGenerator = require('../modules/timeGenerator');

//funkcja, ktora pobiera informacje z modulu os
function getOSinfo() {
    var type = os.type();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU model:', cpu);
    console.log('Uptime:', uptime);
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            case '/getOSinfo':
                getOSinfo();
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});