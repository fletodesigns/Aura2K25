const chesNoInput = document.getElementById("ches-no-input");
const searchBtn = document.getElementById("search-btn");
const conName = document.getElementById("con-name");
const chesNoText = document.getElementById("ches-no-text");

const resultPage = document.getElementById("result-page");
const totalScoreText = document.getElementById("total-score");
const navbar = document.getElementById("navbar");

const backBtn = document.getElementById("back-btn");

const stageProgramList = document.getElementById("stageProgramList");
const nonStageProgramList = document.getElementById("nonStageProgramList");

let students = new Map();


// ====================================== team ==================================================

students.set(301, {
    name: "Raif TP",
    chesNo: 301,
    team: "tranquil",
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
    team: "tranquil",
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
    team: "tranquil",
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
    team: "tranquil",
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
    team: "tranquil",
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
    team: "tranquil",
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
    team: "tranquil",
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
    team: "tranquil",
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
    team: "tranquil",
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
    team: "tranquil",
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
    team: "tranquil",
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
    team: "tranquil",
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
    team: "tranquil",
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
    team: "tranquil",
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
    team: "tranquil",
    stagePrograms: [
        { name: "Science Master", rank: "1st A", score: 8 }

    ],
    nonStagePrograms: [
        { name: "Water painting", rank: "1st A", score: 8 },
        { name: "Pencil drawing", rank: "1st A", score: 8 },
    ]
});
students.set(  316, {
    name: "Anshif PP ",
    chesNo:   316,
    team: "tranquil",
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
        // Calculate the total score
        let totalScore = student.stagePrograms.reduce((sum, program) => sum + program.score, 0) +
        student.nonStagePrograms.reduce((sum, program) => sum + program.score, 0);

        // show ches no
        chesNoText.innerHTML = student.chesNo;

        // show score
        totalScoreText.innerHTML = totalScore;

        // show name
        conName.innerHTML = student.name;

        // Clear previous program lists
        stageProgramList.innerHTML = "";
        nonStageProgramList.innerHTML = "";

        // Dynamically create stage program divs
        student.stagePrograms.forEach((program) => {
            const programDiv = document.createElement('div');
            const nameH3 = document.createElement('h3');
            const rankH3 = document.createElement('h3');
            const scoreH3 = document.createElement('h3');

            nameH3.innerHTML = `${program.name}`;
            rankH3.innerHTML = `${program.rank}`;
            scoreH3.innerHTML = `${program.score}`;

            // Append the h3 elements to the program div
            programDiv.appendChild(nameH3);
            programDiv.appendChild(rankH3);
            programDiv.appendChild(scoreH3);

            // Append the program div to the stage program list
            stageProgramList.appendChild(programDiv);
        });

        // Dynamically create non-stage program divs
        student.nonStagePrograms.forEach((program) => {
            const programDiv = document.createElement('div');
            const nameH3 = document.createElement('h3');
            const rankH3 = document.createElement('h3');
            const scoreH3 = document.createElement('h3');

            nameH3.innerHTML = `${program.name}`;
            rankH3.innerHTML = `${program.rank}`;
            scoreH3.innerHTML = `${program.score}`;

            // Append the h3 elements to the program div
            programDiv.appendChild(nameH3);
            programDiv.appendChild(rankH3);
            programDiv.appendChild(scoreH3);

            // Append the program div to the non-stage program list
            nonStageProgramList.appendChild(programDiv);
        });

        chesNoInput.value = "";

        // show team name
        let teamName = student.team;
        const root = document.documentElement;
        switch (teamName) {
            case "chroma":
                root.style.setProperty('--team-color', '#f0d040');
                break;
            case "ember":
                root.style.setProperty('--team-color', '#ebebeb');
                break;
            case "tranquil":
                root.style.setProperty('--team-color', '#16a9ff');
                break;
        };

        openResultPage();
    } else {
        alert("Student not found");
    }
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
