// Router

var endpoints = [{"url":"/register/", "file":"register.js", "method": "POST"},
    {"url":"/system/","file":"system.js","method": "GET"},
    {"url":"/wallpaper/current/", "file":"wallpaper_current.js", "method":"GET"},
    {"url":"/wallpaper/set/", "file":"wallpaper_set.js", "method":"POST"}];

exports.route = function(app,db_) {

    var length = endpoints.length,
        element = null;

    db = db_;

    for (var i = 0; i < length; i++) {
        endpoint = endpoints[i]; 

        var endpoint_obj = require("./views/" + endpoint.file);

        if (endpoint.method == "GET") {
            app.get(endpoint.url, endpoint_obj.get);
        }

        if (endpoint.method == "POST") {
            app.post(endpoint.url, endpoint_obj.post);
        }

    }

};
