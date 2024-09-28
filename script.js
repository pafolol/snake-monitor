const ws = new WebSocket('ws://localhost:8080'); // cambiar por url del servidor 

ws.onopen = () => {
    console.log('Conectado al servidor');
};

document.getElementById('activateSprinklers').addEventListener('click', () => {
    ws.send('RACTIVATE');
    console.log('Mensaje enviado: RACTIVATE');
});

document.getElementById('turnOnPlate').addEventListener('click', () => {
    ws.send('ON');
    console.log('Mensaje enviado: ON');
});

document.getElementById('turnOffPlate').addEventListener('click', () => {
    ws.send('OFF');
    console.log('Mensaje enviado: OFF');
});
document.getElementById('turnOnLED').addEventListener('click', () => {
    ws.send('LON');
    console.log('Mensaje enviado: ON');
});

document.getElementById('turnOffLED').addEventListener('click', () => {
    ws.send('LOFF');
    console.log('Mensaje enviado: OFF');
});

ws.onerror = (event) => {
    console.error('WebSocket error:', event);
};

document.getElementById('setLedColor').addEventListener('click', function() {
    const colorPicker = document.getElementById('ledColor');
    const colorValue = colorPicker.value;
    
    // Convertir el valor hexadecimal a componentes RGB
    const r = parseInt(colorValue.substr(1,2), 16);
    const g = parseInt(colorValue.substr(3,2), 16);
    const b = parseInt(colorValue.substr(5,2), 16);
    

    const rgbString = `${r} ${g} ${b}`;
    ws.send(rgbString);
    
    console.log(`Enviando color RGB: ${r}, ${g}, ${b}`);
});

ws.onmessage = (event) => {
    const message = event.data;
    console.log("Mensaje recibido: ", message);
    
    if (message.startsWith("ESPT:")) {
        const temp = message.split(":")[1];
        document.getElementById("tempValue").textContent = temp;
        if(temp > 30){
            //logica para mandar notificacion a mi telefono
        }
    } else if (message.startsWith("ESPH:")) {
        const humidity = message.split(":")[1];
        document.getElementById("humidityValue").textContent = humidity;
    }
    
};
