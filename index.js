const planetData = {
  Mercury: "Mercury is the smallest planet in the Solar System and closest to the Sun.",
  Venus: "Venus has a thick, toxic atmosphere that traps heat. It's often called Earth's twin.",
  Earth: "Earth is our home planet and the only one known to support life.",
  Mars: "Mars is the Red Planet, known for its dusty surface and potential for past water.",
  Jupiter: "Jupiter is the largest planet in the Solar System with a Great Red Spot storm.",
  Saturn: "Saturn is famous for its stunning ring system made of ice and rock.",
  Uranus: "Uranus rotates on its side, making its seasons extreme and unusual.",
  Neptune: "Neptune is the windiest planet, with supersonic storms in its atmosphere."
};

const planets = document.querySelectorAll(".planet");
const planetListItems = document.querySelectorAll(".planet-list li");
const panel = document.getElementById("planetInfo");
const planetName = document.getElementById("planetName");
const planetDetails = document.getElementById("planetDetails");
const closePanel = document.getElementById("closePanel");

function showPlanet(name) {
  planetName.textContent = name;
  planetDetails.textContent = planetData[name] || "No data available.";
  panel.classList.add("active");
}

planets.forEach(planet => {
  planet.addEventListener("click", () => showPlanet(planet.dataset.planet));
});

planetListItems.forEach(item => {
  item.addEventListener("click", () => showPlanet(item.dataset.planet));
});

closePanel.addEventListener("click", () => panel.classList.remove("active"));

document.getElementById("exploreBtn").addEventListener("click", () => {
  document.getElementById("solarSystem").scrollIntoView({ behavior: "smooth" });
});
