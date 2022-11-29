// server.js
// Required steps to create a servient for creating a thing
import {Servient} from '@node-wot/core'
import { HttpServer } from '@node-wot/binding-http';
import addNoirAffordances from './things/noir/noir-affordances';
import noirTd from './things/noir/noir'

const servient = new Servient();
servient.addServer(new HttpServer({port: 8081}));


servient.start().then((WoT) => {
    addNoirAffordances(WoT,noirTd)
});