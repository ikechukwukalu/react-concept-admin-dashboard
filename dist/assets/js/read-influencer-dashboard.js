var fs = require("fs");
var os = require("os");

var externalJavascriptFiles = [
    'plugins/vendor/jquery/jquery-3.3.1.min.js',
    'plugins/vendor/bootstrap/js/bootstrap.bundle.js',
    'plugins/vendor/slimscroll/jquery.slimscroll.js',
    'plugins/libs/js/main-js.js',
    'plugins/vendor/charts/morris-bundle/raphael.min.js',
    'plugins/vendor/charts/morris-bundle/morris.js',
    'plugins/vendor/charts/morris-bundle/morrisjs.js',
    'plugins/vendor/charts/charts-bundle/chart.bundle.js',
    'plugins/vendor/charts/charts-bundle/chartjs.js',
    'plugins/libs/js/dashboard-influencer.js'
]

console.log(externalJavascriptFiles.length + " number of file(s).");

fs.writeFile("vendors-influencer-dashboard.js", "", (err) => {
    if (err) console.log(err);
    console.log("Emptied vendors-influencer-dashboard.js file.");
});

externalJavascriptFiles.map((element, index) => {
    fs.readFile(element, "utf-8", (err, data) => {
        if (err) { console.log(err) }
        setTimeout(() => {
            fs.appendFile('vendors-influencer-dashboard.js', data.toString() + os.EOL, function (err) {
                if (err) { console.log("Failed: "+ element); }
                console.log(element +" written to file.");
            });
        }, 500);
    });
});
