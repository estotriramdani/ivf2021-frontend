const descriptionSectionHTML = `
<div class="container">
  <div class="row">
    <div class="col-md-8 description-text p-4">
      <h3>Deskripsi Kegiatan</h3>
      <p>
        Presentasi perusahaan ataupun industrial insight dari perusahaan
        peserta IPB Virtual Fair 2021 melalui media online, dengan tujuan
        memberikan wawasan mengenai profil perusahaan dan jenjang karir di
        perusahaannya.
      </p>
    </div>
    <div class="col-md-4 d-lg-block d-md-block d-none">
      <img
        src="http://dummyimage.com/300x200.png/0c8deb/ffffff"
        alt="image"
        class="img-fluid description-image w-100"
      />
    </div>
  </div>
</div>
`;

document.getElementById('description-section').innerHTML =
  descriptionSectionHTML;
