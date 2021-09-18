function companyCardGenerator(title, link, image) {
  return `
  <div class="col-md-4 col-lg-2 col-sm-6 p-2" data-aos="fade-up">
    <a href="${link}" class="company-card shadow-sm" style="display: block; overflow: hidden;">
      <div class="company-card-img">
        <img
          src="${image}"
          alt="${title}"
        />
      </div>
      <p class="company-card-title">${title}</p>
    </a>
  </div>
  `;
}
