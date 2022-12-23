import {ThingDescription} from "wot-thing-description-types";
export default {
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "title": "MyLoraSensor",
    "id": "urn:9bc923-0a63-4922-ae1a-eb832f06fe1b",
    "securityDefinitions": {
      "nosec_sc": {
        "scheme": "nosec"
      }
    },
    "security": "nosec_sc",
    "properties": {
      "roomtemp": {
        "title": "roomtemp",
        "data":{"type": "object"},
        "forms": [
          {
            "op": [
              "observeproperty",
              "unobserveproperty"
            ],
            "href": "lora://868mhz/device/1/humidity",
            "subprotocol": "pascallora" 
          }
        ]
      }
    },
    "actions": {},
    "events": {}
  } as ThingDescription