// DOM element references
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

let studentsData = [];

// Fetch students.json and convert object to array for .find() usage
fetch('students.json')
  .then(response => response.json())
  .then(data => {
    studentsData = Object.values(data); // Converts object to array
  })
  .catch(error => {
    console.error("Error loading student data:", error);
  });

// Attach event listener after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  if (searchBtn) {
    searchBtn.addEventListener('click', showResult);
  }

  if (chesNoInput) {
    chesNoInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        searchBtn.click();
      }
    });
  }

  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
    });
  }
});

function showResult() {
  let chesNo = parseInt(chesNoInput.value);
  let student = studentsData.find(s => s.chesNo === chesNo);

  if (student) {
    // Calculate the total score from stage and non-stage programs
    let totalScore = student.stagePrograms.reduce((sum, program) => sum + program.score, 0) +
                     student.nonStagePrograms.reduce((sum, program) => sum + program.score, 0);

    // Display student info
    chesNoText.innerHTML = student.chesNo;
    totalScoreText.innerHTML = totalScore;
    conName.innerHTML = student.name;

    // Clear previous program lists
    stageProgramList.innerHTML = "";
    nonStageProgramList.innerHTML = "";

    // Populate stage programs
    student.stagePrograms.forEach(program => {
      const programDiv = document.createElement('div');
      programDiv.innerHTML = `<h3>${program.name}</h3><h3>${program.rank}</h3><h3>${program.score}</h3>`;
      stageProgramList.appendChild(programDiv);
    });

    // Populate non-stage programs
    student.nonStagePrograms.forEach(program => {
      const programDiv = document.createElement('div');
      programDiv.innerHTML = `<h3>${program.name}</h3><h3>${program.rank}</h3><h3>${program.score}</h3>`;
      nonStageProgramList.appendChild(programDiv);
    });

    // Clear input field
    chesNoInput.value = "";

    // Set team color theme dynamically
    const root = document.documentElement;
    switch (student.team.toLowerCase()) {
      case "chroma":
        root.style.setProperty('--team-color', '#f0d040');
        break;
      case "ember":
        root.style.setProperty('--team-color', '#ebebeb');
        break;
      case "tranquil":
        root.style.setProperty('--team-color', '#16a9ff');
        break;
      default:
        root.style.removeProperty('--team-color');
    }

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
