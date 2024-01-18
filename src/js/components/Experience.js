import Section from "./Section";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  const generateSectionMarkup = () => {
    return `
    <div class="flex flex-col gap-5">
        ${SectionTitle("2", "Experience")}

        ${generateExperienceMarkup(
          "Frontend Web / Wordpress Developer",
          "Wozinga",
          "Jun 2021 - Nov 2023",
          [
            "Specialized in creating compelling landing pages using WordPress and vanilla ParcelJS",
            "Focused on design and user experience, I turned concepts into visually appealing and functional pages",
          ],
          "https://wozinga.com"
        )}

       ${generateExperienceMarkup(
         "Frontend Web Developer",
         "Accelerated Digital Delivery",
         "Jan - May 2021",
         [
           "Develop company websites using Angular with Bootstrap.",
           "Translate design mockups into responsive and dynamic web interfaces, collaborating for seamless back-end integration.",
         ],
         "https://accelerateddigitaldelivery.co.uk/"
       )}
        
    </div>
    `;
  };

  return Section(generateSectionMarkup(), "experience");
}

function generateExperienceMarkup(title, company, date, tasks, link) {
  return `
    <div class="mt-5 max-w-[800px]">
      <div class="flex items-center gap-0 md:gap-5 flex-wrap">
        <h3 class="flex items-center gap-3 text-lg">${title}</h3>
        <a href="${link}" class="text-primary hover:underline" target="_blank"><span class="text-primary font-FiraCode"> @ ${company}</span></a>
      </div>
      <span class="text-xs font-FiraCode text-off-white">${date}</span>

      <ul class="my-3 flex flex-col gap-3">
        ${tasks
          .map(
            (task) => `
          <li class="task-item flex gap-2">
            <p class="text-sm font-light">
              ${task}
            </p>
          </li>
        `
          )
          .join("")}
      </ul>
    </div>
  `;
}
