import {Helpers, Servient} from '@node-wot/core'

import qfa2890Coap from './things/qfa2890/qfa2890-coap';
import { CoapClientFactory } from '@node-wot/binding-coap';
import { HttpClientFactory } from '@node-wot/binding-http';

console.log(`*** CLIENT ONLY ***`)
const servient = new Servient();
servient.addClientFactory(new HttpClientFactory())
servient.addClientFactory(new CoapClientFactory())
const WoTHelpers = new Helpers(servient);

WoTHelpers.fetch("http://localhost:8081/qfa2890w").then(async (td) => {
    try {
        servient.start().then(async (WoT) => {
            WoT.consume(td as WoT.ThingDescription).then(async thing=>{
                console.log(`consumedThing: ${thing.getThingDescription().title}`)
                console.log(`Reading: RTS`)
                const res = await thing.readProperty('rts-temproom')
                console.log(`Result is ${await res.value()}`)
            })
        });
    }
    catch (err) {
        console.error("Script error:", err);
    }
}).catch((err) => { console.error("Fetch error:", err); });

/*
servient.start().then((WoT) => {
    WoT.consume(qfa2890Coap).then(async thing=>{
        console.log(`consumedThing: ${thing.getThingDescription().title}`)
        console.log(`Reading: RTS`)
        const res = await thing.readProperty('rts-temproom')
        console.log(`Result is ${await res.value()}`)
    })
});
*/