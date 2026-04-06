const intro = document.getElementById("intro");
const main = document.getElementById("main");
const projects = document.querySelectorAll(".project");
const cursorImage = document.getElementById("cursor-image");

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

/* ===== INTRO 클릭 ===== */
intro.addEventListener("click", () => {
  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
    main.classList.remove("hidden");

    setTimeout(() => {
      main.classList.add("show");
    }, 50);

  }, 800);
});

/* ===== 마우스 추적 ===== */
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

/* ===== 부드러운 이동 ===== */
function animate() {
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;

  cursorImage.style.left = currentX + "px";
  cursorImage.style.top = currentY + "px";

  requestAnimationFrame(animate);
}

animate();

/* ===== hover 이미지 ===== */
projects.forEach(project => {
  project.addEventListener("mouseenter", () => {
    const imgSrc = project.getAttribute("data-image");
    cursorImage.src = imgSrc;
    cursorImage.style.opacity = "1";
    cursorImage.style.filter = "blur(0)";
  });

  project.addEventListener("mouseleave", () => {
    cursorImage.style.opacity = "0";
    cursorImage.style.filter = "blur(4px)";
  });
});