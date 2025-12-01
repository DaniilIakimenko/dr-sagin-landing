// Добавляем круги для разделителя
document.addEventListener("DOMContentLoaded", function () {
  const divider = document.querySelector(".about-divider");
  const positions = [11, 37, 63, 89];

  positions.forEach((position) => {
    const circle = document.createElement("div");
    circle.className = "circle";
    circle.style.top = `${position}%`;
    divider.appendChild(circle);
  });
});
