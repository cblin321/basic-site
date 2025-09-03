let http = require("http")
let fs = require("fs")


const routes = {
    "/": "/index.html",
    "/about": "/about.html",
    "/contact-me": "/contact-me.html",
    "/404": "/404.html"
}

http.createServer((req, res) => {
    let path = "./routes"
    let url = routes[req.url]
    
    path += routes[req.url] || routes["/404"]

    fs.readFile(path, (err, data) => {
        res.statusCode = 200
        if (err) {
            path = "./routes/404.html"
            data = fs.readFileSync(path)
            res.statusCode = 404
        }
        res.end(data)
    })
}).listen(8080)

