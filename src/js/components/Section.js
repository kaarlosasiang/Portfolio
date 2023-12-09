export default function Section(markup, id) {
  return `
    <section
        class="text-white flex flex-col justify-center py-20"
        id="${id}"
    >
        ${markup}
    </section>
    `;
}