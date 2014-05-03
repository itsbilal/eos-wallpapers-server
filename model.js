
var MongoClient = require('mongodb').MongoClient;

function DB(func) {

    MongoClient.connect("mongodb://localhost/elementary_wallpaper",
        function(err,deb) {
            if (!err) {
                func(deb);
            } else {
                console.log(err);
            }
    });
}

exports.add_system = function(username, system_name, wallpaper, identifier) {
    db.collection('systems', function(err, collection) {
        if (err) {
            console.log(err);
            return;
        } 

        var new_system = {"username":username,
            "system_name":system_name,
            "wallpaper":wallpaper,
            "identifier":identifier};

        collection.insert(new_system, function(err,inserted){
            if (err) {console.log(err);}
        });
    });

};

exports.set_wallpaper = function(ident, wallp, callback) {
    db.collection('systems', function(err, collection) {
        if (err) {
            console.log(err);
            return;
        }

        collection.update({"identifier":ident},
            {$set:{"wallpaper":wallp}}, function(err, count) {
                if (!err && count)
                    callback();
        });
    });

};

exports.get_system = function(ident, callback) {
    db.collection('systems', function(err, collection) {
        if (err) {
            console.log(err);
            return;
        }

        collection.findOne({"identifier":ident}, function(err,thing) {
            if (!err) {
                callback (thing);
            } // TODO: Error handling
        });
    });
};

exports.DB = DB;
