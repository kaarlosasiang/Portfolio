feather.replace();

function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = event.target.getAttribute("href");
    smoothScroll(targetId);
  });
});

let header = document.querySelector("header");
console.log(header);
window.addEventListener("scroll", function () {
  // Check if the page has been scrolled
  if (window.scrollY > 10) {
    // Add the class when scrolled
    header.classList.add("backdrop-blur-md");
    header.classList.add("shadow-lg");
  } else {
    // Remove the class when at the top
    header.classList.remove("backdrop-blur-md");
    header.classList.remove("shadow-lg");
  }
});
