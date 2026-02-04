// Klein voorbeeldscript voor animatie of logging
document.addEventListener("DOMContentLoaded", () => {
    console.log("Welkom op de website van Robbe Boel!");
});



document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});


document.addEventListener("DOMContentLoaded", () => {
  const map = L.map("mapPuurs").setView([51.076031, 4.279113], 16);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19
  }).addTo(map);

  L.marker([51.076031, 4.279113])
    .addTo(map)
    .bindPopup("<b>Puurs</b><br>België");
});