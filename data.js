var APP_DATA = {
  "scenes": [
    {
      "id": "0-myp-clasroom",
      "name": "myp clasroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5525770065168523,
          "pitch": 0.1807608875826041,
          "rotation": 0,
          "target": "1-pyp-clasroom-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-pyp-clasroom-",
      "name": "pyp clasroom ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8542921429626844,
          "pitch": 0.0012765836607009362,
          "rotation": 0,
          "target": "0-myp-clasroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5448233720730133,
          "pitch": -0.254447103338876,
          "title": "Glass Window",
          "text": "xyz"
        },
        {
          "yaw": 1.559824917689804,
          "pitch": -0.14144168936402224,
          "title": "vertical slidding borad",
          "text": "sliding board&nbsp;"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
