import profile_picture from "url:../../img/kaarlo.jpg";
import SectionTitle from "./SectionTitle";
import Section from "./Section";

export default function AboutMe() {
  const skills = [
    "JavaScript (ES6+)",
    "HTML5 & CSS3",
    "WordPress & Wix",
    "Procedural PHP",
    "Tailwind CSS",
    "ReactJS (Still Learning)",
  ];

  const generateSectionMarkup = () => {
    return `
    ${SectionTitle("1", "About Me")}

    <div class="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-10">
        <div class="justify-center xl:justify-end flex lg:hidden">
            <div class="border border-primary rounded">
                <img
                src="${profile_picture}"
                class="max-w-[300px] rounded -translate-y-[10px] -translate-x-[10px]"
                alt="Kaarlo Sasiang"
                />
            </div>
        </div>

        <div>
            <p class="text-secondary text-justify">
                Hey there! I'm
                <span class="text-primary">Kaarlo Ruy P. Sasiang</span>, a web
                developer passionate about turning code into real experiences. I
                started playing with HTML, CSS, JavaScript, and PHP back in Grade
                12, and since then, I've been part of three companies as a frontend
                web developer.

                <br />
                <br />

                Currently, I'm deep into mastering ReactJS. Beyond work, I'm also
                a proud member of the web development team at
                <span class="text-primary">CodeByters</span>, a school
                organization where we're all about making cool things happen with
                code.

                <br />
                <br />
                Here are a few technologies I’ve been working with recently:
            </p>

            <ul
                class="grid text-sm gap-2 mt-3 font-FiraCode"
                style="grid-template-columns: repeat(2, minmax(140px, 200px))"
            >
            ${skills
              .map(
                (skill) => `
                <li
                class="skill-item relative flex items-start gap-3 font-light tracking-widest"
                >
                    ${skill}
                </li>
            `
              )
              .join("")}
            </ul>
        </div>

        <div class="justify-center xl:justify-end hidden lg:flex">
            <div class="border border-primary rounded absolute">
                <img
                src="${profile_picture}"
                class="max-w-[300px] rounded -translate-y-[10px] -translate-x-[10px]"
                alt="Kaarlo Sasiang"
                />
            </div>
        </div>

    </div>
    `;
  };

  return Section(generateSectionMarkup(), "about-me");
}
