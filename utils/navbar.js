const opener = document.querySelector(".opener");
const closer = document.querySelector(".closer");
const navbar = document.querySelector(".navbar");

opener.addEventListener("click", () => {
  navbar.className = "navbar open";
});

closer.addEventListener("click", () => {
  navbar.className = "navbar";
});
