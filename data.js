var APP_DATA = {
  "scenes": [
    {
      "id": "0-garage",
      "name": "Garage",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.822542879722695,
        "pitch": 0.0852664330180275,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": -0.8217331016015397,
          "pitch": 0.16835332355580945,
          "rotation": 0,
          "target": "1-street"
        },
        {
          "yaw": -2.227952963047887,
          "pitch": -0.023031579708863603,
          "rotation": 5.497787143782138,
          "target": "3-garage-to-1st-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-street",
      "name": "Street",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.697545872872369,
        "pitch": -0.18454000455774988,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": 1.325815014300293,
          "pitch": -0.05289725966929382,
          "rotation": 0,
          "target": "0-garage"
        },
        {
          "yaw": 1.6296007132203387,
          "pitch": -0.11663589161380017,
          "rotation": 0.7853981633974483,
          "target": "2-steps-to-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-steps-to-door",
      "name": "Steps to door",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.8217567720726429,
        "pitch": 0.42438864762435813,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": 1.9078462301603167,
          "pitch": 0.3710443407731958,
          "rotation": 3.141592653589793,
          "target": "1-street"
        },
        {
          "yaw": -0.1090639134018545,
          "pitch": -0.253542105045959,
          "rotation": 5.497787143782138,
          "target": "11-outside-main-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-garage-to-1st-floor",
      "name": "Garage to 1st floor",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.2156048485617852,
        "pitch": 0.8419979931895458,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": -0.5310690095290092,
          "pitch": 0.6095021986411027,
          "rotation": 0.7853981633974483,
          "target": "0-garage"
        },
        {
          "yaw": 0.779530654457945,
          "pitch": 0.9923153490050449,
          "rotation": 0,
          "target": "4-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hall",
      "name": "Hall",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.3361200501480681,
        "pitch": 0.010029472143642693,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": 1.2949468456604407,
          "pitch": 0.1256630437242734,
          "rotation": 1.5707963267948966,
          "target": "0-garage"
        },
        {
          "yaw": 0.9839471465387017,
          "pitch": 0.1374934468372988,
          "rotation": 0,
          "target": "5-kitchen"
        },
        {
          "yaw": -0.3872630318348058,
          "pitch": 0.1800888797803175,
          "rotation": 3.141592653589793,
          "target": "13-sitting--dinning"
        },
        {
          "yaw": -2.284073830716066,
          "pitch": 0.04329663112973492,
          "rotation": 0,
          "target": "11-outside-main-door"
        },
        {
          "yaw": -2.323686240930739,
          "pitch": 0.42385747156041376,
          "rotation": 3.141592653589793,
          "target": "10-entrance-hall"
        },
        {
          "yaw": 0.6785660791903787,
          "pitch": 0.1273735110687504,
          "rotation": 4.71238898038469,
          "target": "14-1st-floor---office--wc"
        },
        {
          "yaw": 1.9959845541627264,
          "pitch": -0.6058598007033158,
          "rotation": 5.497787143782138,
          "target": "18-2nd-floor-corridor---close"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kitchen",
      "name": "Kitchen",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.581554871137282,
        "pitch": 0.05292642124195268,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": -0.6170014061754561,
          "pitch": 0.3061968990812254,
          "rotation": 0.7853981633974483,
          "target": "4-hall"
        },
        {
          "yaw": 3.140456393860191,
          "pitch": 0.30412779324849737,
          "rotation": 0,
          "target": "6-outside-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-outside-kitchen",
      "name": "Outside kitchen",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.3077565573732528,
        "pitch": 0.1898337571096569,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": -0.33230757927717747,
          "pitch": -0.03189966044391923,
          "rotation": 5.497787143782138,
          "target": "7-steps-to-rear-patio"
        },
        {
          "yaw": 1.133697919382044,
          "pitch": 0.11921610230168334,
          "rotation": 0.7853981633974483,
          "target": "5-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-steps-to-rear-patio",
      "name": "Steps to rear patio",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.0451926117846142,
        "pitch": -0.11233008800880562,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": 3.0964220610159217,
          "pitch": 0.44437060960904873,
          "rotation": 0,
          "target": "5-kitchen"
        },
        {
          "yaw": 2.1023906724872585,
          "pitch": 0.4930861613434523,
          "rotation": 3.141592653589793,
          "target": "7-steps-to-rear-patio"
        },
        {
          "yaw": -0.8204801271586515,
          "pitch": -0.3441945153847499,
          "rotation": 0.7853981633974483,
          "target": "8-rear-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-rear-patio",
      "name": "Rear patio",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.6542199820742667,
        "pitch": 0.16246851660534034,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": 2.3107870490658797,
          "pitch": 0.4631109421124364,
          "rotation": 3.9269908169872414,
          "target": "7-steps-to-rear-patio"
        },
        {
          "yaw": 0.42415989824879574,
          "pitch": -0.1671814878400113,
          "rotation": 5.497787143782138,
          "target": "9-bbq-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bbq-area",
      "name": "BBQ area",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.603284611677747,
        "pitch": 0.2662038366820685,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": 1.7998113626747312,
          "pitch": 0.45038140951236016,
          "rotation": 3.141592653589793,
          "target": "8-rear-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-entrance-hall",
      "name": "Entrance hall",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.7936652973638942,
        "pitch": 0.17279222148861173,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": 2.6926246480904936,
          "pitch": 0.5541267911135019,
          "rotation": 3.141592653589793,
          "target": "4-hall"
        },
        {
          "yaw": -0.49184303629907866,
          "pitch": 0.4267031454773367,
          "rotation": 3.141592653589793,
          "target": "11-outside-main-door"
        },
        {
          "yaw": 3.0650925452201667,
          "pitch": -0.4051778094198486,
          "rotation": 5.497787143782138,
          "target": "18-2nd-floor-corridor---close"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-outside-main-door",
      "name": "Outside main door",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.5811002194375785,
        "pitch": 0.2987374578746973,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": 2.6118206860252906,
          "pitch": 0.6885333176861526,
          "rotation": 0,
          "target": "2-steps-to-door"
        },
        {
          "yaw": 1.7336782230591492,
          "pitch": 0.4473450060263495,
          "rotation": 3.141592653589793,
          "target": "1-street"
        },
        {
          "yaw": -2.282256586940438,
          "pitch": 0.2259915098847909,
          "rotation": 0,
          "target": "10-entrance-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-dinning--sitting",
      "name": "Dinning / sitting",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.4980967169683908,
        "pitch": 0.21359550650591608,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": 2.9672980966195057,
          "pitch": 0.27913182310274287,
          "rotation": 3.141592653589793,
          "target": "13-sitting--dinning"
        },
        {
          "yaw": -1.3326375158510029,
          "pitch": 0.37995749825654457,
          "rotation": 0.7853981633974483,
          "target": "4-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-sitting--dinning",
      "name": "Sitting / dinning",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.5488317313238422,
        "pitch": 0.2224207467063497,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": 1.3424669114645642,
          "pitch": 0.0904017438738407,
          "rotation": 3.141592653589793,
          "target": "12-dinning--sitting"
        },
        {
          "yaw": 0.7858258600843655,
          "pitch": 0.1724143792337518,
          "rotation": 0,
          "target": "4-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-1st-floor---office--wc",
      "name": "1st floor - office / wc",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.633585364269674,
        "pitch": 0.1876551312025363,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": -0.21428882602975285,
          "pitch": 0.21176085374097653,
          "rotation": 14.137166941154074,
          "target": "4-hall"
        },
        {
          "yaw": -0.354172311639374,
          "pitch": -0.01640293893564504,
          "rotation": 0,
          "target": "0-garage"
        },
        {
          "yaw": -0.4941397172723274,
          "pitch": 0.16550596876466273,
          "rotation": 4.71238898038469,
          "target": "5-kitchen"
        },
        {
          "yaw": -1.8505877792784595,
          "pitch": 0.36478967631350656,
          "rotation": 0,
          "target": "15-1st-floor-wc"
        },
        {
          "yaw": -2.37173831038686,
          "pitch": 0.13696889048507543,
          "rotation": 10.995574287564278,
          "target": "16-1st-floor---office"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-1st-floor-wc",
      "name": "1st floor wc",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.8799474685883375,
        "pitch": 0.9048299507373798,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": 2.99239998780833,
          "pitch": 0.5095191451859513,
          "rotation": 0,
          "target": "14-1st-floor---office--wc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-1st-floor---office",
      "name": "1st floor - office",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.8926466475289985,
        "pitch": 0.3269611617436876,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": 2.489891265763136,
          "pitch": 0.38529677154456365,
          "rotation": 5.497787143782138,
          "target": "14-1st-floor---office--wc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-inside-main-door",
      "name": "Inside main door",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.38081097066161007,
        "pitch": -0.014564022577523872,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": 0.17474159716635285,
          "pitch": -0.021090888556365428,
          "rotation": 4.71238898038469,
          "target": "13-sitting--dinning"
        },
        {
          "yaw": 0.4176394052060459,
          "pitch": 0.43488239594442035,
          "rotation": 3.141592653589793,
          "target": "4-hall"
        },
        {
          "yaw": -2.185554413736817,
          "pitch": 0.1364010436282328,
          "rotation": 0,
          "target": "11-outside-main-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-2nd-floor-corridor---close",
      "name": "2nd floor corridor - close",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.444538377742255,
        "pitch": 0.1645935999040571,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": -0.46795253282806293,
          "pitch": 0.045866408184028984,
          "rotation": 2.356194490192345,
          "target": "17-inside-main-door"
        },
        {
          "yaw": 0.4122235350472572,
          "pitch": 0.15551982126408248,
          "rotation": 0.7853981633974483,
          "target": "24-master-suite"
        },
        {
          "yaw": -2.475616374068723,
          "pitch": 0.027293385756319566,
          "rotation": 0.7853981633974483,
          "target": "20-bedroom-1"
        },
        {
          "yaw": 2.874194562070623,
          "pitch": 0.059489415509087706,
          "rotation": 1.5707963267948966,
          "target": "21-2nd-floor-wc"
        },
        {
          "yaw": 2.4938856548928303,
          "pitch": 0.23142900162717694,
          "rotation": 3.141592653589793,
          "target": "19-2nd-floor-corridor---far"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-2nd-floor-corridor---far",
      "name": "2nd floor corridor - far",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.7030589573196355,
        "pitch": 0.2925236558564972,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": 0.1099594689925123,
          "pitch": 0.24879965644588609,
          "rotation": 3.141592653589793,
          "target": "18-2nd-floor-corridor---close"
        },
        {
          "yaw": -2.0847753358609964,
          "pitch": 0.07442090813911406,
          "rotation": 0.7853981633974483,
          "target": "22-bedroom-2"
        },
        {
          "yaw": 1.5350982766551784,
          "pitch": -0.04851822173349518,
          "rotation": 0.7853981633974483,
          "target": "23-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-bedroom-1",
      "name": "Bedroom 1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.3344121790438983,
        "pitch": 0.2795606285488521,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": 1.071011834317348,
          "pitch": -0.013855057919819558,
          "rotation": 4.71238898038469,
          "target": "18-2nd-floor-corridor---close"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-2nd-floor-wc",
      "name": "2nd floor wc",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.4980298591121475,
        "pitch": 0.34724261332881134,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": -0.0003405304919574803,
          "pitch": -0.07167244633498271,
          "rotation": 4.71238898038469,
          "target": "18-2nd-floor-corridor---close"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-bedroom-2",
      "name": "Bedroom 2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.3104106867284546,
        "pitch": 0.6527076604699857,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": -0.7293042383329436,
          "pitch": 0.10047420813117469,
          "rotation": 4.71238898038469,
          "target": "19-2nd-floor-corridor---far"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-bedroom-3",
      "name": "Bedroom 3",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.09602568906193021,
        "pitch": 0.27480753673583536,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": -3.0747071397516397,
          "pitch": 0.04624001413524326,
          "rotation": 0.7853981633974483,
          "target": "19-2nd-floor-corridor---far"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-master-suite",
      "name": "Master suite",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.7662693578947017,
        "pitch": 0.27552228627374475,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": -2.6702018435360344,
          "pitch": 0.01716993846166659,
          "rotation": 0.7853981633974483,
          "target": "25-master-s-closet"
        },
        {
          "yaw": 3.133804771899099,
          "pitch": -0.0024030191566772885,
          "rotation": 4.71238898038469,
          "target": "18-2nd-floor-corridor---close"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-master-s-closet",
      "name": "Master S. Closet",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.5344471353239406,
        "pitch": 0.3426130306479678,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": -0.28418871923833144,
          "pitch": 0.015151749284129323,
          "rotation": 0.7853981633974483,
          "target": "26-master-suite-wc"
        },
        {
          "yaw": 2.3463185809956926,
          "pitch": -0.06275593093324083,
          "rotation": 5.497787143782138,
          "target": "24-master-suite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-master-suite-wc",
      "name": "Master suite wc",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.41166156420649536,
        "pitch": 0.7349298417803283,
        "fov": 1.2837724343863997
      },
      "linkHotspots": [
        {
          "yaw": 2.740024614855326,
          "pitch": 0.029982197832097768,
          "rotation": 0.7853981633974483,
          "target": "25-master-s-closet"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
