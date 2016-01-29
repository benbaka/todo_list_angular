module.exports = function(app){

    app.get('/', function(req, res){
        res.render('index');
    })

    app.get("/hello.text", function(req,res){
        res.send("Hola !");
    })

    app.get("/contact", function(req, res){
        res.render("contact");
    })

    app.get("/say-hello", function(req, res){
        res.render("hello")
    })

    app.get("/test", function(req, res){
        res.send("This is a test")
    })
}