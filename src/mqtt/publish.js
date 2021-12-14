const mqtt = require("mqtt");

const host = "localhost";
const port = "1883";
const topic = 'mqtt/'

const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

const connectUrl = `mqtt://${host}:${port}`;

const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: 'usrExemplo',
  password: 'passExemplo',
  reconnectPeriod: 1000,
});

client.on("connect", () => {
  client.publish(
    topic,
    "testando rapeize",
    { qos: 0, retain: true },
    (error) => {
      if (error) {
        console.error(error);
      }
    }
  );
});
