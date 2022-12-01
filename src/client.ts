import {Servient} from '@node-wot/core'
import qfaTdHttp from'./things/qfa2890/qfa2890-http'
import { CoapClientFactory } from '@node-wot/binding-coap';
import { HttpClientFactory } from '@node-wot/binding-http';

console.log(`*** CLIENT ONLY ***`)
const servient = new Servient();
servient.addClientFactory(new HttpClientFactory())
servient.addClientFactory(new CoapClientFactory())

servient.start().then((WoT) => {
    WoT.consume(qfaTdHttp).then(async thing=>{
        console.log(`consumedThing: ${thing.getThingDescription().title}`)
        console.log(`Reading: RTS`)
        const res = await thing.readProperty('rts-temproom')
        console.log(`Result is ${await res.value()}`)
    })
});