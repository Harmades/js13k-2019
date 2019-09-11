let platforms1 = [
    {
        x: 50,
        y: 100,
        width: 200,
        height: 75,
        note: 523.25,
        time: 0
    },    
    {
        x: 250,
        y: 100,
        width: 200,
        height: 75,
        note: 587.33,
        time: 1
    },
    {
        x: 450,
        y: 100,
        width: 200,
        height: 75,
        note: 659.25,
        time: 1
    },
    {
        x: 650,
        y: 100,
        width: 200,
        height: 75,
        note: 698.46,
        time: 1
    },
    {
        x: 850,
        y: 100,
        width: 200,
        height: 75,
        note: 783.99,
        time: 1
    },
    {
        x: 1050,
        y: 100,
        width: 200,
        height: 75,
        note: 880,
        time: 1
    },
    {
        x: 1250,
        y: 100,
        width: 200,
        height: 75,
        note: 987.77,
        time: 1
    },
    {
        x: 1450,
        y: 100,
        width: 200,
        height: 75,
        note: 1046.50,
        time: 1
    },
    {
        x: 1670,
        y: 50,
        width: 200,
        height: 75,
        note: 523.25,
        time: 1
    }
];

let level1 = {
    platforms: platforms1,
    sequence: platforms1,
    color1: "#202040",
    color2: "#543864",
    color3: "#8b4367",
    color4: "#ff6464",
    color5: "ghostwhite"
}

let platforms2 = [
    {
        x: 50,
        y: 800,
        width: 200,
        height: 75,
        note: 880,
        time: 0
    },
    {
        x: 400,
        y: 550,
        width: 300,
        height: 75,
        note: 739.99,
        time: 1
    },
    {
        x: 50,
        y: 300,
        width: 200,
        height: 75,
        note: 659.25,
        time: 1
    },
    {
        x: 400,
        y: 100,
        width: 500,
        height: 75,
        note: 587.33,
        time: 1
    },
    {
        x: 1023,
        y: 200,
        width: 200,
        height: 75,
        note: 659.25,
        time: 1
    },
    {
        x: 1347,
        y: 300,
        width: 200,
        height: 75,
        note: 739.99,
        time: 1
    },
    {
        x: 1670,
        y: 400,
        width: 200,
        height: 75,
        note: 880,
        time: 1
    }
]

let level2 = {
    platforms: platforms2,
    sequence: platforms2,
    color1: "#464159",
    color2: "#6c7b95",
    color3: "#8bbabb",
    color4: "#c7f0db",
    color5: "ghostwhite"
}

let platforms3 = [
    {
        x: 50,
        y: 100,
        width: 300,
        height: 75,
        note: 830.61,
        time: 0
    },
    {
        x: 450,
        y: 200,
        width: 75,
        height: 300,
        note: 830.61,
        time: 0.5
    },
    {
        x: 200,
        y: 400,
        width: 75,
        height: 300,
        note: 830.61,
        time: 0.75
    },
    {
        x: 800,
        y: 300,
        width: 200,
        height: 75,
        note: 659.25,
        time: 1
    },
    {
        x: 1100,
        y: 400,
        width: 200,
        height: 75,
        note: 830.61,
        time: 0.5
    },
    {
        x: 1400,
        y: 500,
        width: 200,
        height: 75,
        note: 987.77,
        time: 1
    }
]

let level3 = {
    platforms: platforms3,
    sequence: platforms3,
    color1: "#43B047",
    color2: "#049CD8",
    color3: "#E52521",
    color4: "#FBD000",
    color5: "ghostwhite"
}

let platforms4 = [
    {
        x: 50,
        y: 800,
        width: 200,
        height: 75,
        note: 880,
        time: 0
    },
    {
        x: 300,
        y: 300,
        width: 200,
        height: 75,
        note: 587.33,
        time: 2
    },
    {
        x: 550,
        y: 400,
        width: 200,
        height: 75,
        note: 698.46,
        time: 2
    },
    {
        x: 800,
        y: 300,
        width: 200,
        height: 75,
        note: 783.99,
        time: 0.5
    },
    {
        x: 1200,
        y: 400,
        width: 200,
        height: 75,
        note: 880,
        time: 0.5
    },
    {
        x: 800,
        y: 550,
        width: 200,
        height: 75,
        note: 587.33,
        time: 1.75
    },
    {
        x: 1200,
        y: 100,
        width: 300,
        height: 75,
        note: 659.25,
        time: 0.5
    },
]

let level4 = {
    platforms: platforms4,
    sequence: [
        platforms4[0],
        platforms4[1],
        platforms4[2],
        platforms4[3],
        platforms4[4],
        platforms4[5],
        platforms4[2],
        platforms4[3],
        platforms4[4],
        platforms4[5],
        platforms4[2],
        platforms4[3],
        platforms4[6],
    ],
    color1: "#bbbbbb",
    color2: "#283148",
    color3: "#913535",
    color4: "#e9eec9",
    color5: "ghostwhite"
}

let platforms5 = [
    {
        x: 50,
        y: 100,
        width: 200,
        height: 75,
        note: 523.25,
        time: 0
    },
    {
        x: 450,
        y: 100,
        width: 200,
        height: 75,
        note: 587.33,
        time: 1
    },
    {
        x: 850,
        y: 100,
        width: 200,
        height: 75,
        triggering: false, 
        triggered: false,
        playNote: false,
        note: 659.25,
        time: 1
    },
    {
        x: 1250,
        y: 100,
        width: 200,
        height: 75,
        triggering: false, 
        triggered: false,
        playNote: false,
        note: 739.99,
        time: 1
    },
    {
        x: 1670,
        y: 100,
        width: 200,
        height: 75,
        triggering: false, 
        triggered: false,
        playNote: false,
        note: 880,
        time: 1
    },
]

let level5 = {
    platforms: platforms5,
    sequence: [
        platforms5[0],
        platforms5[1],
        platforms5[2],
        platforms5[1],
        platforms5[2],
        platforms5[3],
        platforms5[2],
        platforms5[3],
        platforms5[4],
    ],
    color1: "#00204a",
    color2: "#005792",
    color3: "#448ef6",
    color4: "#fdb44b",
    color5: "ghostwhite"
}

let platforms6 = [
    {
        x: 50,
        y: 700,
        width: 100,
        height: 75,
        note: 1046.50,
        time: 0
    },
    {
        x: 150,
        y: 625,
        width: 100,
        height: 75,
        note: 987.77,
        time: 1
    },
    {
        x: 250,
        y: 550,
        width: 100,
        height: 75,
        note: 880,
        time: 1
    },
    {
        x: 350,
        y: 550,
        width: 100,
        height: 75,
        note: 880,
        time: 1
    },
    {
        x: 450,
        y: 625,
        width: 100,
        height: 75,
        note: 987.77,
        time: 1
    },
    {
        x: 550,
        y: 550,
        width: 100,
        height: 75,
        note: 1046.50,
        time: 2
    },
    {
        x: 650,
        y: 475,
        width: 100,
        height: 75,
        note: 987.77,
        time: 1
    },
    {
        x: 750,
        y: 400,
        width: 100,
        height: 75,
        note: 880,
        time: 1
    },
    {
        x: 850,
        y: 400,
        width: 100,
        height: 75,
        note: 880,
        time: 1
    },
    {
        x: 950,
        y: 475,
        width: 100,
        height: 75,
        note: 987.77,
        time: 1
    },
    {
        x: 1100,
        y: 100,
        width: 500,
        height: 75,
        note: 783.99,
        time: 2
    },
    {
        x: 1650,
        y: 200,
        width: 75,
        height: 300,
        note: 880,
        time: 1
    },
    {
        x: 1250,
        y: 350,
        width: 200,
        height: 75,
        note: 587.33,
        time: 0.75
    }
]

let level6 = {
    platforms: platforms6,
    sequence: platforms6,
    color1: "#00334e",
    color2: "#145374",
    color3: "#5588a3",
    color4: "#e8e8e8",
    color5: "ghostwhite"
}

let platforms7 = [
    {
        x: 50,
        y: 600,
        width: 150,
        height: 75,
        note: 880,
        time: 0
    },
    {
        x: 200,
        y: 575,
        width: 150,
        height: 75,
        note: 880,
        time: 1
    },
    {
        x: 350,
        y: 550,
        width: 150,
        height: 75,
        note: 880,
        time: 1
    },
    {
        x: 1000,
        y: 500,
        width: 150,
        height: 75,
        note: 880,
        time: 2
    },
    {
        x: 1150,
        y: 550,
        width: 150,
        height: 75,
        note: 880,
        time: 1
    },
    {
        x: 1300,
        y: 600,
        width: 150,
        height: 75,
        note: 880,
        time: 1
    },
    {
        x: 1600,
        y: 650,
        width: 100,
        height: 75,
        note: 880,
        time: 2
    },
    {
        x: 1400,
        y: 200,
        width: 100,
        height: 75,
        note: 1046.50,
        time: 1
    },
    {
        x: 1300,
        y: 150,
        width: 100,
        height: 75,
        note: 698.46,
        time: 1
    },
    {
        x: 1200,
        y: 100,
        width: 100,
        height: 75,
        note: 783.99,
        time: 1.5
    },
    {
        x: 1100,
        y: 50,
        width: 100,
        height: 75,
        note: 880,
        time: 0.5
    },
]

let level7 = {
    platforms: platforms7,
    sequence: platforms7,
    color1: "#165b33",
    color2: "#146b3a",
    color3: "#ea4630",
    color4: "#f8b229",
    color5: "ghostwhite"
}

let platforms8 = [
    {
        x: 50,
        y: 50,
        width: 600,
        height: 75,
        note: 523.25,
        time: 1
    },
    {
        x: 650,
        y: 125,
        width: 75,
        height: 300,
        note: 1046.50,
        time: 0.5
    },
    {
        x: 250,
        y: 300,
        width: 200,
        height: 75,
        note: 783.99,
        time: 1
    },
    {
        x: 850,
        y: 300,
        width: 150,
        height: 75,
        note: 698.46,
        time: 1
    },
    {
        x: 1000,
        y: 375,
        width: 150,
        height: 75,
        note: 783.99,
        time: 1
    },
    {
        x: 1150,
        y: 300,
        width: 150,
        height: 75,
        note: 698.46,
        time: 1
    },
    {
        x: 1300,
        y: 225,
        width: 150,
        height: 75,
        note: 659.25,
        time: 1
    },
]

let level8 = {
    platforms: platforms8,
    sequence: [
        platforms8[0],
        platforms8[1],
        platforms8[2],
        platforms8[3],
        platforms8[4],
        platforms8[5],
        platforms8[6],
        platforms8[5],
        platforms8[4],
        platforms8[0],
        platforms8[1],
        platforms8[2],
        platforms8[3],
        platforms8[4],
        platforms8[5],
        platforms8[6],
        platforms8[5],
        platforms8[4]
    ],
    color1: "#071e3d",
    color2: "#1f4287",
    color3: "#278ea5",
    color4: "#21e6c1",
    color5: "ghostwhite"
}

// ati$pyeypq$
let platforms9 = [
    {
        x: 50,
        y: 500,
        width: 200,
        height: 75,
        note: 523.25,
        time: 0
    },
    {
        x: 350,
        y: 500,
        width: 200,
        height: 75,
        note: 659.25,
        time: 1
    },
    {
        x: 650,
        y: 500,
        width: 200,
        height: 75,
        note: 783.99,
        time: 1
    },
    {
        x: 950,
        y: 600,
        width: 200,
        height: 75,
        note: 987.77,
        time: 1
    },
    {
        x: 1200,
        y: 300,
        width: 200,
        height: 75,
        note: 880,
        time: 1
    },
    {
        x: 1500,
        y: 200,
        width: 200,
        height: 75,
        note: 698.46,
        time: 1
    },
    {
        x: 1800,
        y: 275,
        width: 75,
        height: 300,
        note: 587.33,
        time: 1
    },
    {
        x: 950,
        y: 0,
        width: 200,
        height: 75,
        note: 1046.50,
        time: 1
    },
    {
        x: 650,
        y: 0,
        width: 200,
        height: 75,
        note: 987.77,
        time: 1
    }
];

let level9 = {
    platforms: platforms9,
    sequence: [
        platforms9[0],
        platforms9[1],
        platforms9[2],
        platforms9[3],
        platforms9[4],
        platforms9[5],
        platforms9[6],
        platforms9[5],
        platforms9[4],
        platforms9[7],
        platforms9[8]
    ],
    color1: "#fb0091",
    color2: "#fb8691",
    color3: "#fb9e91",
    color4: "#fbda91",
    color5: "ghostwhite"
};

// q$qiyq$qiyq$q
let platforms10 = [
    {
        x: 50,
        y: 600,
        width: 200,
        height: 75,
        note: 1046.50,
        time: 1
    },
    {
        x: 600,
        y: 600,
        width: 100,
        height: 75,
        note: 987.77,
        time: 1
    },
    {
        x: 250,
        y: 350,
        width: 200,
        height: 75,
        note: 783.99,
        time: 1.5
    },
    {
        x: 400,
        y: 150,
        width: 200,
        height: 75,
        note: 698.46,
        time: 1.5
    },
    {
        x: 700,
        y: 250,
        width: 350,
        height: 75,
        note: 1046.50,
        time: 1
    },
    {
        x: 1200,
        y: 325,
        width: 75,
        height: 400,
        note: 987.77,
        time: 1
    }
];

let level10 = {
    platforms: platforms10,
    sequence: [
        platforms10[0],
        platforms10[1],
        platforms10[0],
        platforms10[2],
        platforms10[3],
        platforms10[4],
        platforms10[5],
        platforms10[4],
        platforms10[2],
        platforms10[3],
        platforms10[4],
        platforms10[5],
        platforms10[4],
    ],
    color1: "#1b1919",
    color2: "#616f39",
    color3: "#a7d129",
    color4: "#f8eeb4",
    color5: "ghostwhite"
};

// ayoiyq^iyoitua
let platforms11 = [
    {
        x: 50,
        y: 600,
        width: 200,
        height: 75,
        note: 523.25,
        time: 0
    },
    {
        x: 625,
        y: 500,
        width: 75,
        height: 400,
        note: 698.46,
        time: 1
    },
    {
        x: 550,
        y: 300,
        width: 200,
        height: 75,
        note: 830.61,
        time: 1.5
    },
    {
        x: 850,
        y: 400,
        width: 200,
        height: 75,
        note: 783.99,
        time: 0.75
    },
    {
        x: 1250,
        y: 500,
        width: 200,
        height: 75,
        note: 1046.50,
        time: 1.5
    },
    {
        x: 1600,
        y: 550,
        width: 75,
        height: 300,
        note: 923.33,
        time: 1
    },
    {
        x: 1150,
        y: 200,
        width: 200,
        height: 75,
        note: 659.25,
        time: 1
    },
    {
        x: 850,
        y: 100,
        width: 200,
        height: 75,
        note: 739.99,
        time: 1.5
    },
    {
        x: 550,
        y: 0,
        width: 200,
        height: 75,
        note: 523.25,
        time: 1
    }
];

let level11 = {
    platforms: platforms11,
    sequence: [
        platforms11[0],
        platforms11[1],
        platforms11[2],
        platforms11[3],
        platforms11[1],
        platforms11[4],
        platforms11[5],
        platforms11[3],
        platforms11[1],
        platforms11[2],
        platforms11[3],
        platforms11[6],
        platforms11[7],
        platforms11[8],
    ],
    color1: "#000000",
    color2: "#740001",
    color3: "#ae0001",
    color4: "#eeba30",
    color5: "ghostwhite"
}

//tuipiut
let platforms12 = [
    {
        x: 50,
        y: 200,
        width: 200,
        height: 75,
        note: 659.25,
        time: 1
    },
    {
        x: 250,
        y: 275,
        width: 100,
        height: 75,
        note: 739.99,
        time: 1
    },
    {
        x: 350,
        y: 350,
        width: 100,
        height: 75,
        note: 783.99,
        time: 1
    },
    {
        x: 450,
        y: 425,
        width: 100,
        height: 75,
        note: 880,
        time: 2
    },
    {
        x: 550,
        y: 350,
        width: 200,
        height: 75,
        note: 783.99,
        time: 1.5
    },
    {
        x: 750,
        y: 425,
        width: 200,
        height: 75,
        note: 739.99,
        time: 1
    },
];

let level12 = {
    platforms: platforms12,
    sequence: [
        platforms12[0],
        platforms12[1],
        platforms12[2],
        platforms12[3],
        platforms12[4],
        platforms12[5],
        platforms12[0],
    ],
    color1: "#202040",
    color2: "#543864",
    color3: "#8b4367",
    color4: "#ff6464",
    color5: "ghostwhite"
}

let levels = [
    level1,
    level2,
    level3,
    level4,
    level5,
    level6,
    level7,
    level8,
    level9,
    level10,
    level11,
    level12
];

let freePlayPlatforms = [
    {
        x: 0,
        y: 100,
        width: 75,
        height: 500
    },
    {
        x: 75,
        y: 100,
        width: 221.25,
        height: 75,
        note: 523.25,
    },    
    {
        x: 296.25,
        y: 100,
        width: 221.25,
        height: 75,
        note: 587.33
    },
    {
        x: 517.5,
        y: 100,
        width: 221.25,
        height: 75,
        note: 659.25
    },
    {
        x: 738.75,
        y: 100,
        width: 221.25,
        height: 75,
        note: 698.46
    },
    {
        x: 960,
        y: 100,
        width: 221.25,
        height: 75,
        note: 783.99
    },
    {
        x: 1181.25,
        y: 100,
        width: 221.25,
        height: 75,
        note: 880
    },
    {
        x: 1402.5,
        y: 100,
        width: 221.25,
        height: 75,
        note: 987.77
    },
    {
        x: 1623.75,
        y: 100,
        width: 221.25,
        height: 75,
        note: 1046.50
    },
    {
        x: 1845,
        y: 100,
        width: 75,
        height: 500
    }
];

let freePlayLevel = {
    platforms: freePlayPlatforms,
    sequence: [],
    color1: "#543864",
    color2: "#160f30",
    color3: "#8b4367",
    color4: "#ff6464",
    color5: "ghostwhite"
};