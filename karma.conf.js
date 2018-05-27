// Karma configuration
// Generated on Sat May 26 2018 12:20:40 GMT+0800 (CST)

module.exports = function (config) {
    config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: "",

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ["mocha", "chai"],

        // list of files / patterns to load in the browser
        files: [
            "src/**/*.js",
            "test/**/**/*.js"
        ],

        // list of files to exclude
        exclude: [
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            "src/**/*.js": ["webpack"],
            "test/**/**/*.js": ["webpack"]
        },

        plugins: [
            "karma-webpack",
            "karma-mocha",
            "karma-chrome-launcher",
            "karma-phantomjs-launcher",
            "karma-coverage",
            "karma-chai"
        ],

        webpack: require("./build/webpack.test.conf"),
        webpackMiddleware: {
            noInfo: true
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ["progress", "coverage"],

        coverageReporter: {
            // type : 'html',
            dir: "dist/coverage/",
            reporters: [
                {type: "html", subdir: "report-html"},
                {type: "lcovonly", subdir: "report-lcovonly.txt"},
                {type: "text-summary", subdir: "text-summary.txt"}
            ]
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ["PhantomJS"],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
};
