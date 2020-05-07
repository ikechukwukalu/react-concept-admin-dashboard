var fs = require("fs");
var os = require("os");

var externalJavascriptFiles = [
    'plugins/vendor/jquery/jquery-3.3.1.min.js',
    'plugins/vendor/bootstrap/js/bootstrap.bundle.js',
    'plugins/vendor/slimscroll/jquery.slimscroll.js',
    'plugins/vendor/gauge/gauge.min.js',
    'plugins/vendor/gauge/gauge.js',
    'plugins/libs/js/main-js.js'
]

console.log(externalJavascriptFiles.length + " number of file(s).");

fs.writeFile("vendors-chart-gauge.js", "", (err) => {
    if (err) console.log(err);
    console.log("Emptied vendors-chart-gauge.js file.");
});

externalJavascriptFiles.map((element, index) => {
    fs.readFile(element, "utf-8", (err, data) => {
        if (err) { console.log(err) }
        setTimeout(() => {
            fs.appendFile('vendors-chart-gauge.js', data.toString() + os.EOL, function (err) {
                if (err) { console.log("Failed: "+ element); }
                console.log(element +" written to file.");
            });
        }, 500);
    });
});
