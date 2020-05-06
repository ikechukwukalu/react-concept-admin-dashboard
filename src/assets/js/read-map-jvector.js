var fs = require("fs");
var os = require("os");

var externalJavascriptFiles = [
    'plugins/vendor/jquery/jquery-3.3.1.min.js',
    'plugins/vendor/bootstrap/js/bootstrap.bundle.js',
    'plugins/vendor/slimscroll/jquery.slimscroll.js',
    'plugins/libs/js/main-js.js',
    'plugins/libs/js/gmaps.min.js',
    'plugins/vendor/jvectormap/jquery-jvectormap-2.0.2.min.js',
    'plugins/vendor/jvectormap/jquery-jvectormap-world-mill-en.js',
    'plugins/vendor/jvectormap/jquery-jvectormap-in-mill.js',
    'plugins/vendor/jvectormap/jquery-jvectormap-us-aea-en.js',
    'plugins/vendor/jvectormap/jquery-jvectormap-uk-mill-en.js',
    'plugins/vendor/jvectormap/jquery-jvectormap-au-mill.js',
    'plugins/libs/js/jvectormap.custom.js'
]

console.log(externalJavascriptFiles.length + " number of file(s).");

fs.writeFile("vendors-map-jvector.js", "", (err) => {
    if (err) console.log(err);
    console.log("Emptied vendors-map-jvector.js file.");
});

externalJavascriptFiles.map((element, index) => {
    fs.readFile(element, "utf-8", (err, data) => {
        if (err) { console.log(err) }
        setTimeout(() => {
            fs.appendFile('vendors-map-jvector.js', data.toString() + os.EOL, function (err) {
                if (err) { console.log("Failed: "+ element); }
                console.log(element +" written to file.");
            });
        }, 500);
    });
});
