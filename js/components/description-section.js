const descriptionSectionHTML = `
<div class="container">
  <div class="container">
    <div class="row">
      <div class="col-md-8 description-text p-4" style="display: flex; flex-direction: column; justify-content: center;" data-aos="fade-right">
        <h3 class="mb-4">Deskripsi Kegiatan</h3>
        <p>
          ${activityDescription}
        </p>
      </div>
      <div class="col-md-4 d-lg-block d-md-block d-none">
        <img
          src="${activityIllustration}"
          alt="ilustrasi kegiatan"
          class="img-fluid description-image w-100"
          data-aos="fade-left"
        />
      </div>
    </div>
  </div>
</div>
`;

document.getElementById('description-section').innerHTML =
  descriptionSectionHTML;
