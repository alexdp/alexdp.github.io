var APP_DATA = {
  "scenes": [
    {
      "id": "0-entre-du-parc",
      "name": "Entrée du parc",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": 2.3208574665859114,
        "pitch": -0.05687277760281617,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": 2.2575307413741754,
          "pitch": 0.024799697155685863,
          "rotation": 0,
          "target": "1-le-crne-dhalloween"
        },
        {
          "yaw": 0.09835995619901183,
          "pitch": 0.0369738218469049,
          "rotation": 0,
          "target": "3-rue-du-lac"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-le-crne-dhalloween",
      "name": "Le crâne d'Halloween",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": 3.012356068425234,
        "pitch": 0.111840725333753,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": -2.8519192707762198,
          "pitch": 0.017336918673843016,
          "rotation": 0,
          "target": "0-entre-du-parc"
        },
        {
          "yaw": 0.43564687789645085,
          "pitch": -0.04325614391447097,
          "rotation": 0,
          "target": "4-rue-commerante"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-spectacle-de-dauphins-",
      "name": "Spectacle de dauphins ",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": -2.3737921071528074,
        "pitch": 0.16454749639040855,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": -2.6201246729477763,
          "pitch": -0.10948334640795743,
          "rotation": 0,
          "target": "4-rue-commerante"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-rue-du-lac",
      "name": "Rue du lac",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": 2.5374114554157483,
        "pitch": 0.3078049479836018,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": -3.093939342479324,
          "pitch": -0.0810172201648438,
          "rotation": 0,
          "target": "2-spectacle-de-dauphins-"
        },
        {
          "yaw": 0.8077478886122336,
          "pitch": -0.00489034526977683,
          "rotation": 0,
          "target": "0-entre-du-parc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-rue-commerante",
      "name": "Rue commerçante",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": 0.0020819036803132462,
        "pitch": 0.21252645548840654,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": -1.126876938514215,
          "pitch": 0.023802783291358764,
          "rotation": 0,
          "target": "5-dans-le-magasin"
        },
        {
          "yaw": 2.5806819059927895,
          "pitch": -0.05493094759669859,
          "rotation": 0,
          "target": "2-spectacle-de-dauphins-"
        },
        {
          "yaw": 0.15190505287863232,
          "pitch": -0.09758727253345967,
          "rotation": 0,
          "target": "0-entre-du-parc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dans-le-magasin",
      "name": "Dans le magasin",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": 2.7702958230348056,
        "pitch": 0.3590475268328497,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": 1.7948338563979434,
          "pitch": 0.08028078579388875,
          "rotation": 0,
          "target": "4-rue-commerante"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8541082410867027,
          "pitch": 0.06732532492001653,
          "title": "Info magasin",
          "text": "Lulu a fait très très fort<div>et a réussi à ressortir du</div><div>magasin avec un sac Idefix</div><div>deux fois plus cher que les</div><div>cadeaux de ses soeurs</div>"
        }
      ]
    }
  ],
  "name": "Parc Astérix Halloween 2017",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
