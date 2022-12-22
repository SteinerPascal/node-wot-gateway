import { Servient} from '@node-wot/core'

import lorasense from './things/lorasense/lorasense'

import { LoraClientFactory } from "@node-wot/binding-lora"

console.log(`*** CLIENT ONLY ***`)
const servient = new Servient();
servient.addClientFactory(new LoraClientFactory())

servient.start().then((WoT) => {
    console.log('consuming')
    WoT.consume(lorasense).then(async thing=>{
        console.log(`consumedThing: ${thing.getThingDescription().title}`)
        thing.subscribeEvent("roomtemp", async (data) => {
            // Here we are simply logging the message when the event is emitted
            // But, of course, could have a much more sophisticated handler
            console.log("outOfResource event:",await data.value());
        });
        function counter() {
            console.log('count')
            let count = 0
            setInterval(() => {
              count++;
              //console.log(count)
            }, 1000)
          }
        counter()
        //console.log(`Result is ${await res.value()}`)
    })
});
