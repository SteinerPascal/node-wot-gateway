export default {
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "title": "noir-camera",
    "id": "urn:uuid:cf6464b1-89fe-40e1-a4d2-951fd675NDVR",
    "description": "This is a Rasberry Pi NoIR camera v. 1.3. It is used to cread Normalized Difference Vegetation Index (NDVI) images. They can be used to detect plant health.",
    "securityDefinitions": {
      "nosec_sc": {
        "scheme": "nosec"
      }
    },
    "security": "nosec_sc",
    "properties": {
      "lastImage": {
        "title": "lastImage",
        "observable": false,
        "readOnly": true,
        "description": "Returns the last image made by the takeImage actuation",

        "forms": [
          {
            "op": [
              "readproperty"
            ],
            "href": "http://localhost:8081/lastimage"
          }
        ]
      },
      "imageHistory": {
        "title": "imageHistory",
        "observable": false,
        "readOnly": true,
        "description": "Read the last 5 images of this camera",
        "forms": [
          {
            "op": [
              "readproperty"
            ],
            "href": "http://192.168.8.100:8081/imageHistory"
          }
        ]
      }
    },
    "actions": {
      "takeImage": {
        "title": "takeImage",
        "description": "takes a picture with infrared NoIR camera, converts it to a NDVI image and returns it.",
        "forms": [
          {
            "op": [
              "invokeaction"
            ],
            "href": "http://192.168.8.100:8081/takeImage"
          }
        ]
      }
    },
    "events": {}
  }