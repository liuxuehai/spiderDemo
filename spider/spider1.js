var Crawler = require("crawler");
var url = require('url');
// 载入配置文件
var config = require('./config');
var m1=require("./m1");

var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, result, $) {

        // $ is Cheerio by default
        //a lean implementation of core jQuery designed specifically for the server
        $('a').each(function(index, a) {
            var toQueueUrl = $(a).attr('href');
            c.queue(toQueueUrl);
        });
    }
});



var select="time,price,volume";

m1.push(c,config.address,'600000',select,'1471700234414');

// // Queue URLs with custom callbacks & parameters
// c.queue([{
//     uri: 'http://yunhq.sse.com.cn:32041/v1/sh1/line/600000?callback=jQuery111206028134717845259_1471700234412&begin=0&end=-1&select=time%2Cprice%2Cvolume&_=1471700234414',
//     jQuery: true,
//
//     // The global callback won't be called
//     callback: function (error, result) {
//         console.log(result.body);
//
//         var str = JSON.parse(result.body);
//         console.log(str);
//     }
// }]);


console.log(config.name)
