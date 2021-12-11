let ip = 'localhost';
let port = 3000;
let ws = new WebSocket(`ws://${ip}:${port}`)

var message = "Hi"
var msg = "SFASF"
ws.onopen = () => {
    console.log('open connection')
	var config = {
		type:'message',
		message:message
	}
	config[message] = msg
	ws.send(JSON.stringify(config))
}

ws.onclose = () => {
    console.log('close connection')
}


//接收 Server 發送的訊息
ws.onmessage = event => {
	var config = JSON.parse(event.data);
    console.log(config)
	switch(config.type)
	{
		case 'message':
		{
			document.getElementById("Text").textContent += config.message;
		}break;
	}
}