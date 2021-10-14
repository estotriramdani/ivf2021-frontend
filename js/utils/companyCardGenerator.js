function companyCardGenerator(
  title,
  link,
  image,
  width,
  borderColor = '#0c8deb'
) {
  return `
  <div class="p-2" data-aos="fade-up" style="width: ${width || '300'}px;">
    <a href="${link}" class="company-card shadow" style="display: block; overflow: hidden; border: 2px solid ${borderColor}; padding: 5px;" onclick="handleClickCard(this)">
      <div class="company-card-img">
        <img
          src="img/logo/${image}"
          alt="${title}"
        />
      </div>
      <p class="company-card-title">${title}</p>
    </a>
  </div>
  `;
}
