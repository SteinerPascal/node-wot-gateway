export default {
    "@context": [
      "https://www.w3.org/2019/wot/td/v1",
      {
        "sosa": "http://www.w3.org/ns/sosa/",
        "ex": "http://twin-example/geneva#",
        "irrig": "http://www.w3id.org/def/irrig#"
      },
      {
        "@language": "en"
      }
    ],
    "@type": "irrig:Irrigator",
    "title": "Irrigator",
    "securityDefinitions": {
      "nosec_sc": {
        "scheme": "nosec"
      }
    },
    "security": [
      "nosec_sc"
    ],
    "properties": {
      "healthy": {
        "title": "healthy",
        "observable": true,
        "readOnly": true,
        "description": "showing wether this device is ready to for ActionAffordances",
        "type": "boolean",
        "forms": [
          {
            "op": [
              "readproperty",
              "observeproperty",
              "unobserveproperty"
            ],
            "href": "http://localhost/rpi:8080"
          }
        ]
      },
      "waterlevel": {
        "title": "waterlevel",
        "@type": "sosa:waterlevel",
        "observable": false,
        "readOnly": true,
        "description": "shows the current waterlevel",
        "type": "number",
        "forms": [
          {
            "op": [
              "readproperty"
            ],
            "href": "http://localhost/rpi"
          }
        ]
      }
    },
    "actions": {
      "irrigatePlant": {
        "@type":"irrig:IrrigationActuation",
        "title": "irrigatePlant",
        "description": "Triggers ActionAffordance for irrigation. ",
        "forms": [
          {
            "op": [
              "invokeaction"
            ],
            "href": "http://localhost/rpi"
          }
        ]
      }
    },
    "events": {
      "outOfWater": {
        "title": "outOfWater",
        "description": "If the water tank is running low on water, then it notifies the subscribers",
        "forms": [
          {
            "op": [
              "subscribeevent",
              "unsubscribeevent"
            ],
            "href": "http://localhost/rpi"
          }
        ]
      }
    },
    "id": "urn:uuid:cf6464b1-89fe-40e1-a4d2-951fd67599IR",
    "description": "Irrigator: Actuator to irrigate a certain area.",
    "support": "https://github.com/eclipse/thingweb.node-wot/",
    "forms": [
      {
        "href": "http://someurl/rpi/all",
        "contentType": "application/json",
        "op": [
          "readallproperties"
        ]
      }
    ]
  }