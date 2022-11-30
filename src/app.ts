// server.js
// Required steps to create a servient for creating a thing
import {Servient} from '@node-wot/core'
import { HttpServer } from '@node-wot/binding-http';
import qfaTd from './things/qfa2890/qfa2890-http'
import addQfaAffordances from './things/qfa2890/qfa2890';

const servient = new Servient();
servient.addServer(new HttpServer());


servient.start().then((WoT) => {
    addQfaAffordances(WoT,qfaTd)
});