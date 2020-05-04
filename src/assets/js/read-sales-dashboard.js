var fs = require("fs");
var os = require("os");

var externalJavascriptFiles = [
    'plugins/vendor/jquery/jquery-3.3.1.min.js',
    'plugins/vendor/bootstrap/js/bootstrap.bundle.js',
    'plugins/vendor/slimscroll/jquery.slimscroll.js',
    'plugins/vendor/charts/charts-bundle/chart.bundle.js',
    'plugins/vendor/charts/charts-bundle/chartjs.js',
    'plugins/libs/js/main-js.js',
    'plugins/vendor/jvectormap/jquery-jvectormap-2.0.2.min.js',
    'plugins/vendor/jvectormap/jquery-jvectormap-world-mill-en.js',
    'plugins/vendor/charts/sparkline/jquery.sparkline.js',
    'plugins/vendor/charts/sparkline/spark-js.js',
    'plugins/libs/js/dashboard-sales.js'
]

console.log(externalJavascriptFiles.length + " number of file(s).");

fs.writeFile("vendors-sales-dashboard.js", "", (err) => {
    if (err) console.log(err);
    console.log("Emptied vendors-sales-dashboard.js file.");
});

externalJavascriptFiles.map((element, index) => {
    fs.readFile(element, "utf-8", (err, data) => {
        if (err) { console.log(err) }
        setTimeout(() => {
            fs.appendFile('vendors-sales-dashboard.js', data.toString() + os.EOL, function (err) {
                if (err) { console.log("Failed: "+ element); }
                console.log(element +" written to file.");
            });
        }, 500);
    });
});
