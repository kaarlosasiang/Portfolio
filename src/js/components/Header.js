import logo from "url:../../img/mylogo.png";

export default Header = () => {
  return `
    <header
    class="z-10 bg-main-dark/[.30] flex items-center justify-between h-[80px] px-10 md:px-14 w-full fixed top-0 transition-all duration-300"
    >
        <img src="${logo}" class="max-w-[50px] max-h-[50px]" alt="" />
        <nav>
            <ul class="hidden md:flex items-center gap-10 text-sm font-FiraCode">
                <li>
                    <a
                    href="#about-me"
                    class="transition-all duration-300 text-[#ededed] hover:text-primary"
                    ><span class="text-primary">01.</span> About Me</a
                    >
                </li>
                <li>
                    <a
                    href="javascript:;"
                    class="transition-all duration-300 text-[#ededed] hover:text-primary"
                    ><span class="text-primary">02.</span> Experience</a
                    >
                </li>
                <li>
                    <a
                    href="javascript:;"
                    class="transition-all duration-300 text-[#ededed] hover:text-primary"
                    ><span class="text-primary">03.</span> Work</a
                    >
                </li>
                <li>
                    <a
                    href="javascript:;"
                    class="transition-all duration-300 text-[#ededed] hover:text-primary"
                    ><span class="text-primary">04.</span> Contact</a
                    >
                </li>
                <li
                    class="transition-all duration-300 hover:-translate-y-[4px] hover:-translate-x-[4px]"
                >
                    <a
                    href="javascript:;"
                    class="transition-all duration-300 text-primary border rounded px-4 py-2 hover:shadow-[3px_3px_0_0_rgba(61,241,218)]"
                    >Resume</a
                    >
                </li>
                </ul>

                <ul class="felx md:hidden items-center gap-10 text-sm">
                <li
                    class="transition-all duration-300 hover:-translate-y-[4px] hover:-translate-x-[4px]"
                >
                    <a
                    href="javascript:;"
                    class="transition-all duration-300 text-primary border rounded px-4 py-2 hover:shadow-[3px_3px_0_0_rgba(61,241,218)]"
                    >Resume</a
                    >
                </li>
            </ul>
        </nav>
    </header>        
    `;
};
