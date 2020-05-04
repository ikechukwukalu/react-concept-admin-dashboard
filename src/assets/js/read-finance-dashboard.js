var fs = require("fs");
var os = require("os");

var externalJavascriptFiles = [
    'plugins/vendor/jquery/jquery-3.3.1.min.js',
    'plugins/vendor/bootstrap/js/bootstrap.bundle.js',
    'plugins/vendor/slimscroll/jquery.slimscroll.js',
    'plugins/vendor/charts/chartist-bundle/chartist.min.js',
    'plugins/vendor/charts/chartist-bundle/chartistjs.js',
    'plugins/vendor/charts/chartist-bundle/chartist-plugin-threshold.js',
    'plugins/vendor/charts/c3charts/c3.min.js',
    'plugins/vendor/charts/c3charts/d3-5.4.0.min.js',
    'plugins/vendor/charts/charts-bundle/chart.bundle.js',
    'plugins/vendor/charts/charts-bundle/chartjs.js',
    'plugins/vendor/charts/sparkline/jquery.sparkline.js',
    'plugins/libs/js/dashboard-finance.js',
    'plugins/libs/js/main-js.js',
    'plugins/vendor/gauge/gauge.min.js',
    'plugins/vendor/charts/morris-bundle/raphael.min.js',
    'plugins/vendor/charts/morris-bundle/morris.js',
    'plugins/vendor/charts/morris-bundle/morrisjs.js',
    'plugins/vendor/charts/c3charts/C3chartjs.js'
]

console.log(externalJavascriptFiles.length + " number of file(s).");

fs.writeFile("vendors-finance-dashboard.js", "", (err) => {
    if (err) console.log(err);
    console.log("Emptied vendors-finance-dashboard.js file.");
});

externalJavascriptFiles.map((element, index) => {
    fs.readFile(element, "utf-8", (err, data) => {
        if (err) { console.log(err) }
        setTimeout(() => {
            fs.appendFile('vendors-finance-dashboard.js', data.toString() + os.EOL, function (err) {
                if (err) { console.log("Failed: "+ element); }
                console.log(element +" written to file.");
            });
        }, 500);
    });
});

var externalJavascriptUrls = [
    'https://cdn.jsdelivr.net/momentjs/latest/moment.min.js',
    'https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js'
]

console.log(externalJavascriptUrls.length + " number of Url(s).");

const getScript = (url) => {
    return new Promise((resolve, reject) => {
        const http      = require('http'),
            https     = require('https');

        let client = http;

        if (url.toString().indexOf("https") === 0) {
            client = https;
        }

        client.get(url, (resp) => {
            let data = '';

            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                resolve(
                    setTimeout(() => {
                        fs.appendFile('vendors.js', data.toString() + os.EOL, function (err) {
                            if (err) { console.log(err) }
                            console.log(url +" written to file.");
                        });
                    }, 500)
                );
            });

        }).on("error", (err) => {
            reject(err);
        });
    });
};

externalJavascriptUrls.map((element, index) => {
    (async (url) => {
        try {
            console.log(await getScript(url));
        }
        catch (error) {
    
        }
    })(element);
});