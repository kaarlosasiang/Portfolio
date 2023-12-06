export default function SectionTitle(number, title) {
  return `
    <!-- Section Title -->
    <div class="flex items-center section-title">
        <h2 class="text-2xl font-FiraCode font-medium">
        <span class="text-primary font-normal">0${number}.</span> ${title}
        </h2>
    </div>
  `;
}
