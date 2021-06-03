const sistemaOperativo = require("os")

const user = sistemaOperativo.userInfo()

console.log(user)

//otras funcionalidades

console.log(`Segundos = ${sistemaOperativo.uptime()}`)

const curremtOs = {

	name: sistemaOperativo.type(),
	release: sistemaOperativo.release(),
	totalMem: sistemaOperativo.totalmem(),
	freeMem: sistemaOperativo.freemem(),
	
}

console.log(curremtOs)