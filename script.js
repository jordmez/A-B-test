const contentElement = document.getElementById('content');

const versionA = "<p class='versionA'>This is Version A.</p>";
const versionB = "<p class='versionB'>This is Version B.</p>";

let visitCountA = 0;

let visitCountB = 0;

if (typeof(Storage) !== "undefined") {
  visitCountA = parseInt(localStorage.getItem("visitCountA")) || 0;
  visitCountB = parseInt(localStorage.getItem("visitCountB")) || 0;
}

const versionChoice = Math.random() < 0.5 ? 0 : 1;

if (versionChoice === 0) {
  visitCountA++;
} else {
  visitCountB++;
}

localStorage.setItem("visitCountA", visitCountA);

localStorage.setItem("visitCountB", visitCountB);

console.log("Visit - Version A:", visitCountA, "Version B:", visitCountB);

contentElement.innerHTML = versionChoice === 0 ? versionA : versionB;
