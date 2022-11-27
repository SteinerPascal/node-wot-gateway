// server.js
// Required steps to create a servient for creating a thing
import {Servient} from '@node-wot/core'
import { HttpServer } from '@node-wot/binding-http';
import fs from 'fs'
import addNoirAffordances from './things/noir/noir-affordances';


const servient = new Servient();
servient.addServer(new HttpServer());
let irrigatorTd
fs.readFile('./things/noir/noir.jsonld', 'utf8', (err, data) => {
    if (err) throw err;
    irrigatorTd = JSON.parse(data)
});

servient.start().then((WoT) => {
    addNoirAffordances(WoT,irrigatorTd)
});