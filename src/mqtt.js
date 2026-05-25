// src/mqtt.js
import mqtt from 'mqtt'

const MQTT_BROKER_URL = 'ws://localhost:8084/mqtt'
const MQTT_TOPIC = '/mqtt/testtopic'

export function initMQTT(onMessageCallback) {
  const client = mqtt.connect(MQTT_BROKER_URL, {
    username: 'minapp',
    password: 'minapp123',
    clientId: 'webapp_' + Math.random().toString(16).substr(2, 8)
  })

  client.on('connect', () => {
    console.log('MQTT connected')
    client.subscribe(MQTT_TOPIC, (err) => {
      if (!err) {
        console.log('Subscribed to:', MQTT_TOPIC)
      }
    })
  })

  client.on('message', (topic, message) => {
    console.log('Received:', topic, message.toString())
    if (onMessageCallback) {
      onMessageCallback(JSON.parse(message.toString()))
    }
  })

  client.on('error', (err) => {
    console.error('MQTT error:', err)
  })

  return client
}