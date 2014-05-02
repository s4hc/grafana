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
 * INDEX HTML - Start Page
 *
 */


/**
 * GET REQUEST:
 *
 * GET /grafana-dash/[es-type]/[es-id]?[timestamp] HTTP/1.1
 *
 * es-type  : dashboard
 * es-id    : id
 * timestamp: timestamp in ms
 *
 * INVOKED FROM: src/app/services/dashboard.js - elasticsearch_load()
 *
 */
/*
    GET http://localhost:9200/grafana-dash/dashboard/Welcome%20to%20Grafana!?1399056563649 HTTP/1.1
    Host: localhost:9200
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
 * RESPONSE:
 *
 */
/*
    HTTP/1.1 200 OK
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=UTF-8
    Content-Length: 3470
 */
var response = {
    "_index": "grafana-dash",
    "_type": "dashboard",
    "_id": "Welcome to Grafana!",
    "_version": 1,
    "found": true,
    "_source": {
        "user": "guest",
        "group": "guest",
        "title": "Welcome to Grafana!",
        "tags": [],
        "dashboard": "{\"title\":\"Welcome to Grafana!\",\"services\":{\"filter\":{\"list\":[],\"time\":{\"from\":\"now-6h\",\"to\":\"now\"}}},\"rows\":[{\"title\":\"Welcome to Grafana\",\"height\":\"150px\",\"editable\":true,\"collapse\":false,\"collapsable\":true,\"panels\":[{\"error\":false,\"span\":12,\"editable\":true,\"type\":\"text\",\"loadingEditor\":false,\"mode\":\"markdown\",\"content\":\"####Thank you for trying out Grafana! \\n\\nGeneral documentation is found in the readme and in the wiki section of the [Github Project](https://github.com/torkelo/grafana). If you encounter any problem or have an idea for an improvement do not hesitate to open a github issue. \\n\\nTips: \\n\\n- Ctrl+S saves the current dashboard\\n- Ctrl+F Opens the dashboard finder (searches elastic search)\\n- Ctrl+H Hide/show row controls \\n- Click and drag graph title to move panel (only works when row controls are enabled)\\n\\nIf you do not see a graph in the panel bellow the browser cannot access your graphite installation. Please make sure that the graphiteUrl property in config.js is correctly set and accessible.\",\"style\":{},\"title\":\"Welcome to Grafana\"}],\"notice\":false},{\"title\":\"test\",\"height\":\"250px\",\"editable\":true,\"collapse\":false,\"collapsable\":true,\"panels\":[{\"span\":12,\"editable\":true,\"type\":\"graphite\",\"x-axis\":true,\"y-axis\":true,\"scale\":1,\"y_formats\":[\"short\",\"short\"],\"grid\":{\"max\":null,\"min\":0,\"threshold1\":null,\"threshold2\":null,\"threshold1Color\":\"rgba(216, 200, 27, 0.27)\",\"threshold2Color\":\"rgba(234, 112, 112, 0.22)\"},\"resolution\":100,\"lines\":true,\"fill\":1,\"linewidth\":2,\"points\":false,\"pointradius\":5,\"bars\":false,\"stack\":true,\"spyable\":true,\"options\":false,\"legend\":{\"show\":true,\"values\":false,\"min\":false,\"max\":false,\"current\":false,\"total\":false,\"avg\":false},\"interactive\":true,\"legend_counts\":true,\"timezone\":\"browser\",\"percentage\":false,\"zerofill\":true,\"nullPointMode\":\"connected\",\"steppedLine\":false,\"tooltip\":{\"value_type\":\"cumulative\",\"query_as_alias\":true},\"targets\":[{\"target\":\"randomWalk('random walk')\"},{\"target\":\"randomWalk('random walk2')\"},{\"target\":\"randomWalk('random walk3')\"}],\"aliasColors\":{},\"aliasYAxis\":{},\"title\":\"Graphite test\",\"datasource\":null,\"renderer\":\"flot\",\"annotate\":{\"enable\":false}}],\"notice\":false}],\"editable\":true,\"failover\":false,\"panel_hints\":true,\"style\":\"dark\",\"pulldowns\":[{\"type\":\"filtering\",\"collapse\":false,\"notice\":false,\"enable\":false},{\"type\":\"annotations\",\"enable\":false}],\"nav\":[{\"type\":\"timepicker\",\"collapse\":false,\"notice\":false,\"enable\":true,\"status\":\"Stable\",\"time_options\":[\"5m\",\"15m\",\"1h\",\"6h\",\"12h\",\"24h\",\"2d\",\"7d\",\"30d\"],\"refresh_intervals\":[\"5s\",\"10s\",\"30s\",\"1m\",\"5m\",\"15m\",\"30m\",\"1h\",\"2h\",\"1d\"],\"now\":true}],\"loader\":{\"save_gist\":false,\"save_elasticsearch\":true,\"save_local\":true,\"save_default\":true,\"save_temp\":true,\"save_temp_ttl_enable\":true,\"save_temp_ttl\":\"30d\",\"load_gist\":false,\"load_elasticsearch\":true,\"load_elasticsearch_size\":20,\"load_local\":false,\"hide\":false},\"refresh\":false,\"tags\":[],\"timezone\":\"browser\"}"
      }
    };


/**
 *  SAVE DASHBOARD
 *
 *  Consist of three requests:
 *  1) Get OPTIONS to check support for ES
 *  2) PUT to create dashboard in ES
 *  3) GET to retrieve saved dashboard from ES
 */
/**
 * 1) OPTIONS REQUEST
 *
 * OPTIONS /grafana-dash/[es-type]/[es-id] HTTP/1.1
 *
 * es-type  : dashboard
 * es-id    : id
 *
 */
/*
    OPTIONS /grafana-dash/dashboard/SaveTest HTTP/1.1
    Host: localhost:9200
    Connection: keep-alive
    Access-Control-Request-Method: PUT
    Origin: http://localhost:63342
    User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.131 Safari/537.36
    Access-Control-Request-Headers: accept, content-type
    Accept: *//*
    DNT: 1
    Referer: http://localhost:63342/grafana-git/src/index.html
    Accept-Encoding: gzip,deflate,sdch
    Accept-Language: en-US,en;q=0.8,sr;q=0.6,sh;q=0.4,hr;q=0.2
*/
/**
 * RESPONSE
 */
/*
    HTTP/1.1 200 OK
    Access-Control-Allow-Origin: *
    Access-Control-Max-Age: 1728000
    Access-Control-Allow-Methods: OPTIONS, HEAD, GET, POST, PUT, DELETE
    Access-Control-Allow-Headers: X-Requested-With, Content-Type, Content-Length
    Content-Type: text/plain; charset=UTF-8
    Content-Length: 0
*/
/**
 * 2) PUT REQUEST
 *
 * PUT /grafana-dash/[es-type]/[es-id] HTTP/1.1
 *
 * es-type  : dashboard
 * es-id    : id of dashboard to save
 *
 */
/*
    PUT /grafana-dash/dashboard/SaveTest HTTP/1.1
    Host: localhost:9200
    Connection: keep-alive
    Content-Length: 3335
    Accept: application/json, text/plain, *//*
    Origin: http://localhost:63342
    User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.131 Safari/537.36
    Content-Type: application/json;charset=UTF-8
    DNT: 1
    Referer: http://localhost:63342/grafana-git/src/index.html
    Accept-Encoding: gzip,deflate,sdch
    Accept-Language: en-US,en;q=0.8,sr;q=0.6,sh;q=0.4,hr;q=0.2
 */
var request = {
    "user":"guest",
    "group":"guest",
    "title":"SaveTest",
    "tags":[

    ],
    "dashboard":"{\"title\":\"SaveTest\",\"services\":{\"filter\":{\"list\":[],\"time\":{\"from\":\"now-6h\",\"to\":\"now\"}}},\"rows\":[{\"title\":\"Welcome to Grafana\",\"height\":\"150px\",\"editable\":true,\"collapse\":false,\"collapsable\":true,\"panels\":[{\"error\":false,\"span\":12,\"editable\":true,\"type\":\"text\",\"loadingEditor\":false,\"mode\":\"markdown\",\"content\":\"####Thank you for trying out Grafana! \\n\\nGeneral documentation is found in the readme and in the wiki section of the [Github Project](https://github.com/torkelo/grafana). If you encounter any problem or have an idea for an improvement do not hesitate to open a github issue. \\n\\nTips: \\n\\n- Ctrl+S saves the current dashboard\\n- Ctrl+F Opens the dashboard finder (searches elastic search)\\n- Ctrl+H Hide/show row controls \\n- Click and drag graph title to move panel (only works when row controls are enabled)\\n\\nIf you do not see a graph in the panel bellow the browser cannot access your graphite installation. Please make sure that the graphiteUrl property in config.js is correctly set and accessible.\",\"style\":{},\"title\":\"Welcome to Grafana\"}],\"notice\":false},{\"title\":\"test\",\"height\":\"250px\",\"editable\":true,\"collapse\":false,\"collapsable\":true,\"panels\":[{\"span\":12,\"editable\":true,\"type\":\"graphite\",\"x-axis\":true,\"y-axis\":true,\"scale\":1,\"y_formats\":[\"short\",\"short\"],\"grid\":{\"max\":null,\"min\":0,\"threshold1\":null,\"threshold2\":null,\"threshold1Color\":\"rgba(216, 200, 27, 0.27)\",\"threshold2Color\":\"rgba(234, 112, 112, 0.22)\"},\"resolution\":100,\"lines\":true,\"fill\":1,\"linewidth\":2,\"points\":false,\"pointradius\":5,\"bars\":false,\"stack\":true,\"spyable\":true,\"options\":false,\"legend\":{\"show\":true,\"values\":false,\"min\":false,\"max\":false,\"current\":false,\"total\":false,\"avg\":false},\"interactive\":true,\"legend_counts\":true,\"timezone\":\"browser\",\"percentage\":false,\"zerofill\":true,\"nullPointMode\":\"connected\",\"steppedLine\":false,\"tooltip\":{\"value_type\":\"cumulative\",\"query_as_alias\":true},\"targets\":[{\"target\":\"randomWalk('random walk')\"},{\"target\":\"randomWalk('random walk2')\"},{\"target\":\"randomWalk('random walk3')\"}],\"aliasColors\":{},\"aliasYAxis\":{},\"title\":\"Graphite test\",\"datasource\":null,\"renderer\":\"flot\",\"annotate\":{\"enable\":false}}],\"notice\":false}],\"editable\":true,\"failover\":false,\"panel_hints\":true,\"style\":\"dark\",\"pulldowns\":[{\"type\":\"filtering\",\"collapse\":false,\"notice\":false,\"enable\":false},{\"type\":\"annotations\",\"enable\":false}],\"nav\":[{\"type\":\"timepicker\",\"collapse\":false,\"notice\":false,\"enable\":true,\"status\":\"Stable\",\"time_options\":[\"5m\",\"15m\",\"1h\",\"6h\",\"12h\",\"24h\",\"2d\",\"7d\",\"30d\"],\"refresh_intervals\":[\"5s\",\"10s\",\"30s\",\"1m\",\"5m\",\"15m\",\"30m\",\"1h\",\"2h\",\"1d\"],\"now\":true}],\"loader\":{\"save_gist\":false,\"save_elasticsearch\":true,\"save_local\":true,\"save_default\":true,\"save_temp\":true,\"save_temp_ttl_enable\":true,\"save_temp_ttl\":\"30d\",\"load_gist\":false,\"load_elasticsearch\":true,\"load_elasticsearch_size\":20,\"load_local\":false,\"hide\":false},\"refresh\":false,\"tags\":[],\"timezone\":\"browser\"}"
  };
/**
 * RESPONSE
 *
 */
/*
    HTTP/1.1 201 Created
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=UTF-8
    Content-Length: 90
 */
response = {
    "_index":"grafana-dash",
    "_type":"dashboard",
    "_id":"SaveTest",
    "_version":1,
    "created":true
  };



/**
 * SEARCH DASHBOARD
 *
 * Search action button triggers:
 * 1) OPTIONS
 * 2) POST
 *
 */
/**
 * 1) OPTIONS /grafana-dash/dashboard/_search
 *
 */
/*
    OPTIONS /grafana-dash/dashboard/_search HTTP/1.1
    Host: localhost:9200
    Connection: keep-alive
    Access-Control-Request-Method: POST
    Origin: http://localhost:63342
    User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.131 Safari/537.36
    Access-Control-Request-Headers: accept, content-type
    Accept: *//*
    DNT: 1
    Referer: http://localhost:63342/grafana-git/src/index.html
    Accept-Encoding: gzip,deflate,sdch
    Accept-Language: en-US,en;q=0.8,sr;q=0.6,sh;q=0.4,hr;q=0.2
 */
/**
 * RESPONSE
 *
 */
/*
    HTTP/1.1 200 OK
    Access-Control-Allow-Origin: *
    Access-Control-Max-Age: 1728000
    Access-Control-Allow-Methods: OPTIONS, HEAD, GET, POST, PUT, DELETE
    Access-Control-Allow-Headers: X-Requested-With, Content-Type, Content-Length
    Content-Type: text/plain; charset=UTF-8
    Content-Length: 0
 */

/**
 *
 * 2) POST /grafana-dash/dashboard/_search HTTP/1.1
 *
 */
/*
    POST http://localhost:9200/grafana-dash/dashboard/_search HTTP/1.1
    Host: localhost:9200
    Connection: keep-alive
    Content-Length: 142
    Accept: application/json, text/plain, *//*
    Origin: http://localhost:63342
    User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.131 Safari/537.36
    Content-Type: application/json;charset=UTF-8
    DNT: 1
    Referer: http://localhost:63342/grafana-git/src/index.html
    Accept-Encoding: gzip,deflate,sdch
    Accept-Language: en-US,en;q=0.8,sr;q=0.6,sh;q=0.4,hr;q=0.2
 */
request = {
    "query": {
        "query_string": {
            "query": "title:*"
          }
        },
        "sort": [
            "_uid"
          ],
          "facets": {
            "tags": {
                "terms": {
                    "field": "tags",
                    "order": "term",
                    "size": 50
                  }
                }
              },
              "size": 20
            };
/**
 *  RESPONSE
 *
 */
/*
    HTTP/1.1 200 OK
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=UTF-8
    Content-Length: 17786
 */
 response = {
     "took":83,
     "timed_out":false,
     "_shards":{
         "total":5,
         "successful":5,
         "failed":0
     },
     "hits":{
         "total":5,
         "max_score":null,
         "hits":[
             {
                 "_index":"grafana-dash",
                 "_type":"dashboard",
                 "_id":"SaveJson",
                 "_score":null,
                 "_source":{
                     "user":"guest",
                     "group":"guest",
                     "title":"SaveJson",
                     "tags":[
                         "first tag",
                         "second tag"
                     ],
                     "dashboard":"{\"title\":\"SaveJson\",\"services\":{\"filter\":{\"list\":[],\"time\":{\"from\":\"now-6h\",\"to\":\"now\"}}},\"rows\":[{\"title\":\"Welcome to Grafana\",\"height\":\"150px\",\"editable\":true,\"collapse\":false,\"collapsable\":true,\"panels\":[{\"error\":false,\"span\":12,\"editable\":true,\"type\":\"text\",\"loadingEditor\":false,\"mode\":\"markdown\",\"content\":\"####Thank you for trying out Grafana! \\n\\nGeneral documentation is found in the readme and in the wiki section of the [Github Project](https://github.com/torkelo/grafana). If you encounter any problem or have an idea for an improvement do not hesitate to open a github issue. \\n\\nTips: \\n\\n- Ctrl+S saves the current dashboard\\n- Ctrl+F Opens the dashboard finder (searches elastic search)\\n- Ctrl+H Hide/show row controls \\n- Click and drag graph title to move panel (only works when row controls are enabled)\\n\\nIf you do not see a graph in the panel bellow the browser cannot access your graphite installation. Please make sure that the graphiteUrl property in config.js is correctly set and accessible.\",\"style\":{},\"title\":\"Welcome to Grafana\"}],\"notice\":false},{\"title\":\"test\",\"height\":\"250px\",\"editable\":true,\"collapse\":false,\"collapsable\":true,\"panels\":[{\"span\":12,\"editable\":true,\"type\":\"graphite\",\"x-axis\":true,\"y-axis\":true,\"scale\":1,\"y_formats\":[\"short\",\"short\"],\"grid\":{\"max\":null,\"min\":0,\"threshold1\":null,\"threshold2\":null,\"threshold1Color\":\"rgba(216, 200, 27, 0.27)\",\"threshold2Color\":\"rgba(234, 112, 112, 0.22)\"},\"resolution\":100,\"lines\":true,\"fill\":1,\"linewidth\":2,\"points\":false,\"pointradius\":5,\"bars\":false,\"stack\":true,\"spyable\":true,\"options\":false,\"legend\":{\"show\":true,\"values\":false,\"min\":false,\"max\":false,\"current\":false,\"total\":false,\"avg\":false},\"interactive\":true,\"legend_counts\":true,\"timezone\":\"browser\",\"percentage\":false,\"zerofill\":true,\"nullPointMode\":\"connected\",\"steppedLine\":false,\"tooltip\":{\"value_type\":\"cumulative\",\"query_as_alias\":true},\"targets\":[{\"target\":\"randomWalk('random walk')\"},{\"target\":\"randomWalk('random walk2')\"},{\"target\":\"randomWalk('random walk3')\"}],\"aliasColors\":{},\"aliasYAxis\":{},\"title\":\"Graphite test\",\"datasource\":null,\"renderer\":\"flot\",\"annotate\":{\"enable\":false}}],\"notice\":false}],\"editable\":true,\"failover\":false,\"panel_hints\":true,\"style\":\"dark\",\"pulldowns\":[{\"type\":\"filtering\",\"collapse\":false,\"notice\":false,\"enable\":false},{\"type\":\"annotations\",\"enable\":false}],\"nav\":[{\"type\":\"timepicker\",\"collapse\":false,\"notice\":false,\"enable\":true,\"status\":\"Stable\",\"time_options\":[\"5m\",\"15m\",\"1h\",\"6h\",\"12h\",\"24h\",\"2d\",\"7d\",\"30d\"],\"refresh_intervals\":[\"5s\",\"10s\",\"30s\",\"1m\",\"5m\",\"15m\",\"30m\",\"1h\",\"2h\",\"1d\"],\"now\":true}],\"loader\":{\"save_gist\":false,\"save_elasticsearch\":true,\"save_local\":true,\"save_default\":true,\"save_temp\":true,\"save_temp_ttl_enable\":true,\"save_temp_ttl\":\"30d\",\"load_gist\":false,\"load_elasticsearch\":true,\"load_elasticsearch_size\":20,\"load_local\":false,\"hide\":false},\"refresh\":false,\"tags\":[\"first tag\",\"second tag\"],\"timezone\":\"browser\"}"
                 },
                 "sort":[
                     "dashboard#SaveJson"
                 ]
             },
             {
                 "_index":"grafana-dash",
                 "_type":"dashboard",
                 "_id":"SaveJsonTest2",
                 "_score":null,
                 "_source":{
                     "user":"guest",
                     "group":"guest",
                     "title":"SaveJsonTest2",
                     "tags":[
                         "first tag",
                         "second tag"
                     ],
                     "dashboard":"{\"title\":\"SaveJsonTest2\",\"services\":{\"filter\":{\"list\":[],\"time\":{\"from\":\"now-6h\",\"to\":\"now\"}}},\"rows\":[{\"title\":\"Welcome to Grafana\",\"height\":\"150px\",\"editable\":true,\"collapse\":false,\"collapsable\":true,\"panels\":[{\"error\":false,\"span\":12,\"editable\":true,\"type\":\"text\",\"loadingEditor\":false,\"mode\":\"markdown\",\"content\":\"####Thank you for trying out Grafana! \\n\\nGeneral documentation is found in the readme and in the wiki section of the [Github Project](https://github.com/torkelo/grafana). If you encounter any problem or have an idea for an improvement do not hesitate to open a github issue. \\n\\nTips: \\n\\n- Ctrl+S saves the current dashboard\\n- Ctrl+F Opens the dashboard finder (searches elastic search)\\n- Ctrl+H Hide/show row controls \\n- Click and drag graph title to move panel (only works when row controls are enabled)\\n\\nIf you do not see a graph in the panel bellow the browser cannot access your graphite installation. Please make sure that the graphiteUrl property in config.js is correctly set and accessible.\",\"style\":{},\"title\":\"Welcome to Grafana\"}],\"notice\":false},{\"title\":\"test\",\"height\":\"250px\",\"editable\":true,\"collapse\":false,\"collapsable\":true,\"panels\":[{\"span\":12,\"editable\":true,\"type\":\"graphite\",\"x-axis\":true,\"y-axis\":true,\"scale\":1,\"y_formats\":[\"short\",\"short\"],\"grid\":{\"max\":null,\"min\":0,\"threshold1\":null,\"threshold2\":null,\"threshold1Color\":\"rgba(216, 200, 27, 0.27)\",\"threshold2Color\":\"rgba(234, 112, 112, 0.22)\"},\"resolution\":100,\"lines\":true,\"fill\":1,\"linewidth\":2,\"points\":false,\"pointradius\":5,\"bars\":false,\"stack\":true,\"spyable\":true,\"options\":false,\"legend\":{\"show\":true,\"values\":false,\"min\":false,\"max\":false,\"current\":false,\"total\":false,\"avg\":false},\"interactive\":true,\"legend_counts\":true,\"timezone\":\"browser\",\"percentage\":false,\"zerofill\":true,\"nullPointMode\":\"connected\",\"steppedLine\":false,\"tooltip\":{\"value_type\":\"cumulative\",\"query_as_alias\":true},\"targets\":[{\"target\":\"randomWalk('random walk')\"},{\"target\":\"randomWalk('random walk2')\"},{\"target\":\"randomWalk('random walk3')\"}],\"aliasColors\":{},\"aliasYAxis\":{},\"title\":\"Graphite test\",\"datasource\":null,\"renderer\":\"flot\",\"annotate\":{\"enable\":false}}],\"notice\":false}],\"editable\":true,\"failover\":false,\"panel_hints\":true,\"style\":\"dark\",\"pulldowns\":[{\"type\":\"filtering\",\"collapse\":false,\"notice\":false,\"enable\":false},{\"type\":\"annotations\",\"enable\":false}],\"nav\":[{\"type\":\"timepicker\",\"collapse\":false,\"notice\":false,\"enable\":true,\"status\":\"Stable\",\"time_options\":[\"5m\",\"15m\",\"1h\",\"6h\",\"12h\",\"24h\",\"2d\",\"7d\",\"30d\"],\"refresh_intervals\":[\"5s\",\"10s\",\"30s\",\"1m\",\"5m\",\"15m\",\"30m\",\"1h\",\"2h\",\"1d\"],\"now\":true}],\"loader\":{\"save_gist\":false,\"save_elasticsearch\":true,\"save_local\":true,\"save_default\":true,\"save_temp\":true,\"save_temp_ttl_enable\":true,\"save_temp_ttl\":\"30d\",\"load_gist\":false,\"load_elasticsearch\":true,\"load_elasticsearch_size\":20,\"load_local\":true,\"hide\":false},\"refresh\":false,\"tags\":[\"first tag\",\"second tag\"],\"timezone\":\"browser\",\"hideControls\":false}"
                 },
                 "sort":[
                     "dashboard#SaveJsonTest2"
                 ]
             },
             {
                 "_index":"grafana-dash",
                 "_type":"dashboard",
                 "_id":"SaveTest",
                 "_score":null,
                 "_source":{
                     "user":"guest",
                     "group":"guest",
                     "title":"SaveTest",
                     "tags":[

                     ],
                     "dashboard":"{\"title\":\"SaveTest\",\"services\":{\"filter\":{\"list\":[],\"time\":{\"from\":\"now-6h\",\"to\":\"now\"}}},\"rows\":[{\"title\":\"Welcome to Grafana\",\"height\":\"150px\",\"editable\":true,\"collapse\":false,\"collapsable\":true,\"panels\":[{\"error\":false,\"span\":12,\"editable\":true,\"type\":\"text\",\"loadingEditor\":false,\"mode\":\"markdown\",\"content\":\"####Thank you for trying out Grafana! \\n\\nGeneral documentation is found in the readme and in the wiki section of the [Github Project](https://github.com/torkelo/grafana). If you encounter any problem or have an idea for an improvement do not hesitate to open a github issue. \\n\\nTips: \\n\\n- Ctrl+S saves the current dashboard\\n- Ctrl+F Opens the dashboard finder (searches elastic search)\\n- Ctrl+H Hide/show row controls \\n- Click and drag graph title to move panel (only works when row controls are enabled)\\n\\nIf you do not see a graph in the panel bellow the browser cannot access your graphite installation. Please make sure that the graphiteUrl property in config.js is correctly set and accessible.\",\"style\":{},\"title\":\"Welcome to Grafana\"}],\"notice\":false},{\"title\":\"test\",\"height\":\"250px\",\"editable\":true,\"collapse\":false,\"collapsable\":true,\"panels\":[{\"span\":12,\"editable\":true,\"type\":\"graphite\",\"x-axis\":true,\"y-axis\":true,\"scale\":1,\"y_formats\":[\"short\",\"short\"],\"grid\":{\"max\":null,\"min\":0,\"threshold1\":null,\"threshold2\":null,\"threshold1Color\":\"rgba(216, 200, 27, 0.27)\",\"threshold2Color\":\"rgba(234, 112, 112, 0.22)\"},\"resolution\":100,\"lines\":true,\"fill\":1,\"linewidth\":2,\"points\":false,\"pointradius\":5,\"bars\":false,\"stack\":true,\"spyable\":true,\"options\":false,\"legend\":{\"show\":true,\"values\":false,\"min\":false,\"max\":false,\"current\":false,\"total\":false,\"avg\":false},\"interactive\":true,\"legend_counts\":true,\"timezone\":\"browser\",\"percentage\":false,\"zerofill\":true,\"nullPointMode\":\"connected\",\"steppedLine\":false,\"tooltip\":{\"value_type\":\"cumulative\",\"query_as_alias\":true},\"targets\":[{\"target\":\"randomWalk('random walk')\"},{\"target\":\"randomWalk('random walk2')\"},{\"target\":\"randomWalk('random walk3')\"}],\"aliasColors\":{},\"aliasYAxis\":{},\"title\":\"Graphite test\",\"datasource\":null,\"renderer\":\"flot\",\"annotate\":{\"enable\":false}}],\"notice\":false}],\"editable\":true,\"failover\":false,\"panel_hints\":true,\"style\":\"dark\",\"pulldowns\":[{\"type\":\"filtering\",\"collapse\":false,\"notice\":false,\"enable\":false},{\"type\":\"annotations\",\"enable\":false}],\"nav\":[{\"type\":\"timepicker\",\"collapse\":false,\"notice\":false,\"enable\":true,\"status\":\"Stable\",\"time_options\":[\"5m\",\"15m\",\"1h\",\"6h\",\"12h\",\"24h\",\"2d\",\"7d\",\"30d\"],\"refresh_intervals\":[\"5s\",\"10s\",\"30s\",\"1m\",\"5m\",\"15m\",\"30m\",\"1h\",\"2h\",\"1d\"],\"now\":true}],\"loader\":{\"save_gist\":false,\"save_elasticsearch\":true,\"save_local\":true,\"save_default\":true,\"save_temp\":true,\"save_temp_ttl_enable\":true,\"save_temp_ttl\":\"30d\",\"load_gist\":false,\"load_elasticsearch\":true,\"load_elasticsearch_size\":20,\"load_local\":false,\"hide\":false},\"refresh\":false,\"tags\":[],\"timezone\":\"browser\"}"
                 },
                 "sort":[
                     "dashboard#SaveTest"
                 ]
             },
             {
                 "_index":"grafana-dash",
                 "_type":"dashboard",
                 "_id":"Welcome to Grafana!",
                 "_score":null,
                 "_source":{
                     "user":"guest",
                     "group":"guest",
                     "title":"Welcome to Grafana!",
                     "tags":[

                     ],
                     "dashboard":"{\"title\":\"Welcome to Grafana!\",\"services\":{\"filter\":{\"list\":[],\"time\":{\"from\":\"now-6h\",\"to\":\"now\"}}},\"rows\":[{\"title\":\"Welcome to Grafana\",\"height\":\"150px\",\"editable\":true,\"collapse\":false,\"collapsable\":true,\"panels\":[{\"error\":false,\"span\":12,\"editable\":true,\"type\":\"text\",\"loadingEditor\":false,\"mode\":\"markdown\",\"content\":\"####Thank you for trying out Grafana! \\n\\nGeneral documentation is found in the readme and in the wiki section of the [Github Project](https://github.com/torkelo/grafana). If you encounter any problem or have an idea for an improvement do not hesitate to open a github issue. \\n\\nTips: \\n\\n- Ctrl+S saves the current dashboard\\n- Ctrl+F Opens the dashboard finder (searches elastic search)\\n- Ctrl+H Hide/show row controls \\n- Click and drag graph title to move panel (only works when row controls are enabled)\\n\\nIf you do not see a graph in the panel bellow the browser cannot access your graphite installation. Please make sure that the graphiteUrl property in config.js is correctly set and accessible.\",\"style\":{},\"title\":\"Welcome to Grafana\"}],\"notice\":false},{\"title\":\"test\",\"height\":\"250px\",\"editable\":true,\"collapse\":false,\"collapsable\":true,\"panels\":[{\"span\":12,\"editable\":true,\"type\":\"graphite\",\"x-axis\":true,\"y-axis\":true,\"scale\":1,\"y_formats\":[\"short\",\"short\"],\"grid\":{\"max\":null,\"min\":0,\"threshold1\":null,\"threshold2\":null,\"threshold1Color\":\"rgba(216, 200, 27, 0.27)\",\"threshold2Color\":\"rgba(234, 112, 112, 0.22)\"},\"resolution\":100,\"lines\":true,\"fill\":1,\"linewidth\":2,\"points\":false,\"pointradius\":5,\"bars\":false,\"stack\":true,\"spyable\":true,\"options\":false,\"legend\":{\"show\":true,\"values\":false,\"min\":false,\"max\":false,\"current\":false,\"total\":false,\"avg\":false},\"interactive\":true,\"legend_counts\":true,\"timezone\":\"browser\",\"percentage\":false,\"zerofill\":true,\"nullPointMode\":\"connected\",\"steppedLine\":false,\"tooltip\":{\"value_type\":\"cumulative\",\"query_as_alias\":true},\"targets\":[{\"target\":\"randomWalk('random walk')\"},{\"target\":\"randomWalk('random walk2')\"},{\"target\":\"randomWalk('random walk3')\"}],\"aliasColors\":{},\"aliasYAxis\":{},\"title\":\"Graphite test\",\"datasource\":null,\"renderer\":\"flot\",\"annotate\":{\"enable\":false}}],\"notice\":false}],\"editable\":true,\"failover\":false,\"panel_hints\":true,\"style\":\"dark\",\"pulldowns\":[{\"type\":\"filtering\",\"collapse\":false,\"notice\":false,\"enable\":false},{\"type\":\"annotations\",\"enable\":false}],\"nav\":[{\"type\":\"timepicker\",\"collapse\":false,\"notice\":false,\"enable\":true,\"status\":\"Stable\",\"time_options\":[\"5m\",\"15m\",\"1h\",\"6h\",\"12h\",\"24h\",\"2d\",\"7d\",\"30d\"],\"refresh_intervals\":[\"5s\",\"10s\",\"30s\",\"1m\",\"5m\",\"15m\",\"30m\",\"1h\",\"2h\",\"1d\"],\"now\":true}],\"loader\":{\"save_gist\":false,\"save_elasticsearch\":true,\"save_local\":true,\"save_default\":true,\"save_temp\":true,\"save_temp_ttl_enable\":true,\"save_temp_ttl\":\"30d\",\"load_gist\":false,\"load_elasticsearch\":true,\"load_elasticsearch_size\":20,\"load_local\":false,\"hide\":false},\"refresh\":false,\"tags\":[],\"timezone\":\"browser\"}"
                 },
                 "sort":[
                     "dashboard#Welcome to Grafana!"
                 ]
             },
             {
                 "_index":"grafana-dash",
                 "_type":"dashboard",
                 "_id":"test",
                 "_score":null,
                 "_source":{
                     "user":"guest",
                     "group":"guest",
                     "title":"test",
                     "tags":[
                         "first tag",
                         "second tag"
                     ],
                     "dashboard":"{\"title\":\"test\",\"services\":{\"filter\":{\"list\":[],\"time\":{\"from\":\"now-6h\",\"to\":\"now\"}}},\"rows\":[{\"title\":\"Welcome to Grafana\",\"height\":\"150px\",\"editable\":true,\"collapse\":false,\"collapsable\":true,\"panels\":[{\"error\":false,\"span\":12,\"editable\":true,\"type\":\"text\",\"loadingEditor\":false,\"mode\":\"markdown\",\"content\":\"####Thank you for trying out Grafana! \\n\\nGeneral documentation is found in the readme and in the wiki section of the [Github Project](https://github.com/torkelo/grafana). If you encounter any problem or have an idea for an improvement do not hesitate to open a github issue. \\n\\nTips: \\n\\n- Ctrl+S saves the current dashboard\\n- Ctrl+F Opens the dashboard finder (searches elastic search)\\n- Ctrl+H Hide/show row controls \\n- Click and drag graph title to move panel (only works when row controls are enabled)\\n\\nIf you do not see a graph in the panel bellow the browser cannot access your graphite installation. Please make sure that the graphiteUrl property in config.js is correctly set and accessible.\",\"style\":{},\"title\":\"Welcome to Grafana\"}],\"notice\":false},{\"title\":\"test\",\"height\":\"250px\",\"editable\":true,\"collapse\":false,\"collapsable\":true,\"panels\":[{\"span\":12,\"editable\":true,\"type\":\"graphite\",\"x-axis\":true,\"y-axis\":true,\"scale\":1,\"y_formats\":[\"short\",\"short\"],\"grid\":{\"max\":null,\"min\":0,\"threshold1\":null,\"threshold2\":null,\"threshold1Color\":\"rgba(216, 200, 27, 0.27)\",\"threshold2Color\":\"rgba(234, 112, 112, 0.22)\"},\"resolution\":100,\"lines\":true,\"fill\":1,\"linewidth\":2,\"points\":false,\"pointradius\":5,\"bars\":false,\"stack\":true,\"spyable\":true,\"options\":false,\"legend\":{\"show\":true,\"values\":false,\"min\":false,\"max\":false,\"current\":false,\"total\":false,\"avg\":false},\"interactive\":true,\"legend_counts\":true,\"timezone\":\"browser\",\"percentage\":false,\"zerofill\":true,\"nullPointMode\":\"connected\",\"steppedLine\":false,\"tooltip\":{\"value_type\":\"cumulative\",\"query_as_alias\":true},\"targets\":[{\"target\":\"randomWalk('random walk')\"},{\"target\":\"randomWalk('random walk2')\"},{\"target\":\"randomWalk('random walk3')\"}],\"aliasColors\":{},\"aliasYAxis\":{},\"title\":\"Graphite test\",\"datasource\":null,\"renderer\":\"flot\",\"annotate\":{\"enable\":false}}],\"notice\":false}],\"editable\":true,\"failover\":false,\"panel_hints\":true,\"style\":\"dark\",\"pulldowns\":[{\"type\":\"filtering\",\"collapse\":false,\"notice\":false,\"enable\":false},{\"type\":\"annotations\",\"enable\":false}],\"nav\":[{\"type\":\"timepicker\",\"collapse\":false,\"notice\":false,\"enable\":true,\"status\":\"Stable\",\"time_options\":[\"5m\",\"15m\",\"1h\",\"6h\",\"12h\",\"24h\",\"2d\",\"7d\",\"30d\"],\"refresh_intervals\":[\"5s\",\"10s\",\"30s\",\"1m\",\"5m\",\"15m\",\"30m\",\"1h\",\"2h\",\"1d\"],\"now\":true}],\"loader\":{\"save_gist\":false,\"save_elasticsearch\":true,\"save_local\":true,\"save_default\":true,\"save_temp\":true,\"save_temp_ttl_enable\":true,\"save_temp_ttl\":\"30d\",\"load_gist\":false,\"load_elasticsearch\":true,\"load_elasticsearch_size\":20,\"load_local\":false,\"hide\":false},\"refresh\":false,\"tags\":[\"first tag\",\"second tag\"],\"timezone\":\"browser\"}"
                 },
                 "sort":[
                     "dashboard#test"
                 ]
             }
         ]
     },
     "facets":{
         "tags":{
             "_type":"terms",
             "missing":2,
             "total":9,
             "other":0,
             "terms":[
                 {
                     "term":"first",
                     "count":3
                 },
                 {
                     "term":"second",
                     "count":3
                 },
                 {
                     "term":"tag",
                     "count":3
                 }
             ]
         }
     }
 }
/**
 * TAGS SEARCH
 *
 * POST /grafana-dash/dashboard/_search HTTP/1.1
 */
/*
    POST http://localhost:9200/grafana-dash/dashboard/_search HTTP/1.1
    Host: localhost:9200
    Connection: keep-alive
    Content-Length: 141
    Accept: application/json, text/plain, *//*
    Origin: http://localhost:63342
    User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.131 Safari/537.36
    Content-Type: application/json;charset=UTF-8
    DNT: 1
    Referer: http://localhost:63342/grafana-git/src/index.html
    Accept-Encoding: gzip,deflate,sdch
    Accept-Language: en-US,en;q=0.8,sr;q=0.6,sh;q=0.4,hr;q=0.2
 */
request = {
    "query":{
        "query_string":{
            "query":"tags:*"
        }
    },
    "sort":[
        "_uid"
    ],
    "facets":{
        "tags":{
            "terms":{
                "field":"tags",
                "order":"term",
                "size":50
            }
        }
    },
    "size":20
}
/**
 *   RESPONSE
 */
/*
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=UTF-8
Content-Length: 10830
 */
response = {
    "took":18,
    "timed_out":false,
    "_shards":{
        "total":5,
        "successful":5,
        "failed":0
    },
    "hits":{
        "total":3,
        "max_score":null,
        "hits":[
            {
                "_index":"grafana-dash",
                "_type":"dashboard",
                "_id":"SaveJson",
                "_score":null,
                "_source":{
                    "user":"guest",
                    "group":"guest",
                    "title":"SaveJson",
                    "tags":[
                        "first tag",
                        "second tag"
                    ],
                    "dashboard":"{\"title\":\"SaveJson\",\"services\":{\"filter\":{\"list\":[],\"time\":{\"from\":\"now-6h\",\"to\":\"now\"}}},\"rows\":[{\"title\":\"Welcome to Grafana\",\"height\":\"150px\",\"editable\":true,\"collapse\":false,\"collapsable\":true,\"panels\":[{\"error\":false,\"span\":12,\"editable\":true,\"type\":\"text\",\"loadingEditor\":false,\"mode\":\"markdown\",\"content\":\"####Thank you for trying out Grafana! \\n\\nGeneral documentation is found in the readme and in the wiki section of the [Github Project](https://github.com/torkelo/grafana). If you encounter any problem or have an idea for an improvement do not hesitate to open a github issue. \\n\\nTips: \\n\\n- Ctrl+S saves the current dashboard\\n- Ctrl+F Opens the dashboard finder (searches elastic search)\\n- Ctrl+H Hide/show row controls \\n- Click and drag graph title to move panel (only works when row controls are enabled)\\n\\nIf you do not see a graph in the panel bellow the browser cannot access your graphite installation. Please make sure that the graphiteUrl property in config.js is correctly set and accessible.\",\"style\":{},\"title\":\"Welcome to Grafana\"}],\"notice\":false},{\"title\":\"test\",\"height\":\"250px\",\"editable\":true,\"collapse\":false,\"collapsable\":true,\"panels\":[{\"span\":12,\"editable\":true,\"type\":\"graphite\",\"x-axis\":true,\"y-axis\":true,\"scale\":1,\"y_formats\":[\"short\",\"short\"],\"grid\":{\"max\":null,\"min\":0,\"threshold1\":null,\"threshold2\":null,\"threshold1Color\":\"rgba(216, 200, 27, 0.27)\",\"threshold2Color\":\"rgba(234, 112, 112, 0.22)\"},\"resolution\":100,\"lines\":true,\"fill\":1,\"linewidth\":2,\"points\":false,\"pointradius\":5,\"bars\":false,\"stack\":true,\"spyable\":true,\"options\":false,\"legend\":{\"show\":true,\"values\":false,\"min\":false,\"max\":false,\"current\":false,\"total\":false,\"avg\":false},\"interactive\":true,\"legend_counts\":true,\"timezone\":\"browser\",\"percentage\":false,\"zerofill\":true,\"nullPointMode\":\"connected\",\"steppedLine\":false,\"tooltip\":{\"value_type\":\"cumulative\",\"query_as_alias\":true},\"targets\":[{\"target\":\"randomWalk('random walk')\"},{\"target\":\"randomWalk('random walk2')\"},{\"target\":\"randomWalk('random walk3')\"}],\"aliasColors\":{},\"aliasYAxis\":{},\"title\":\"Graphite test\",\"datasource\":null,\"renderer\":\"flot\",\"annotate\":{\"enable\":false}}],\"notice\":false}],\"editable\":true,\"failover\":false,\"panel_hints\":true,\"style\":\"dark\",\"pulldowns\":[{\"type\":\"filtering\",\"collapse\":false,\"notice\":false,\"enable\":false},{\"type\":\"annotations\",\"enable\":false}],\"nav\":[{\"type\":\"timepicker\",\"collapse\":false,\"notice\":false,\"enable\":true,\"status\":\"Stable\",\"time_options\":[\"5m\",\"15m\",\"1h\",\"6h\",\"12h\",\"24h\",\"2d\",\"7d\",\"30d\"],\"refresh_intervals\":[\"5s\",\"10s\",\"30s\",\"1m\",\"5m\",\"15m\",\"30m\",\"1h\",\"2h\",\"1d\"],\"now\":true}],\"loader\":{\"save_gist\":false,\"save_elasticsearch\":true,\"save_local\":true,\"save_default\":true,\"save_temp\":true,\"save_temp_ttl_enable\":true,\"save_temp_ttl\":\"30d\",\"load_gist\":false,\"load_elasticsearch\":true,\"load_elasticsearch_size\":20,\"load_local\":false,\"hide\":false},\"refresh\":false,\"tags\":[\"first tag\",\"second tag\"],\"timezone\":\"browser\"}"
                },
                "sort":[
                    "dashboard#SaveJson"
                ]
            },
            {
                "_index":"grafana-dash",
                "_type":"dashboard",
                "_id":"SaveJsonTest2",
                "_score":null,
                "_source":{
                    "user":"guest",
                    "group":"guest",
                    "title":"SaveJsonTest2",
                    "tags":[
                        "first tag",
                        "second tag"
                    ],
                    "dashboard":"{\"title\":\"SaveJsonTest2\",\"services\":{\"filter\":{\"list\":[],\"time\":{\"from\":\"now-6h\",\"to\":\"now\"}}},\"rows\":[{\"title\":\"Welcome to Grafana\",\"height\":\"150px\",\"editable\":true,\"collapse\":false,\"collapsable\":true,\"panels\":[{\"error\":false,\"span\":12,\"editable\":true,\"type\":\"text\",\"loadingEditor\":false,\"mode\":\"markdown\",\"content\":\"####Thank you for trying out Grafana! \\n\\nGeneral documentation is found in the readme and in the wiki section of the [Github Project](https://github.com/torkelo/grafana). If you encounter any problem or have an idea for an improvement do not hesitate to open a github issue. \\n\\nTips: \\n\\n- Ctrl+S saves the current dashboard\\n- Ctrl+F Opens the dashboard finder (searches elastic search)\\n- Ctrl+H Hide/show row controls \\n- Click and drag graph title to move panel (only works when row controls are enabled)\\n\\nIf you do not see a graph in the panel bellow the browser cannot access your graphite installation. Please make sure that the graphiteUrl property in config.js is correctly set and accessible.\",\"style\":{},\"title\":\"Welcome to Grafana\"}],\"notice\":false},{\"title\":\"test\",\"height\":\"250px\",\"editable\":true,\"collapse\":false,\"collapsable\":true,\"panels\":[{\"span\":12,\"editable\":true,\"type\":\"graphite\",\"x-axis\":true,\"y-axis\":true,\"scale\":1,\"y_formats\":[\"short\",\"short\"],\"grid\":{\"max\":null,\"min\":0,\"threshold1\":null,\"threshold2\":null,\"threshold1Color\":\"rgba(216, 200, 27, 0.27)\",\"threshold2Color\":\"rgba(234, 112, 112, 0.22)\"},\"resolution\":100,\"lines\":true,\"fill\":1,\"linewidth\":2,\"points\":false,\"pointradius\":5,\"bars\":false,\"stack\":true,\"spyable\":true,\"options\":false,\"legend\":{\"show\":true,\"values\":false,\"min\":false,\"max\":false,\"current\":false,\"total\":false,\"avg\":false},\"interactive\":true,\"legend_counts\":true,\"timezone\":\"browser\",\"percentage\":false,\"zerofill\":true,\"nullPointMode\":\"connected\",\"steppedLine\":false,\"tooltip\":{\"value_type\":\"cumulative\",\"query_as_alias\":true},\"targets\":[{\"target\":\"randomWalk('random walk')\"},{\"target\":\"randomWalk('random walk2')\"},{\"target\":\"randomWalk('random walk3')\"}],\"aliasColors\":{},\"aliasYAxis\":{},\"title\":\"Graphite test\",\"datasource\":null,\"renderer\":\"flot\",\"annotate\":{\"enable\":false}}],\"notice\":false}],\"editable\":true,\"failover\":false,\"panel_hints\":true,\"style\":\"dark\",\"pulldowns\":[{\"type\":\"filtering\",\"collapse\":false,\"notice\":false,\"enable\":false},{\"type\":\"annotations\",\"enable\":false}],\"nav\":[{\"type\":\"timepicker\",\"collapse\":false,\"notice\":false,\"enable\":true,\"status\":\"Stable\",\"time_options\":[\"5m\",\"15m\",\"1h\",\"6h\",\"12h\",\"24h\",\"2d\",\"7d\",\"30d\"],\"refresh_intervals\":[\"5s\",\"10s\",\"30s\",\"1m\",\"5m\",\"15m\",\"30m\",\"1h\",\"2h\",\"1d\"],\"now\":true}],\"loader\":{\"save_gist\":false,\"save_elasticsearch\":true,\"save_local\":true,\"save_default\":true,\"save_temp\":true,\"save_temp_ttl_enable\":true,\"save_temp_ttl\":\"30d\",\"load_gist\":false,\"load_elasticsearch\":true,\"load_elasticsearch_size\":20,\"load_local\":true,\"hide\":false},\"refresh\":false,\"tags\":[\"first tag\",\"second tag\"],\"timezone\":\"browser\",\"hideControls\":false}"
                },
                "sort":[
                    "dashboard#SaveJsonTest2"
                ]
            },
            {
                "_index":"grafana-dash",
                "_type":"dashboard",
                "_id":"test",
                "_score":null,
                "_source":{
                    "user":"guest",
                    "group":"guest",
                    "title":"test",
                    "tags":[
                        "first tag",
                        "second tag"
                    ],
                    "dashboard":"{\"title\":\"test\",\"services\":{\"filter\":{\"list\":[],\"time\":{\"from\":\"now-6h\",\"to\":\"now\"}}},\"rows\":[{\"title\":\"Welcome to Grafana\",\"height\":\"150px\",\"editable\":true,\"collapse\":false,\"collapsable\":true,\"panels\":[{\"error\":false,\"span\":12,\"editable\":true,\"type\":\"text\",\"loadingEditor\":false,\"mode\":\"markdown\",\"content\":\"####Thank you for trying out Grafana! \\n\\nGeneral documentation is found in the readme and in the wiki section of the [Github Project](https://github.com/torkelo/grafana). If you encounter any problem or have an idea for an improvement do not hesitate to open a github issue. \\n\\nTips: \\n\\n- Ctrl+S saves the current dashboard\\n- Ctrl+F Opens the dashboard finder (searches elastic search)\\n- Ctrl+H Hide/show row controls \\n- Click and drag graph title to move panel (only works when row controls are enabled)\\n\\nIf you do not see a graph in the panel bellow the browser cannot access your graphite installation. Please make sure that the graphiteUrl property in config.js is correctly set and accessible.\",\"style\":{},\"title\":\"Welcome to Grafana\"}],\"notice\":false},{\"title\":\"test\",\"height\":\"250px\",\"editable\":true,\"collapse\":false,\"collapsable\":true,\"panels\":[{\"span\":12,\"editable\":true,\"type\":\"graphite\",\"x-axis\":true,\"y-axis\":true,\"scale\":1,\"y_formats\":[\"short\",\"short\"],\"grid\":{\"max\":null,\"min\":0,\"threshold1\":null,\"threshold2\":null,\"threshold1Color\":\"rgba(216, 200, 27, 0.27)\",\"threshold2Color\":\"rgba(234, 112, 112, 0.22)\"},\"resolution\":100,\"lines\":true,\"fill\":1,\"linewidth\":2,\"points\":false,\"pointradius\":5,\"bars\":false,\"stack\":true,\"spyable\":true,\"options\":false,\"legend\":{\"show\":true,\"values\":false,\"min\":false,\"max\":false,\"current\":false,\"total\":false,\"avg\":false},\"interactive\":true,\"legend_counts\":true,\"timezone\":\"browser\",\"percentage\":false,\"zerofill\":true,\"nullPointMode\":\"connected\",\"steppedLine\":false,\"tooltip\":{\"value_type\":\"cumulative\",\"query_as_alias\":true},\"targets\":[{\"target\":\"randomWalk('random walk')\"},{\"target\":\"randomWalk('random walk2')\"},{\"target\":\"randomWalk('random walk3')\"}],\"aliasColors\":{},\"aliasYAxis\":{},\"title\":\"Graphite test\",\"datasource\":null,\"renderer\":\"flot\",\"annotate\":{\"enable\":false}}],\"notice\":false}],\"editable\":true,\"failover\":false,\"panel_hints\":true,\"style\":\"dark\",\"pulldowns\":[{\"type\":\"filtering\",\"collapse\":false,\"notice\":false,\"enable\":false},{\"type\":\"annotations\",\"enable\":false}],\"nav\":[{\"type\":\"timepicker\",\"collapse\":false,\"notice\":false,\"enable\":true,\"status\":\"Stable\",\"time_options\":[\"5m\",\"15m\",\"1h\",\"6h\",\"12h\",\"24h\",\"2d\",\"7d\",\"30d\"],\"refresh_intervals\":[\"5s\",\"10s\",\"30s\",\"1m\",\"5m\",\"15m\",\"30m\",\"1h\",\"2h\",\"1d\"],\"now\":true}],\"loader\":{\"save_gist\":false,\"save_elasticsearch\":true,\"save_local\":true,\"save_default\":true,\"save_temp\":true,\"save_temp_ttl_enable\":true,\"save_temp_ttl\":\"30d\",\"load_gist\":false,\"load_elasticsearch\":true,\"load_elasticsearch_size\":20,\"load_local\":false,\"hide\":false},\"refresh\":false,\"tags\":[\"first tag\",\"second tag\"],\"timezone\":\"browser\"}"
                },
                "sort":[
                    "dashboard#test"
                ]
            }
        ]
    },
    "facets":{
        "tags":{
            "_type":"terms",
            "missing":0,
            "total":9,
            "other":0,
            "terms":[
                {
                    "term":"first",
                    "count":3
                },
                {
                    "term":"second",
                    "count":3
                },
                {
                    "term":"tag",
                    "count":3
                }
            ]
        }
    }
}



/* jshint ignore:end */

