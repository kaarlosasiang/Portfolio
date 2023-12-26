import logo from "url:../../img/mylogo.png";
import resume from "url:../../resume.pdf";

export default function Header() {
  const menuItems = [
    {
      title: "About Me",
      url: "#about-me",
    },
    {
      title: "Experience",
      url: "#experience",
    },
    {
      title: "Work",
      url: "javascript:void(0);",
    },
    {
      title: "Contact",
      url: "javascript:void(0);",
    },
  ];

  return `
    <header
    class="z-10 bg-main-dark/[.30] flex items-center justify-between h-[80px] px-5 md:px-14 w-full fixed top-0 transition-all duration-300"
    >
        <img src="${logo}" class="max-w-[50px] max-h-[50px]" alt="" />
        <nav>
            <ul class="hidden lg:flex items-center gap-10 text-sm font-FiraCode">
                ${menuItems
                  .map(
                    ({ title, url }, index) => `
                    <li>
                        <a
                            href="${url}"
                            class="transition-all duration-300 text-[#ededed] hover:text-primary"
                        >
                            <span class="text-primary">0${
                              index + 1
                            }.</span> ${title}
                        </a>
                    </li>
                    `
                  )
                  .join("")}
                <li
                    class="transition-all duration-300 hover:-translate-y-[4px] hover:-translate-x-[4px]"
                >
                    <a
                    href="${resume}" target="_blank"
                    class="transition-all duration-300 text-primary border rounded px-4 py-2 hover:shadow-[3px_3px_0_0_rgba(61,241,218)]"
                    >Resume</a
                    >
                </li>
              </ul>

                <ul class="flex lg:hidden items-center gap-10 text-sm">
                <li
                    class="transition-all duration-300 hover:-translate-y-[4px] hover:-translate-x-[4px]"
                >
                    <a
                    href="${resume}" target="_blank"
                    class="transition-all duration-300 text-primary border rounded px-4 py-2 hover:shadow-[3px_3px_0_0_rgba(61,241,218)]"
                    >Resume</a
                    >
                </li>
            </ul>
        </nav>
    </header>        
    `;
}
