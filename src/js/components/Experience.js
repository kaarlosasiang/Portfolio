import Section from "./Section";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  const generateSectionMarkup = () => {
    return `
    <div class="px-20">
        ${SectionTitle("2", "Experience")}
        <div class="mt-5">
            <h3 class="flex items-center gap-3 text-lg">Frontend Web/Wordpress Developer <span class="text-primary font-FiraCode"> @ Wozinga</span></h3>
            <span class="text-xs font-FiraCode text-off-white">Jun 2021 - Nov 2023</span>

            <ul class="my-3 flex flex-col gap-3">
              <li class="task-item flex gap-2">
                <p class="text-sm font-light">
                  Specialized in creating compelling landing pages using WordPress and vanilla ParcelJS
                </p>
              </li>
              <li class="task-item flex gap-2">
                <p class="text-sm font-light">
                  Focused on design and user experience, I turned concepts into visually appealing and functional pages
                </p>
              </li>
            </ul>
        </div>

        <div class="mt-5">
            <h3 class="flex items-center gap-3 text-lg">Frontend Web Developer <span class="text-primary font-FiraCode"> @ Accelerated Digital Delivery</span></h3>
            <span class="text-xs font-FiraCode text-off-white">Jun 2021 - Nov 2023</span>

            <ul class="my-3 flex flex-col gap-3">
              <li class="task-item flex gap-2">
                <p class="text-sm font-light">
                  Specialized in creating compelling landing pages using WordPress and vanilla ParcelJS
                </p>
              </li>
              <li class="task-item flex gap-2">
                <p class="text-sm font-light">
                  Focused on design and user experience, I turned concepts into visually appealing and functional pages
                </p>
              </li>
            </ul>
        </div>
    </div>
    `;
  };

  return Section(generateSectionMarkup(), "experience");
}
