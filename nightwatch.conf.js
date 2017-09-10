{
  "src_folders" : ["nw/tests"],
  "output_folder" : "nw/reports",
  "globals_path" : "nightwatch.globals.js",
  "test_workers": {
    "enabled": true,
    "workers": "auto"
  },
  "selenium" : {
    "start_process" : true,
    "server_path" : "./node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.50.1.jar",
    "log_path" : "nw/logs",
    "host" : "127.0.0.1",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "./node_modules/chromedriver/bin/chromedriver",
      "webdriver.ie.driver" : ""
    }
  },
  "test_settings" : {
    "default" : {
      "launch_url" : "http://google.com",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : true,
        "path" : ""
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },
    "french" : {
      "launch_url" : "http://google.fr",
      "desiredCapabilities": {
        "browserName": "firefox",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    }
  }
}
