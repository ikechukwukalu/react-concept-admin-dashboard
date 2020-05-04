var fs = require("fs");
var os = require("os");

var externalJavascriptFiles = [
    'plugins/vendor/jquery/jquery-3.3.1.min.js',
    'plugins/vendor/bootstrap/js/bootstrap.bundle.js',
    'plugins/vendor/slimscroll/jquery.slimscroll.js',
    'plugins/libs/js/main-js.js',
    'plugins/vendor/charts/chartist-bundle/chartist.min.js',
    'plugins/vendor/charts/sparkline/jquery.sparkline.js',
    'plugins/vendor/charts/morris-bundle/raphael.min.js',
    'plugins/vendor/charts/morris-bundle/morris.js',
    'plugins/vendor/charts/c3charts/c3.min.js',
    'plugins/vendor/charts/c3charts/d3-5.4.0.min.js',
    'plugins/vendor/charts/c3charts/C3chartjs.js',
    'plugins/libs/js/dashboard-ecommerce.js'
]

console.log(externalJavascriptFiles.length + " number of file(s).");

fs.writeFile("vendors-ecommerce-dashboard.js", "", (err) => {
    if (err) console.log(err);
    console.log("Emptied vendors-ecommerce-dashboard.js file.");
});

externalJavascriptFiles.map((element, index) => {
    fs.readFile(element, "utf-8", (err, data) => {
        if (err) { console.log(err) }
        setTimeout(() => {
            fs.appendFile('vendors-ecommerce-dashboard.js', data.toString() + os.EOL, function (err) {
                if (err) { console.log(err) }
                console.log(element +" written to file.");
            });
        }, 500);
    });
});