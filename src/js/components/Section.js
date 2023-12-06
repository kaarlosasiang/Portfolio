export default function Section(markup) {
  return `
    <section
        class="text-white flex flex-col justify-center py-20"
        id="about-me"
    >
        ${markup}
    </section>
    `;
}