document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.getElementById("grid-container");

  // Create 6x6 grid
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridContainer.appendChild(gridItem);
    }
  }
});
