
exports.sendJSON = function(res,json) {
    var response_str = JSON.stringify(json);
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Content-Length", response_str.length);
    res.end(response_str);
}
