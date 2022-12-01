// server.js
// Required steps to create a servient for creating a thing
import {Servient} from '@node-wot/core'
import qfaTdCoap from'./things/qfa2890/qfa2890-coap'
import { CoapClientFactory } from '@node-wot/binding-coap';


const servient = new Servient();
servient.addClientFactory(new CoapClientFactory())

servient.start().then(async (WoT) => {
    WoT.consume(qfaTdCoap).then(thing=>{
        console.log(`consumedThing: ${thing.getThingDescription().title}`)
        console.log(`Reading: RTS`)
        thing.readProperty('rts-tempcorrvalue')
    })
});