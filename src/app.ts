// server.js
// Required steps to create a servient for creating a thing
import {Servient} from '@node-wot/core'
import { HttpServer } from '@node-wot/binding-http';
import fs from 'fs'


const servient = new Servient();
servient.addServer(new HttpServer());
let irrigatorTd
fs.readFile('./.jsonid', 'utf8', (err, data) => {
    if (err) throw err;
    irrigatorTd = JSON.parse(data)
});


servient.start().then((WoT) => {
    WoT.produce(irrigatorTd)
    .then((thing)=>{
        console.log(`Produced thing: ${JSON.stringify(thing.getThingDescription())}`)

        thing.setPropertyReadHandler("healthy",async (value)=>{
            return true
        })

        thing.setPropertyReadHandler("waterlevel",async (value)=>{
            return 0.8
        })

        thing.setActionHandler("irrigatePlant",async (value)=>{
            return 0
        })

    })
});