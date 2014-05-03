/**
 *
 *
 * Created by ajevic on 5/2/2014.
 *
 * This documents elasticsearch calls
 */
"use strict";
/* jshint ignore:start */
/**
 *  RENDER
 *
 */
/*
    POST http://107.20.238.69:8080/render HTTP/1.1
    Host: 107.20.238.69:8080
    Connection: keep-alive
    Content-Length: 108
    Accept: application/json, text/plain, *//*
    Origin: http://localhost:63342
    User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.131 Safari/537.36
    Content-Type: application/x-www-form-urlencoded
    DNT: 1
    Referer: http://localhost:63342/grafana-git/src/index.html
    Accept-Encoding: gzip,deflate,sdch
    Accept-Language: en-US,en;q=0.8,sr;q=0.6,sh;q=0.4,hr;q=0.2
 */
var request = "from=17%3A09_20130720&until=12%3A19_20130806&target=servers.*.cpu.total.system&format=json&maxDataPoints=612";
/**
 * response
 */
/*
     HTTP/1.1 200 OK
     Date: Fri, 02 May 2014 23:56:56 GMT
     Server: Apache/2.4.4 (Amazon) mod_wsgi/3.3 Python/2.6.8
     Content-Encoding: gzip
     Vary: Accept-Encoding
     Pragma: no-cache
     Cache-Control: no-cache
     Content-Length: 6567
     Keep-Alive: timeout=5, max=100
     Connection: Keep-Alive
     Content-Type: application/json
 */
var resposne = "datapoints...";


/**
 * GET METRICS
 *
 */
/*
    GET http://107.20.238.69:8080/metrics/find/?query=* HTTP/1.1
    Host: 107.20.238.69:8080
    Connection: keep-alive
    Accept: application/json, text/plain, *//*
    Origin: http://localhost:63342
    User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.131 Safari/537.36
    DNT: 1
    Referer: http://localhost:63342/grafana-git/src/index.html
    Accept-Encoding: gzip,deflate,sdch
    Accept-Language: en-US,en;q=0.8,sr;q=0.6,sh;q=0.4,hr;q=0.2
*/
/**
 * response
 */
/*
    HTTP/1.1 200 OK
    Date: Sat, 03 May 2014 00:02:54 GMT
    Server: Apache/2.4.4 (Amazon) mod_wsgi/3.3 Python/2.6.8
    Content-Encoding: gzip
    Vary: Cookie,Accept-Encoding
    Pragma: no-cache
    Cache-Control: no-cache
    Content-Length: 126
    Keep-Alive: timeout=5, max=100
    Connection: Keep-Alive
    Content-Type: application/json
 */
response = [
    {
        "leaf":0,
        "context":{

        },
        "text":"Coherence",
        "expandable":1,
        "id":"Coherence",
        "allowChildren":1
    },
    {
        "leaf":0,
        "context":{

        },
        "text":"carbon",
        "expandable":1,
        "id":"carbon",
        "allowChildren":1
    },
    {
        "leaf":0,
        "context":{

        },
        "text":"servers",
        "expandable":1,
        "id":"servers",
        "allowChildren":1
    }
]

