
var model = require("../model.js");
var json_helper = require("../json.js");

exports.get = function(req,res) {
    if (!req.query.identifier) {
        json_helper.sendJSON(res, {"error":"Too few params"});
        return;
    }

    model.get_system(req.query.identifier, function(system) {
        var response = {"system_name":system.system_name,
            "wallpaper":system.wallpaper};
        json_helper.sendJSON(res, response);
    });
}
