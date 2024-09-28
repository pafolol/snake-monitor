# Snake Terrarium Monitor

This project is designed with three main components: the client (frontend), the Raspberry Pi (video sender), and the server (video receiver). It allows you to remotely monitor your snake's terrarium with a live video feed, while also controlling environmental factors such as humidity, temperature, and lighting.

How It Works

Camera Setup: Attach any compatible camera to the Raspberry Pi.
Video Stream: Run the following command to stream video using FFmpeg:

```
ffmpeg -f v4l2 -i /dev/video0 -c:v libx264 -preset ultrafast -tune zerolatency -maxrate 1000k -bufsize 2000k -pix_fmt yuv420p -g 50 -f flv rtmp://194.195.92.106/live/pythor1234
```


Note: The IP address and stream key in the example doesn´t work anymore and need to be replaced with your actual server details. The provided example will not work without a proper setup.

Server Configuration: The video is sent to the server configured with Nginx and FFmpeg to handle live stream transmission. The server retransmits the video to any client that connects to the webpage, without requiring any complex router configuration like port forwarding your router.

Latency: The live stream operates with approximately a 10-second delay, which is acceptable for monitoring purposes.

# Hardware Components

Raspberry Pi: Responsible for capturing and streaming live video from the terrarium.
ESP8266:
Reads and sends real-time humidity and temperature data from the terrarium.
Controls LED lights within the terrarium.
Maintains optimal humidity levels using a nebulizer to ensure the snake's habitat remains comfortable.
Requirements

Raspberry Pi with a camera attached.
ESP8266 for controlling environmental aspects (DHT11 sensor) .
Nginx and FFmpeg on the server to handle the video stream.
Frontend Client to view the stream and control terrarium functions.



# Notes

This project was created just for the purpose of monitoring my snake Pythor, i will try to update and upload the server side code like nginx configuration so anyone can create a snake monitor like this or tweak it to monitor anything
