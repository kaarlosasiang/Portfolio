import profile_picture from "url:../../img/kaarlo.jpg";

export default function AboutMe() {
  const skills = [
    "JavaScript (ES6+)",
    "ReactJS (Still Learning)",
    "HTML5 & CSS3",
    "WordPress & Wix",
    "Procedural PHP",
    "Tailwind CSS",
  ];

  return `
    <section
    class="text-white flex flex-col justify-center pb-20"
    id="about-me"
    >
        <!-- Section Title -->
        <div class="flex items-center section-title">
            <h2 class="text-2xl font-FiraCode font-medium">
            <span class="text-primary font-normal">01.</span> About Me
            </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 mt-5 gap-10">
            <div class="justify-center xl:justify-end flex md:hidden">
                <div class="border border-primary rounded">
                    <img
                    src="${profile_picture}"
                    class="max-w-[300px] rounded -translate-y-[10px] -translate-x-[10px]"
                    alt="Kaarlo Sasiang"
                    />
                </div>
            </div>

            <div>
                <p class="font-light text-secondary text-justify">
                    Hey there! I'm
                    <span class="text-primary">Kaarlo Ruy P. Sasiang</span>, a web
                    developer passionate about turning code into real experiences. I
                    started playing with HTML, CSS, JavaScript, and PHP back in Grade
                    12, and since then, I've been part of two companies as a frontend
                    web developer.

                    <br />
                    <br />

                    Currently, I'm deep into mastering ReactJS. Beyond work, I'm also
                    a proud member of the development team at
                    <span class="text-primary">CodeByters</span>, a school
                    organization where we're all about making cool things happen with
                    code.

                    <br />
                    <br />
                    Here are a few technologies I’ve been working with recently:
                </p>

                <ul
                    class="grid text-xs gap-2 mt-3 font-FiraCode"
                    style="grid-template-columns: repeat(2, minmax(140px, 200px))"
                >
                ${skills
                  .map(
                    (skill) => `
                    <li
                    class="skill-item relative flex items-center gap-3 font-light tracking-widest"
                    >
                        ${skill}
                    </li>
                `
                  )
                  .join("")}
                </ul>
            </div>

            <div class="justify-center xl:justify-end hidden md:flex">
                <div class="border border-primary rounded absolute">
                    <img
                    src="${profile_picture}"
                    class="max-w-[300px] rounded -translate-y-[10px] -translate-x-[10px]"
                    alt="Kaarlo Sasiang"
                    />
                </div>
            </div>

        </div>
    </section>    
    `;
}
