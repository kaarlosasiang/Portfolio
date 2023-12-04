import AboutMe from "./AboutMe";
import Header from "./Header";
import Hero from "./Hero";
import SocMedLinks from "./SocMedLinks";
import img_preview from "url:../../img/img-preview.png";

class App {
  appContainer = document.getElementById("app");

  constructor() {
    console.log("App");
  }

  render() {
    this.appContainer.innerHTML = "";
    this.appContainer.innerHTML = this.generateMarkup();
  }

  generateMarkup() {
    return `
    <img src="${img_preview}" class="hidden" alt="" />

    ${Header()}

    ${SocMedLinks()}

    <!-- My Email -->
    <div class="fixed bottom-0 right-10 xl:14 hidden md:flex">
      <div class="links-list flex flex-col gap-8 items-center">
        <a
          href="mailto:karloruy.sasiang@dorsu.edu.ph"
          style="writing-mode: vertical-rl"
          class="transition-all duration-300 text-[#ededed] hover:translate-y-[-3px] font-FiraCode text-xs tracking-widest hover:text-primary"
        >
          karloruy.sasiang@dorsu.edu.ph
        </a>
      </div>
    </div>

    <main id="content" class="container mx-auto h-screen max-w-[1000px] px-20 xl:px-0">
      ${Hero()}
      ${AboutMe()}
    </main>  
  `;
  }

  handleSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = event.target.getAttribute("href");
        this.smoothScroll(targetId);
      });
    });
  }

  smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
      behavior: "smooth",
    });
  }

  handleHeaderBlurEffect() {
    let header = document.querySelector("header");

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
  }
}

export default new App();
