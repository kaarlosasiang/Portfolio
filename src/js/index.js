import { Resend } from "resend";
const resend = new Resend("re_123456789");

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

const sendEmail = async () => {
  try {
    const data = await resend.emails.send({
      from: "kaarlosasiang.online",
      to: ["sasiang64@gmail.com"],
      subject: "Hello World",
      html: "<strong>It works!</strong>",
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

sendEmail();
