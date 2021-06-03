const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === "/")
		res.end("Bienvenido a mi pagina web")
	else if(req.url ==="/about")
		res.end("Acerca de")

	res.end()
	
})

server.listen(5000)