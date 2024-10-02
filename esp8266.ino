#include <ArduinoWebsockets.h>
#include <ESP8266WiFi.h>

  
using namespace websockets;

const char* ssid = "ssid"; // SSID
const char* password = "12345678";

int a = 0;


WebsocketsClient webSocket;

  

void setup() {

  pinMode(LED_BUILTIN, OUTPUT);

  Serial.begin(9600);


  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {

    `delay(1000);`

    `Serial.println("Conectando a WiFi...");`

  }

  Serial.println("Conectado a Wi-Fi.");
  webSocket.onMessage(onMessageCallback);
  webSocket.connect("ws://192.168.1.80:8080"); 

  Serial.println("CONECTADO");

  webSocket.send("Hola desde ESP8266");

}


void onMessageCallback(WebsocketsMessage message) {

  Serial.print("Mensaje recibido: ");
  Serial.println(message.data());
  String msg = message.data();
  msg = " ";

  }

void loop() {

  webSocket.poll();

  delay(100);

}
