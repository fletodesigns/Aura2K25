const chesNoInput = document.getElementById("ches-no-input");
const searchBtn = document.getElementById("search-btn");
const conName = document.getElementById("con-name");
const chesNoText = document.getElementById("ches-no-text");

const resultPage = document.getElementById("result-page");
const totalScoreText = document.getElementById("total-score");
const navbar = document.querySelector("header");


const backBtn = document.getElementById("back-btn");

// calling stage program names
const stageProgram1Name = document.getElementById("stage-program-1-name");
const stageProgram2Name = document.getElementById("stage-program-2-name");
const stageProgram3Name = document.getElementById("stage-program-3-name");

// calling stage program ranks
const stageProgram1Rank = document.getElementById("stage-program-1-rank");
const stageProgram2Rank = document.getElementById("stage-program-2-rank");
const stageProgram3Rank = document.getElementById("stage-program-3-rank");

// calling stage program scores
const stageProgram1Score = document.getElementById("stage-program-1-score");
const stageProgram2Score = document.getElementById("stage-program-2-score");
const stageProgram3Score = document.getElementById("stage-program-3-score");

// calling non-stage program names
const noneStageProgram1Name = document.getElementById("nonstage-program-1-name");
const noneStageProgram2Name = document.getElementById("nonstage-program-2-name");
const noneStageProgram3Name = document.getElementById("nonstage-program-3-name");

// calling non-stage program ranks
const noneStageProgram1Rank = document.getElementById("nonstage-program-1-rank");
const noneStageProgram2Rank = document.getElementById("nonstage-program-2-rank");
const noneStageProgram3Rank = document.getElementById("nonstage-program-3-rank");

// calling non-stage program scores
const noneStageProgram1Score = document.getElementById("nonstage-program-1-score");
const noneStageProgram2Score = document.getElementById("nonstage-program-2-score");
const noneStageProgram3Score = document.getElementById("nonstage-program-3-score");

let students = new Map();

students.set(101, {
    name: "Shaheer",
    chesNo: 101,
    team: "victoria",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});

students.set(102, {
    name: "Bishr KV ",
    chesNo: 102,
    team: "victoria",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(103, {
    name: "Safvan kk",
    chesNo: 103,
    team: "victoria",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(104, {
    name: "Jezil PK",
    chesNo: 104,
    team: "victoria",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(105, {
    name: "Aman ",
    chesNo: 105,
    team: "victoria",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(106, {
    name: "Thameem NT ",
    chesNo: 106,
    team: "victoria",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(107, {
    name: "Musthafa ",
    chesNo: 107,
    team: "victoria",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(108, {
    name: "Uvais N ",
    chesNo: 108,
    team: "victoria",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(109, {
    name: "Nihal MA ",
    chesNo: 109,
    team: "victoria",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(110, {
    name: "Thoyyib K ",
    chesNo: 110,
    team: "victoria",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(111, {
    name: "Ibrahim K ",
    chesNo: 111,
    team: "victoria",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(112, {
    name: "Nihal N ",
    chesNo: 112,
    team: "victoria",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(113, {
    name: "Yaseen K ",
    chesNo: 113,
    team: "victoria",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(114, {
    name: "Nasim K ",
    chesNo: 114,
    team: "victoria",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(115, {
    name: "Hashim P ",
    chesNo: 115,
    team: "victoria",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(116, {
    name: "Shameem M ",
    chesNo: 116,
    team: "victoria",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});

// =======================================================================================

students.set( 201, {
    name: "Afnan MP",
    chesNo:  201,
    team: "nayagra",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set( 202, {
    name: "Juman ",
    chesNo:  202,
    team: "nayagra",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set( 203, {
    name: "Abshar AK ",
    chesNo:  203,
    team: "nayagra",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set( 204, {
    name: "Shamil T ",
    chesNo:  204,
    team: "nayagra",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set( 205, {
    name: "Vafi RK ",
    chesNo:  205,
    team: "nayagra",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set( 206, {
    name: "Shammas CK ",
    chesNo:  206,
    team: "nayagra",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set( 207, {
    name: "Jalal PT ",
    chesNo:  207,
    team: "nayagra",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set( 208, {
    name: "Fahmudheen A ",
    chesNo:  208,
    team: "nayagra",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set( 209, {
    name: "Ubaidullah V ",
    chesNo:  209,
    team: "nayagra",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(  210, {
    name: "Shamal T ",
    chesNo:   210,
    team: "nayagra",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(  211, {
    name: "Hanan A ",
    chesNo:   211,
    team: "nayagra",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(  212, {
    name: "Ashmil K ",
    chesNo:   212,
    team: "nayagra",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(  213, {
    name: "Irfan KM ",
    chesNo:   213,
    team: "nayagra",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(  214, {
    name: "Nihad K ",
    chesNo:   214,
    team: "nayagra",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(  215, {
    name: "Rabeeh CT ",
    chesNo:   215,
    team: "nayagra",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(  216, {
    name: "S.Sahl SV ",
    chesNo:   216,
    team: "nayagra",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});

// ====================================== team ==================================================

students.set(301, {
    name: "Raif TP",
    chesNo: 301,
    team: "tugela",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set( 302, {
    name: "Mujthaba KK ",
    chesNo:  302,
    team: "tugela",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(  303, {
    name: "Nafih K ",
    chesNo:   303,
    team: "tugela",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});

students.set( 304, {
    name: "Faheem VM ",
    chesNo:  304,
    team: "tugela",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set( 305, {
    name: "Sabiq P ",
    chesNo:  305,
    team: "tugela",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set( 306, {
    name: "Sinan C ",
    chesNo:  306,
    team: "tugela",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set( 307, {
    name: "Muslih CP ",
    chesNo:  307,
    team: "tugela",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set( 308, {
    name: "Anas T ",
    chesNo:  308,
    team: "tugela",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set( 309, {
    name: "Hasan TK ",
    chesNo:  309,
    team: "tugela",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set( 310, {
    name: "Murshid P ",
    chesNo:  310,
    team: "tugela",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(  311, {
    name: "Niyas PK ",
    chesNo:   311,
    team: "tugela",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(  312, {
    name: "Fauzan M ",
    chesNo:   312,
    team: "tugela",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(  313, {
    name: "Arshad MP ",
    chesNo:   313,
    team: "tugela",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(  314, {
    name: "Sabith PK ",
    chesNo:   314,
    team: "tugela",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(  315, {
    name: "Shahan K ",
    chesNo:   315,
    team: "tugela",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});
students.set(  316, {
    name: "Anshif PP ",
    chesNo:   316,
    team: "tugela",
    stagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ],
    nonStagePrograms: [
        { name: "not published", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 },
        { name: "non", rank: "non", score: 0 }
    ]
});


// ==========================================================================================

searchBtn.addEventListener('click', showResult);


function showResult() {
    let chesNo = parseInt(chesNoInput.value);
    let student = students.get(chesNo);
    
    if (students.has(chesNo)) {
        let student = students.get(chesNo);
        
        // Calculate the total score
        let totalScore = student.stagePrograms.reduce((sum, program) => sum + program.score, 0) +
        student.nonStagePrograms.reduce((sum, program) => sum + program.score, 0);
        
        // show ches no
        chesNoText.innerHTML = student.chesNo;
        
        // show score
        totalScoreText.innerHTML = totalScore;
        
        // show name
        conName.innerHTML = student.name;
        
        // show stage program details
        stageProgram1Name.innerHTML = student.stagePrograms[0].name;
        stageProgram1Rank.innerHTML = student.stagePrograms[0].rank;
        stageProgram1Score.innerHTML = student.stagePrograms[0].score;
        
        stageProgram2Name.innerHTML = student.stagePrograms[1].name;
        stageProgram2Rank.innerHTML = student.stagePrograms[1].rank;
        stageProgram2Score.innerHTML = student.stagePrograms[1].score;
        
        stageProgram3Name.innerHTML = student.stagePrograms[2].name;
        stageProgram3Rank.innerHTML = student.stagePrograms[2].rank;
        stageProgram3Score.innerHTML = student.stagePrograms[2].score;
        
        // show non-stage program details
        noneStageProgram1Name.innerHTML = student.nonStagePrograms[0].name;
        noneStageProgram1Rank.innerHTML = student.nonStagePrograms[0].rank;
        noneStageProgram1Score.innerHTML = student.nonStagePrograms[0].score;
        
        noneStageProgram2Name.innerHTML = student.nonStagePrograms[1].name;
        noneStageProgram2Rank.innerHTML = student.nonStagePrograms[1].rank;
        noneStageProgram2Score.innerHTML = student.nonStagePrograms[1].score;
        
        noneStageProgram3Name.innerHTML = student.nonStagePrograms[2].name;
        noneStageProgram3Rank.innerHTML = student.nonStagePrograms[2].rank;
        noneStageProgram3Score.innerHTML = student.nonStagePrograms[2].score;
        
        chesNoInput.value = "";
        
        // show team name
        let teamName = student.team;
        const root = document.documentElement;
        switch(teamName){
            // case "victoria":
            //     root.style.setProperty('--team-color', '#ffff70');
            //     break;
            case "victoria":
                root.style.setProperty('--team-color', '#f0d040');
            break;
            case "nayagra":
                root.style.setProperty('--team-color', '#ebebeb');
                break;
            case "tugela":
                root.style.setProperty('--team-color', '#16a9ff');
                break;
        };
            
            
        openResultPage();
    } else {
        alert("Student not found");
    };
                
}
    
function openResultPage() {
    resultPage.style.display = "block";
    navbar.style.display = "none";
}

function closeResultPage() {
    resultPage.style.display = "none";
    navbar.style.display = "flex";
}
                
chesNoInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      searchBtn.click();
    }
  });


const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

