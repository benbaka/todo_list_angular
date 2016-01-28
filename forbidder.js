module.exports = function(forbidden_day){
    var days=['Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'
    ];

    return function(req, res, next){
        var day = new Date().getDay();

        if (days[day] === forbidden_day){
            res.send("No visitors allowed on " + forbidden_day + "s!");
        }
        else{
            next();
        }
    }
};