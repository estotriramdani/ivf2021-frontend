AOS.init();

const companyVacancy = `<!-- info perusahaan -->
<div class="row mb-3">
  <div class="col-md-3">
    <img
      src="https://cda.ipb.ac.id/themes/jobfair/images/public/pegadaian-logo.png"
      alt="logo perusahaan"
      class="img-fluid"
    />
  </div>
  <div class="col-sm-7 col-md-6">
    <p class="company-name">PT Pegadaian (Persero)</p>
    <p class="company-address">
      Kota Administrasi Jakarta Selatan, Indonesia
    </p>
  </div>
  <div class="col-sm-2 col-md-3">
    <a href="detail-company.html" class="button button-blue"
      >DETAIL PERUSAHAAN</a
    >
  </div>
</div>
<!-- list lowongan -->
<div class="table-responsive">
  <table class="table table-borderless">
    <tbody>
      <tr>
        <td>1. Another Job</td>
        <td style="width: 150px">
          <a
            href="#"
            onclick="alert('Masuk ke halaman vacancy website CDA')"
            class="button button-blue"
            style="padding: 5px !important"
            >Lamar</a
          >
        </td>
      </tr>
      <tr>
        <td>2. Another Second Job</td>
        <td style="width: 150px">
          <a
            href="#"
            onclick="alert('Masuk ke halaman vacancy website CDA')"
            class="button button-blue"
            style="padding: 5px !important"
            >Lamar</a
          >
        </td>
      </tr>
    </tbody>
  </table>
</div>
<hr class="mb-3 d-block" />
<div style="height: 20px;"></div>
`;

document.querySelector('#company-vacancy').innerHTML = companyVacancy.repeat(5);
