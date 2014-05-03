
var model = require("../model.js");
var json_helper = require("../json.js");

exports.post = function(req,res) {
    if (!req.body.identifier || !req.body.wallpaper) {
        var response = {"error":"Too few params"};
        json_helper.sendJSON(res,response);
        return;
    }

    model.set_wallpaper(req.body.identifier,
        req.body.wallpaper,
        function() {
            json_helper.sendJSON(res, {"success":1});
    });
}
