import * as WoT from "wot-typescript-definitions";
import PiCamera from 'pi-camera';
const addNoirAffordances = (Wot: typeof WoT,irrigTd:any)=>{
    Wot.produce(irrigTd)
    .then((thing)=>{
        const imageHistory = []

        console.log(`Thing Description: ${JSON.stringify(thing.getThingDescription())}`)

        thing.setPropertyReadHandler("lastImage",async (value)=>{
            console.log('getLastImage')
            return true
        })

        thing.setPropertyReadHandler("imageHistory",async (value)=>{
            return 0.8
        })

        thing.setActionHandler("takeImage",async (value)=>{
            console.log('taking image')
            const myCamera = new PiCamera({
                mode: 'photo',
                output: `${ __dirname }/images/test.jpg`,
                width: 640,
                height: 480,
                nopreview: true,
              });

            try{
                const image = await myCamera.snapDataUrl()
                imageHistory.push(image)
                return image
            } catch(e:any){
                return e
            }
        })
        // expose the thing
        thing.expose().then(() => {
            console.info(thing.getThingDescription().title + " ready");
        });

    })
   
}
export default addNoirAffordances