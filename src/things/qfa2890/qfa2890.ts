import * as WoT from "wot-typescript-definitions";

/*
    SERVIENT
*/
const addQfaServientAffordances = async (exposedThing:WoT.ExposedThing,consumedThing:WoT.ConsumedThing)=>{

    exposedThing.setPropertyReadHandler("rts-temproom",async ()=>{
        const res = await consumedThing.readProperty('rts-temproom')
        return res
    })

    exposedThing.setPropertyReadHandler("rrhs-humrelroom",async ()=>{
        const res = await consumedThing.readProperty('rrhs-humrelroom')
        return res
    })

    exposedThing.expose().then(()=>{
        console.log(`Thing ${exposedThing.getThingDescription().title} is exposed`)
    })
}

export default addQfaServientAffordances