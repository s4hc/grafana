define([
  'underscore',
  'crypto',
],
function (_, crypto) {
  "use strict";

  return function Settings (options) {
    /**
     * To add a setting, you MUST define a default. Also,
     * THESE ARE ONLY DEFAULTS.
     * They are overridden by config.js in the root directory
     * @type {Object}
     */
    var defaults = {
      elasticsearch                 : "http://"+window.location.host+"/elasticsearch",
      datasources                   : {
        default: {
          type: 'graphite',
          url: "http://"+window.location.host+"/graphite",
          default: true,
          //S4HC AJ: configurable render method from config.js
          render_method: options.render_method
        }
      },
      panel_names                   : [],
      default_route                 : '/dashboard/file/default.json',
      grafana_index                 : 'grafana-dash',
      elasticsearch_all_disabled    : false,
      timezoneOffset                : null,
      unsaved_changes_warning       : true
    };

    // This initializes a new hash on purpose, to avoid adding parameters to
    // config.js without providing sane defaults
    var settings = {};
    _.each(defaults, function(value, key) {
      settings[key] = typeof options[key] !== 'undefined' ? options[key]  : defaults[key];
    });

    var parseBasicAuth = function(datasource) {
      var passwordEnd = datasource.url.indexOf('@');
      if (passwordEnd > 0) {
        var userStart = datasource.url.indexOf('//') + 2;
        var userAndPassword = datasource.url.substring(userStart, passwordEnd);
        var bytes = crypto.charenc.Binary.stringToBytes(userAndPassword);
        datasource.basicAuth = crypto.util.bytesToBase64(bytes);

        var urlHead = datasource.url.substring(0, userStart);
        datasource.url = urlHead + datasource.url.substring(passwordEnd + 1);
      }

      return datasource;
    };

    var parseMultipleHosts = function(datasource) {
      datasource.urls = _.map(datasource.url.split(","), function (url) { return url.trim(); });
      return datasource;
    };

    /**
     * S4HC AJ: Update defaults from GridMetrics server
     *
     *
    $.ajax({
      url     : "restConfig.json",
      async   : false
    })
      .done(function( json ) {
        settings.elasticsearch = json.elasticsearch;
        settings.datasources = {
          graphite: {
            type: 'graphite',
            url: json.graphiteUrl,
            //S4HC AJ: configurable render method from config.js
            render_method: options.render_method,
            default: true
          }
        };
      })
      .fail(function( jqxhr, textStatus, error ) {
        var err = textStatus + ", " + error;
        console.log( "GridMetrics defaults not loaded: " + err );
      });
     */
    if (options.graphiteUrl) {
      settings.datasources = {
        graphite: {
          type: 'graphite',
          url: options.graphiteUrl,
          //S4HC AJ: configurable render method from config.js
          render_method: options.render_method,
          default: true
        }
      };
    }

    // S4HC AJ: Config.js overrides GridMetrics defaults
    if (options.elasticsearch) {
      settings.elasticsearch = options.elasticsearch;
    }
    _.each(settings.datasources, function(datasource, key) {
      datasource.name = key;
      parseBasicAuth(datasource);
      if (datasource.type === 'influxdb') { parseMultipleHosts(datasource); }
    });

    var elasticParsed = parseBasicAuth({ url: settings.elasticsearch });
    settings.elasticsearchBasicAuth = elasticParsed.basicAuth;
    settings.elasticsearch = elasticParsed.url;

    return settings;
  };
});
