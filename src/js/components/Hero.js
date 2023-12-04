export default function Hero() {
  return `
    <section class="h-full flex flex-col justify-center gap-2 md:gap-5">
        <p class="text-primary text-lg font-FiraCode">Hi, my name is</p>
        <h1
            class="transition-all duration-300 font-bold text-[#EDEDED] leading-[40px] text-[40px] md:text-[60px] lg:text-[80px]"
        >
        Kaarlo Sasiang
        </h1>
        <h2
            class="transition-all duration-300 font-bold text-secondary leading-[40px] lg:leading-[60px] 2xl:leading-[80px] text-[30px] md:text-[50px] xl:text-[60px]"
        >
        A frontend developer / IT student
        </h2>

        <p class="max-w-[640px] text-secondary text-justify">
            I'm an aspiring IT student with a strong foundation in JavaScript, and
            I'm currently focused on mastering the ReactJS framework to build
            dynamic and user-friendly web applications.
        </p>
        
        <div class="mt-5">
            <a
            href="#about-me"
            class="inline-flex items-center gap-2 transition-all duration-300 text-primary border rounded px-4 py-2 hover:-translate-y-[4px] hover:-translate-x-[4px] hover:shadow-[3px_3px_0_0_rgba(61,241,218)]"
            >
            Learn more about me
            <i data-feather="chevron-right"></i>
            </a>
        </div>
    </section>
  `;
}
