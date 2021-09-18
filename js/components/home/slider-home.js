const sliderHome = document.getElementById('slider-home');
const sliderIndicators = `<div class="carousel-indicators">
<button
  type="button"
  data-bs-target="#carouselExampleIndicators"
  data-bs-slide-to="0"
  class="active"
  aria-current="true"
  aria-label="Slide 1"
></button>
<button
  type="button"
  data-bs-target="#carouselExampleIndicators"
  data-bs-slide-to="1"
  aria-label="Slide 2"
></button>
<button
  type="button"
  data-bs-target="#carouselExampleIndicators"
  data-bs-slide-to="2"
  aria-label="Slide 3"
></button>
<button
  type="button"
  data-bs-target="#carouselExampleIndicators"
  data-bs-slide-to="3"
  aria-label="Slide 4"
></button>
</div>`;

const sliderButton = `
<button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span
      class="carousel-control-prev-icon"
      aria-hidden="true"
    ></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span
      class="carousel-control-next-icon"
      aria-hidden="true"
    ></span>
    <span class="visually-hidden">Next</span>
  </button>
`;

const sliderHTML = `
<div
  id="carouselExampleIndicators"
  class="carousel slide rounded"
  data-bs-ride="carousel"
>
  ${sliderIndicators}
  <div class="carousel-inner">
    <a href="#" class="carousel-item active">
      <img src="img/BANNER UTAMA.jpg" class="d-block w-100 shadow" style="border-radius: 30px;" alt="..." />
    </a>
    <a href="#" class="carousel-item">
      <img src="img/BANNER IVF ACADEMY.jpg" class="d-block w-100 shadow" style="border-radius: 30px;" alt="..." />
    </a>
    <a href="#" class="carousel-item">
      <img src="img/BANNER PENDAFTARAN MEMBER.jpg" class="d-block w-100 shadow" style="border-radius: 30px;" alt="..." />
    </a>                
    <a href="#" class="carousel-item">
      <img src="img/BANNER ALUR MENGIKUTI JOBFAIR.jpg" class="d-block w-100 shadow" style="border-radius: 30px;" alt="..." />
    </a>
  </div>
  ${sliderButton}
</div>
`;

sliderHome.innerHTML = sliderHTML;
