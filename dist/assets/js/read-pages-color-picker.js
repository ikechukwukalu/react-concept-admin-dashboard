var fs = require("fs");
var os = require("os");

var externalJavascriptFiles = [
    'plugins/vendor/jquery/jquery-3.3.1.min.js',
    'plugins/vendor/bootstrap/js/bootstrap.bundle.js',
    'plugins/vendor/slimscroll/jquery.slimscroll.js',
    'plugins/libs/js/main-js.js',
    'plugins/vendor/bootstrap-colorpicker/jquery-asColor/dist/jquery-asColor.min.js',
    'plugins/vendor/bootstrap-colorpicker/jquery-asGradient/dist/jquery-asGradient.js',
    'plugins/vendor/bootstrap-colorpicker/jquery-asColorPicker/dist/jquery-asColorPicker.min.js',
    'plugins/vendor/bootstrap-colorpicker/claviska/jquery-minicolors/jquery.minicolors.min.js'
]

console.log(externalJavascriptFiles.length + " number of file(s).");

fs.writeFile("vendors-pages-color-picker.js", "", (err) => {
    if (err) console.log(err);
    console.log("Emptied vendors-pages-color-picker.js file.");
});

externalJavascriptFiles.map((element, index) => {
    fs.readFile(element, "utf-8", (err, data) => {
        if (err) { console.log(err) }
        setTimeout(() => {
            fs.appendFile('vendors-pages-color-picker.js', data.toString() + os.EOL, function (err) {
                if (err) { console.log("Failed: "+ element); }
                console.log(element +" written to file.");
            });
        }, 500);
    });
});
