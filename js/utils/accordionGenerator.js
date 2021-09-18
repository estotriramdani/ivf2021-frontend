function accordionActiveGenerator(id, title, cards) {
  return `
  <div class="accordion-item" data-aos="fade-up">
      <h2 class="accordion-header" id="${id}-heading">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#${id}"
          aria-expanded="true"
          aria-controls="${id}"
        >
          ${title}
        </button>
      </h2>
      <div
        id="${id}"
        class="accordion-collapse collapse show"
        aria-labelledby="${id}-heading"
      >
        <div class="accordion-body">
          <div class="row">
            ${cards}
          </div>
        </div>
      </div>
    </div>
  `;
}

function accordionGenerator(id, title, cards) {
  return `
  <div class="accordion-item" data-aos="fade-up">
    <h2 class="accordion-header" id="${id}-heading">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#${id}"
        aria-expanded="false"
        aria-controls="${id}"
      >
        ${title}
      </button>
    </h2>
    <div
      id="${id}"
      class="accordion-collapse collapse"
      aria-labelledby="${id}-heading"
    >
      <div class="accordion-body">
        <div class="row">
          ${cards}
        </div>
      </div>
    </div>
  </div>
  `;
}
