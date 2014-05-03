
var model = require("../model.js");
var json_helper = require("../json.js");

exports.get = function(req,res) {
    if (!req.query.identifier) {
        var response = {"error":"Too few params"};
        json_helper.sendJSON(res, response);
        return;
    }

    model.get_system(req.query.identifier, function(system) {
        var response = {"system_name": system.system_name};
        json_helper.sendJSON(res, response);
    });
}
