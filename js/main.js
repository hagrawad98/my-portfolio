///////////////////dark mode/////////////////////////
const themeBtn = document.getElementById("theme-btn");

// Load saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeBtn.innerHTML = "☀️";
} else {
  themeBtn.innerHTML = "🌙";
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")){
    themeBtn.innerHTML = "☀️";
    localStorage.setItem("theme", "dark");
  }else{
    themeBtn.innerHTML = "🌙";
    localStorage.setItem("theme", "light");
  }
});
// function to show my cv
function openCV() {
  window.open("Hagar_Awad_CV.pdf", "_blank");
}
///////////////////////////////////
function typingEffect(elementId, text, speed = 120, delay = 1500) {
  const typingElement = document.getElementById(elementId);
  if (!typingElement) return;
  let index = 0;

  function type() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    } else {
      setTimeout(() => {
        typingElement.textContent = "";
        index = 0;
        type();
      }, delay);
    }
  }

  type();
}
//////////////////////////////////////////////////////////////
// girl animation about section//
const animatedElements = document.querySelectorAll(
  ".fade-left, .fade-right, .fade-up",
);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.3 },
);
animatedElements.forEach((el) => observer.observe(el));

/////////////////////////////////////////////
// top btn//
const topBtn = document.getElementById ("top");

if (topBtn) {
  topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
   
  });
}

