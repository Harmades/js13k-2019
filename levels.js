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
    color1: "#543864",
    color2: "#160f30",
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
    color1: "#543864",
    color2: "#160f30",
    color3: "#8b4367",
    color4: "#ff6464",
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
    color1: "#543864",
    color2: "#160f30",
    color3: "#8b4367",
    color4: "#ff6464",
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
    color1: "#543864",
    color2: "#160f30",
    color3: "#8b4367",
    color4: "#ff6464",
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
    color1: "#543864",
    color2: "#160f30",
    color3: "#8b4367",
    color4: "#ff6464",
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
    color1: "#543864",
    color2: "#160f30",
    color3: "#8b4367",
    color4: "#ff6464",
    color5: "ghostwhite"
}

let platforms7 = [
    {
        x: 50,
        y: 600,
        width: 100,
        height: 75,
        note: 880,
        time: 0
    },
    {
        x: 150,
        y: 575,
        width: 100,
        height: 75,
        note: 880,
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
        x: 1100,
        y: 500,
        width: 100,
        height: 75,
        note: 880,
        time: 2
    },
    {
        x: 1200,
        y: 550,
        width: 100,
        height: 75,
        note: 880,
        time: 1
    },
    {
        x: 1300,
        y: 600,
        width: 100,
        height: 75,
        note: 880,
        time: 1
    },
    {
        x: 1400,
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
    color1: "#543864",
    color2: "#160f30",
    color3: "#8b4367",
    color4: "#ff6464",
    color5: "ghostwhite"
}

let platforms8 = [
    {
        x: 50,
        y: 50,
        width: 600,
        height: 75,
        note: 523.25,
        time: 0
    },
    {
        x: 650,
        y: 125,
        width: 75,
        height: 300,
        note: 1046.50,
        time: 1
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
    sequence: platforms8,
    color1: "#543864",
    color2: "#160f30",
    color3: "#8b4367",
    color4: "#ff6464",
    color5: "ghostwhite"
}