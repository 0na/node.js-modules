"use strict"

var os = require('os');
var OSinfo = require('../modules/OSinfo');
var osInfoFunction = OSinfo.print();
var timeGenerator = require('../modules/timeGenerator');
var timeInfoFunction = timeGenerator.print();

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n'); //console.log zawsze stawia na końcu znak nowej linii (\n).
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            case '/getOSinfo':
                OSinfo.print();
                //getOSinfo();
                timeGenerator.print();
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});