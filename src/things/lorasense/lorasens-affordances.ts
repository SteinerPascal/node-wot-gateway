import * as WoT from "wot-typescript-definitions";

const addLoraSenseAffordances = (Wot: typeof WoT,loraTd:any)=>{
    Wot.produce(loraTd)
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
}
export default addLoraSenseAffordances