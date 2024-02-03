// header starts
const header = document.querySelector(".hw-header");
window.addEventListener("scroll", () => {
  if (scrollY > 30){
    header.classList.add("stiky");
  }
  else {
    header.classList.remove("stiky");
  }
})
// header starts