AOS.init();

const vacancies = [
  {
    id: 1,
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
      {
        id: 2,
        position: 'Management Trainee (MT)',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/1686/management-trainee-mt',
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
    <a href="${vacancies.link}" class="button button-blue"
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
