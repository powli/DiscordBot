/**
 * Created by powl on 04.01.2017.
 */
var fs = require('fs');
var basename = path.basename(module.filename);
var plugins = [];
fs.readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(function (file) {
        var model = path.join(__dirname, file);
        plugins[model.name] = model;
    });

module.exports = plugins;