AOS.init();

const vacancies = [
  {
    id: 1,
    name: 'PT Elevenia Digital Teknologi Sukses',
    logo: 'pt-elevenia-digital-teknologi-sukses.jpg',
    link: 'company-detail/pt-elevenia-digital-teknologi-sukses.html',
    address: 'Kota Administrasi Jakarta Pusat , DKI Jakarta',
    vacancies: [
      {
        id: 1,
        position: 'Technology Development Program',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4350/technology-development-program',
      },
      {
        id: 2,
        position: 'Data Development Program-Data Science and Analytics',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4348/data-development-program-data-science-and-analytics',
      },
      {
        id: 3,
        position: 'Data Development Program-Data Engineer',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4349/data-development-program-data-engineer',
      },
    ],
  },
  {
    id: 2,
    name: 'PT. ASURANSI ADIRA DINAMIKA, TBK',
    logo: 'pt-asuransi-adira-dinamika-tbk.png',
    link: 'company-detail/pt-asuransi-adira-dinamika-tbk.html',
    address: 'Kota Administrasi Jakarta Pusat , DKI Jakarta',
    vacancies: [
      {
        id: 1,
        position: 'Next Talent of Zurich ANTZ',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4338/next-talent-of-zurich-antz',
      },
    ],
  },
  {
    id: 3,
    name: 'PT Indofood CBP Sukses Makmur,Tbk-Noodle Division',
    logo: 'pt-indofood-cbp-sukses-makmur-tbk-noodle-division.png',
    link: 'company-detail/pt-indofood-cbp-sukses-makmur-tbk-noodle-division.html',
    address: 'Kota Administrasi Jakarta Utara , DKI Jakarta',
    vacancies: [
      {
        id: 1,
        position: 'MT Accounting',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4346/mt-accounting',
      },
      {
        id: 2,
        position: 'MT PPIC',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4345/mt-ppic',
      },
      {
        id: 3,
        position: 'MT Produksi dan Teknik',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4344/mt-produksi-dan-teknik',
      },
      {
        id: 4,
        position: 'MT Research and Development',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4343/mt-research-development',
      },
      {
        id: 5,
        position: 'MT Quality Control (QC)',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4342/mt-quality-control-qc',
      },
    ],
  },
  {
    id: 4,
    name: 'PT Wijayaputra Adiperkasa',
    logo: 'pt-wijayaputra-adiperkasa.jpg',
    link: 'company-detail/pt-wijayaputra-adiperkasa.html',
    address: 'Kota Administrasi Jakarta Selatan , DKI Jakarta',
    vacancies: [
      {
        id: 1,
        position: 'Sales Support / Sales Admin',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4364/sales-support--sales-admin',
      },
      {
        id: 2,
        position: 'Accounting Staff',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4363/accounting-staff',
      },
      {
        id: 3,
        position: 'R&D Staff',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4362/r-d-staff',
      },
      {
        id: 4,
        position: 'Technical Service & Marketing Support Staff',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4361/technical-service--marketing-support-staff',
      },
    ],
  },
  {
    id: 5,
    name: 'PT. GMZ Biomega Utama',
    logo: 'pt-gmz-biomega-utama.png',
    link: 'company-detail/pt-gmz-biomega-utama.html',
    address: 'Kota Palembang , Sumatera Selatan',
    vacancies: [
      {
        id: 1,
        position: 'Senior Laboratorium Kultur Jaringan',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4326/senior-laboratorium-kultur-jaringan',
      },
      {
        id: 2,
        position: 'Staff Laboratorium Kultur Jaringan',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4327/staff-laboratorium-kultur-jaringan',
      },
    ],
  },
];

const vacancyListGenerator = (vacancies) => {
  let vacancyList = '';
  vacancies.forEach((vacancy) => {
    vacancyList += `<tr>
    <td>${vacancy.id} - ${vacancy.position}</td>
    <td style="width: 150px">
      <a
        href="${vacancy.link}"
        class="button button-blue"
        target="_blank"
        style="padding: 5px !important"
        >Lamar</a
      >
    </td>
  </tr>`;
  });
  return vacancyList;
};

const companyVacancyGenerator = (vacancies) => `
<div class="row mb-3">
  <div class="col-md-3">
    <img
      src="img/logo/${vacancies.logo}"
      alt="logo perusahaan"
      class="img-fluid"
    />
  </div>
  <div class="col-sm-7 col-md-6">
    <p class="company-name">${vacancies.name}</p>
    <p class="company-address">
      ${vacancies.address}
    </p>
  </div>
  <div class="col-sm-2 col-md-3">
    <a href="${
      vacancies.link
    }" class="button button-blue" onclick="loadingLink(this)"
      >DETAIL PERUSAHAAN</a
    >
  </div>
</div>
<!-- list lowongan -->
<div class="table-responsive">
  <table class="table table-borderless">
    <tbody>
      ${vacancyListGenerator(vacancies.vacancies)}
    </tbody>
  </table>
</div>
<hr class="mb-3 d-block" />
<div style="height: 20px;"></div>
`;

let vacancyList = '';
vacancies.forEach((vacancy) => {
  vacancyList += companyVacancyGenerator(vacancy);
});

document.querySelector('#company-vacancy').innerHTML = vacancyList;
