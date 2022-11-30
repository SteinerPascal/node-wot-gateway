export default {
  "@context": "https://www.w3.org/2019/wot/td/v1",
  "title": "QFA2890/W",
  "id": "urn:uuid:cf6464b1-89fe-40e1-a4d2-951fd6QFA2890/W",
  "description": "Siemens multisense rechable via thread broder router",
  "securityDefinitions": {
    "nosec_sc": {
      "scheme": "nosec"
    }
  },
  "security": "nosec_sc",
  "properties": {
    "rts-temproom": {
      "title": "rts-temproom",
      "observable": true,
      "readOnly": true,
      "description": "dpa.321.51 dpt.valueTemp",
      "type": "number",
      "forms": [
        {
          "op": [
            "readproperty",
            "observeproperty"
          ],
          "href": "http://192.168.4.36/p/rts/temproom"
        }
      ]
    },
    "rts-tempcorrvalue": {
      "title": "rts-tempcorrvalue",
      "observable": true,
      "readOnly": true,
      "description": "dpa.321.111 dpt.valueTemp",
      "type": "number",
      "forms": [
        {
          "op": [
            "readproperty",
            "observeproperty"
          ],
          "href": "http://192.168.4.36/p/rts/tempcorrvalue"
        }
      ]
    },
    "rrhs-humrelroom": {
      "title": "rrhs-humrelroom",
      "observable": true,
      "readOnly": true,
      "description": "dpa.337.51 dpt.valueHumidity",
      "type": "number",
      "forms": [
        {
          "op": [
            "readproperty",
            "observeproperty"
          ],
          "href": "http://192.168.4.36/p/rrhs/humrelroom"
        }
      ]
    },
    "rrhs-humrelcorrvalue": {
      "title": "rrhs-humrelcorrvalue",
      "observable": true,
      "readOnly": true,
      "description": "dpt.valueHumidity dpa.337.111",
      "forms": [
        {
          "op": [
            "readproperty",
            "observeproperty"
          ],
          "href": "http://192.168.4.36/p/rrhs/humrelcorrvalue"
        }
      ]
    },
    "dev-fwv": {
      "title": "dev-fwv",
      "observable": false,
      "readOnly": true,
      "description": "dpa.0.25 dpt.version",
      "type": "array",
      "forms": [
        {
          "op": [
            "readproperty",
            "observeproperty"
          ],
          "href": "http://192.168.4.36/dev/fwv"
        }
      ]
    },
    "dev-model": {
      "title": "dev-model",
      "observable": false,
      "readOnly": true,
      "description": "dpt.utf8 dpa.0.15",
      "type": "string",
      "forms": [
        {
          "op": [
            "readproperty",
            "observeproperty"
          ],
          "href": "http://192.168.4.36/dev/model"
        }
      ]
    },
    "dev-sn": {
      "title": "dev-sn",
      "observable": false,
      "readOnly": true,
      "description": "dpa.0.11 dpt.serNum",
      "type": "string",
      "forms": [
        {
          "op": [
            "readproperty",
            "observeproperty"
          ],
          "href": "http://192.168.4.36/dev/sn"
        }
      ]
    },
    "dev-pm": {
      "title": "dev-pm",
      "observable": false,
      "readOnly": true,
      "description": "dpa.0.54 dpt.binaryValue",
      "type": "boolean",
      "forms": [
        {
          "op": [
            "readproperty",
            "observeproperty"
          ],
          "href": "http://192.168.4.36/dev/pm"
        }
      ]
    },
    "dev-typeid": {
      "title": "dev-typeid",
      "observable": false,
      "readOnly": true,
      "description": "dpa.0.246 dpt.utf8",
      "type": "string",
      "forms": [
        {
          "op": [
            "readproperty",
            "observeproperty"
          ],
          "href": "http://192.168.4.36/dev/typeid"
        }
      ]
    },
    "sdev-batterylevel": {
      "title": "sdev-batterylevel",
      "observable": false,
      "readOnly": true,
      "description": "dpt.percentU8",
      "type": "number",
      "forms": [
        {
          "op": [
            "readproperty",
            "observeproperty"
          ],
          "href": "http://192.168.4.36/p/sdev/batterylevel"
        }
      ]
    },
    "sdev-batterylow": {
      "title": "sdev-batterylow",
      "observable": true,
      "readOnly": true,
      "description": "dpt.binaryValue",
      "type": "boolean",
      "forms": [
        {
          "op": [
            "readproperty",
            "observeproperty"
          ],
          "href": "http://192.168.4.36/p/sdev/batterylow"
        }
      ]
    },
    "sdev-batteryuptime": {
      "title": "sdev-batteryuptime",
      "observable": false,
      "readOnly": true,
      "description": "dpt.timePeriodHrs",
      "type": "number",
      "forms": [
        {
          "op": [
            "readproperty",
            "observeproperty"
          ],
          "href": "http://192.168.4.36/p/sdev/batteryuptime"
        }
      ]
    },
    "sdev/wakeupcycle": {
      "title": "sdev/wakeupcycle",
      "observable": false,
      "readOnly": true,
      "description": "dpt.timePeriodSec",
      "type": "number",
      "forms": [
        {
          "op": [
            "readproperty",
            "observeproperty"
          ],
          "href": "http://192.168.4.36/p/sdev/wakeupcycle"
        }
      ]
    },
    "extdev-name": {
      "title": "extdev-name",
      "observable": false,
      "readOnly": true,
      "description": "dpa.50100.84 dpt.utf8",
      "type": "string",
      "forms": [
        {
          "op": [
            "readproperty",
            "observeproperty"
          ],
          "href": "http://192.168.4.36/p/extdev/name"
        }
      ]
    },
    "extdev-euid64": {
      "title": "extdev-euid64",
      "observable": false,
      "readOnly": true,
      "description": "dpt.eui64",
      "type": "string",
      "forms": [
        {
          "op": [
            "readproperty",
            "observeproperty"
          ],
          "href": "http://192.168.4.36/p/extdev/eui64"
        }
      ]
    },
    "extdev-hwv": {
      "title": "extdev-hwv",
      "observable": false,
      "readOnly": true,
      "description": "dpt.version",
      "type": "number",
      "forms": [
        {
          "op": [
            "readproperty",
            "observeproperty"
          ],
          "href": "http://192.168.4.36/p/extdev/hwv"
        }
      ]
    },
    "extdev/ophours": {
      "title": "extdev/ophours",
      "observable": false,
      "readOnly": true,
      "description": "dpt.longDeltaTimeSec",
      "type": "number",
      "forms": [
        {
          "op": [
            "readproperty",
            "observeproperty"
          ],
          "href": "http://192.168.4.36/p/extdev/ophours"
        }
      ]
    },
    "extdev-ledenable": {
      "title": "extdev-ledenable",
      "observable": false,
      "readOnly": false,
      "description": "dpt.binaryValue - LED enable",
      "type": "number",
      "forms": [
        {
          "op": [
            "readproperty",
            "observeproperty"
          ],
          "href": "http://192.168.4.36/p/extdev/ledenable"
        }
      ]
    },
    "extdev-selfheatCalibration": {
      "title": "extdev-selfheatCalibration",
      "observable": false,
      "readOnly": false,
      "description": "dpt.binaryValue",
      "type": "boolean",
      "forms": [
        {
          "op": [
            "readproperty",
            "observeproperty"
          ],
          "href": "http://192.168.4.36/p/extdev/selfheatCalibration"
        }
      ]
    }
  },
  "actions": {},
  "events": {
    "lowbattery": {
      "title": "lowbattery",
      "description": "subscribers get notified when device reaches lowbattery level",
      "forms": [
        {
          "op": [
            "subscribeevent"
          ],
          "href": "coap://fd02:1555:fa32:1:f0c6:2460:4a3b:2f3b"
        }
      ]
    }
  }
}