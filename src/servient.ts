// server.js
// Required steps to create a servient for creating a thing
import {Servient} from '@node-wot/core'
import { HttpServer } from '@node-wot/binding-http';
import qfaTdHttp from './things/qfa2890/qfa2890-http'
import qfaTdCoap from'./things/qfa2890/qfa2890-coap'
import addQfaAffordances from './things/qfa2890/AddQfaServientAffordances';
import { CoapClientFactory } from '@node-wot/binding-coap';

console.log(`*** SERVIENT ***`)
const servient = new Servient();
servient.addServer(new HttpServer({port:8081}));
servient.addClientFactory(new CoapClientFactory())

servient.start().then(async (WoT) => {
    const exposedThing = await WoT.produce(qfaTdHttp)
    console.log(`exposedThing: ${exposedThing.getThingDescription().title} via HTTP`)
    const consumedThing = await WoT.consume(qfaTdCoap)
    console.log(`consumedThing: ${consumedThing.getThingDescription().title} via COAP`)

    addQfaAffordances(exposedThing,consumedThing)

});