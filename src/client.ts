// server.js
// Required steps to create a servient for creating a thing
import {Servient} from '@node-wot/core'
import qfaTdCoap from'./things/qfa2890/qfa2890-coap'
import { CoapClientFactory } from '@node-wot/binding-coap';

console.log(`starting CLIENT ONLY`)
const servient = new Servient();
servient.addClientFactory(new CoapClientFactory())

servient.start().then((WoT) => {
    WoT.consume(qfaTdCoap).then(async thing=>{
        console.log(`consumedThing: ${thing.getThingDescription().title}`)
        console.log(`Reading: RTS`)
        const res = await thing.readProperty('rts-temproom')
        console.log(`Result is ${await res.value()}`)
    })
});