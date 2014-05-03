
var crypto = require("crypto");
var model = require("../model");
var json_helper = require("../json.js");

exports.post = function(req,res) {

    if (!req.body.system_name || !req.body.username) {
        var response = {"error":"Too few params"};
        json_helper.sendJSON(res, response);
        return;
    }

    var base_string = req.body.system_name + "_" +
        req.body.username +
        (new Date().getTime());
    var identifier = crypto.createHash('md5').update(base_string).digest("hex");

    var system = model.add_system(req.body.username,
        req.body.system_name,
        req.body.wallpaper,
        identifier);

    var response = {"identifier": identifier};
    json_helper.sendJSON(res, response);
}
