AOS.init();

const vacancies = [
  {
    id: 0,
    name: 'LinkAja',
    logo: 'linkaja.png',
    link: 'company-detail/linkaja.html',
    address: 'Kota Administrasi Jakarta Selatan , DKI Jakarta',
    vacancies: [
      {
        id: 1,
        position: 'SDET & QA Assurance',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4424/sdet--qa-assurance',
      },
      {
        id: 2,
        position: 'IT Security Engineer',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4425/it-security-engineer',
      },
     
    ],
  },
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
  {
    id: 6,
    name: 'PT. Inspirasi Masuk Kampus',
    logo: 'pt-inspirasi-masuk-kampus.jpeg',
    link: 'company-detail/pt-inspirasi-masuk-kampus.html',
    address: 'Kota Administrasi Jakarta Selatan, Indonesia',
    vacancies: [
      {
        id: 1,
        position: 'Online Teacher Fisika - Part time',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4409/online-teacher-fisika-parttime',
      },
      {
        id: 2,
        position: 'Online Teacher Matematika - Part time',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4408/online-teacher-matematika-parttime',
      },
      {
        id: 3,
        position: 'Web Developer (Fullstack)',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4407/web-developer-fullstack',
      },
      {
        id: 4,
        position: ' Staf Akademik Matematika - Freelance',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4406/staf-akademik-matematika-freelance',
      },
      {
        id: 5,
        position: 'Program Director',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4405/program-director',
      },
    ],
  },
  {
    id: 7,
    name: 'Great Giant Foods',
    logo: 'pt-great-giant-pineapple.png',
    link: 'company-detail/pt-great-giant-pineapple.html.html',
    address: 'Kota Administrasi Jakarta Selatan, Indonesia',
    vacancies: [
      {
        id: 1,
        position: 'Leadership Acceleration Program',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4390/leadership-acceleration-program',
      },
    ],
  },
  
  {
    id: 8,
    name: 'PT Kasen Indonesia',
    logo: 'pt-kasen-indonesia.png',
    link: 'company-detail/pt-kasen-indonesia.html',
    address: 'Kabupaten Bekasi, Indonesia',
    vacancies: [
      {
        id: 1,
        position: 'Staff Marketing',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4410/staff-marketing',
      },
    ],
  },
  {
    id: 9,
    name: 'PT Sanghiang Perkasa (Kalbe Nutritionals)',
    logo: 'pt-sanghiang-perkata-kalbe-nutritionals.png',
    link: 'company-detail/pt-sanghiang-perkata-kalbe-nutritionals.html',
    address: 'Kota Administrasi Jakarta Utara , DKI Jakarta',
    vacancies: [
      {
        id: 1,
        position: 'Business Representative',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4376/business-representative',
      },
      {
        id: 2,
        position: 'Brand Manager',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4379/brand-manager',
      },
      {
        id: 3,
        position: 'Business Partner Trainer',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4380/business-partner-trainer',
      },
      {
        id: 4,
        position: 'Medical Account Executive',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4381/medical-account-executive',
      },
      {
        id: 5,
        position: 'Management Trainee',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4382/management-trainee',
      },
    ],
  },
  {
    id: 10,
    name: 'PT Web Media Technology Indonesia (Niagahoster)',
    logo: 'niagahoster.jpeg',
    link: 'company-detail/niagahoster.html',
    address: 'Kabupaten Sleman , Daerah Istimewa Yogyakarta',
    vacancies: [
      {
        id: 1,
        position: 'SEO Content Writer (Technical)',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4397/seo-content-writer-technical',
      },
      {
        id: 2,
        position: 'Customer Success Specialist - Global Team (English Speaker)',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4400/customer-success-specialist--global-team-english-speaker',
      },
      {
        id: 3,
        position: 'Full Stack Developer',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4395/full-stack-developer',
      },
      {
        id: 4,
        position: 'Affiliate Marketing Specialist',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4394/affiliate-marketing-specialist',
      },
      {
        id: 5,
        position: 'Customer Success Specialist - Local Team',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4393/customer-success-specialist--local-team',
      },
      {
        id: 6,
        position: 'Outreach Specialist',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4392/outreach-specialist',
      },
      {
        id: 7,
        position: 'Influencer Marketing Associate',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4391/influencer-marketing-associate',
      },
    ],
  },
  {
    id: 11,
    name: 'PT. Malindo Feedmill, Tbk',
    logo: 'pt-malindo-feedmill-tbk.png',
    link: 'company-detail/pt-malindo-feedmill-tbk.html',
    address: 'Kota Administrasi Jakarta Selatan , DKI Jakarta',
    vacancies: [
      {
        id: 1,
        position: 'Staff Purchasing',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4354/staff-purchasing',
      },
      {
        id: 2,
        position: 'Dokter Hewan',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4351/dokter-hewan',
      },
      {
        id: 3,
        position: 'Marketing Staff (Day old chick)',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4355/marketing-staff-day-old-chick',
      },
      {
        id: 4,
        position: ' Sr. Staff HRD (Cikarang)',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4356/sr-staff-hrd-cikarang',
      },
      {
        id: 5,
        position: 'SPV Farm',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4356/sr-staff-hrd-cikarang',
      },
      {
        id: 6,
        position: 'SPV Project',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4358/spv-project',
      },
      {
        id: 7,
        position: 'Dokter Hewan (Asst. Manager)',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4359/dokter-hewan-asst-manager',
      },
      {
        id: 8,
        position: 'Manager Technical Sales',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4360/manager-technical-sales',
      },
      {
        id: 9,
        position: 'Staff Finance',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4353/staff-finance',
      },
      {
        id: 10,
        position: 'Staff Acoounting (Lampung/Cikarang)',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4352/staff-acoounting-lampung-cikarang',
      },
      
    ],
  },
  {
    id: 12,
    name: 'Bina Nusantara Group',
    logo: 'bina-nusantara-group.png',
    link: 'company-detail/bina-nusantara-group.html',
    address: 'Kota Administrasi Jakarta Barat , DKI Jakarta',
    vacancies: [
      {
        id: 1,
        position: 'Learning Partner & Operation Staff',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4368/learning-partner--operation-staff',
      },
      {
        id: 2,
        position: 'Marketing Staff',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4369/marketing-staff',
      },
      {
        id: 3,
        position: 'Faculty Member BINUS University',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4370/faculty-member-binus-university',
      },
      {
        id: 4,
        position: 'Senior Researcher',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4371/senior-researcher',
      },
      {
        id: 5,
        position: 'Data Scientist Officer',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4367/data-scientist-officer',
      },
      {
        id: 6,
        position: 'System Analyst',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4366/system-analyst',
      },
      {
        id: 7,
        position: 'Senior Programmer',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4365/senior-programmer',
      },
      {
        id: 8,
        position: 'Laboratory Coordinator Computer Science (BINUS @Senayan)',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4372/laboratory-coordinator-computer-science-binus-%40senayan',
      },
      {
        id: 9,
        position: 'Student Advisory & Support Center Manager (BINUS @Alam Sutera)',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4373/student-advisory--support-center-manager-binus-%40alam-sutera',
      },
      {
        id: 10,
        position: 'Operation Staff',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4374/operation-staff',
      },
    ],
  },
  {
    id: 13,
    name: 'Coca-Cola Europacific Partners Indonesia (CCEP Indonesia)',
    logo: 'coca-cola-europacific-partners-indonesia.png',
    link: 'company-detail/coca-cola-europacific-partners-indonesia.html',
    address: 'Kota Administrasi Jakarta Selatan , DKI Jakarta',
    vacancies: [
      {
        id: 1,
        position: 'Graduate Trainee Program (Sales Modern Trade)',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4398/graduate-trainee-program-sales-modern-trade',
      },
      {
        id: 2,
        position: 'Graduate Trainee Program (Human Resources)',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4399/graduate-trainee-program-human-resources',
      },
      {
        id: 3,
        position: 'Graduate Trainee Program (Sales General Trade)',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4396/graduate-trainee-program-sales-general-trade',
      },
      {
        id: 4,
        position: 'Graduate Trainee Program (Marketing)',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4387/graduate-trainee-program-marketing',
      },
      {
        id: 5,
        position: 'Graduate Trainee Program (Finance & Governance)',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4386/graduate-trainee-program-finance--governance',
      },
      {
        id: 6,
        position: 'Graduate Trainee Program (Information Technology)',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4385/graduate-trainee-program-information-technology',
      },
      {
        id: 7,
        position: 'Graduate Trainee Program (Route to Market)',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4384/graduate-trainee-program-route-to-market',
      },
      {
        id: 8,
        position: 'Graduate Trainee Program (Supply Chain)',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4383/graduate-trainee-program-supply-chain',
      },
    ],
  },
  {
    id: 14,
    name: 'PT Ravindo Sukses Mulia',
    logo: 'ravindo.jpg',
    link: 'https://cda.ipb.ac.id/member/employer/view/53566/pt-ravindo-sukses-mulia',
    address: 'Kota Bogor , Jawa Barat',
    vacancies: [
      {
        id: 1,
        position: 'Export Management Intenrship',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4403/export-management-intenrship',
      },
      {
        id: 2,
        position: 'Digital Marketing Intenship',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4404/digital-marketing-intenship',
      },
      {
        id: 3,
        position: 'Retail Management Internship',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4402/retail-management-internship',
      },
      {
        id: 4,
        position: 'Nursery Management Internship',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4401/nursery-management-internship',
      },
    ],
  },
  {
    id: 15,
    name: 'PT Jimmagro Inter Mulya',
    logo: 'pt-jimmagro-inter-mulya.png',
    link: 'company-detail/pt-jimmagro-inter-mulya.html',
    address: 'Kota Administrasi Jakarta Selatan , DKI Jakarta',
    vacancies: [
      {
        id: 1,
        position: 'Mandor Hortikultura',
        link: 'Mandor Hortikultura',
      },
    ],
  },
  {
    id: 16,
    name: 'Astra Credit Companies',
    logo: 'astra-credit-companies.jpg',
    link: '#',
    address: 'Kota Administrasi Jakarta Selatan , DKI Jakarta',
    vacancies: [
      {
        id: 1,
        position: 'Junior Leadership Development Program',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4412/junior-leadership-development-program',
      },
    ],
  },
  {
    id: 16,
    name: 'PT Majapahit Samudra Jaya',
    logo: 'pt-majapahit-samudra-jaya.jpg',
    link: 'company-detail/pt-majapahit-samudra-jaya.html',
    address: 'Kota Administrasi Jakarta Pusat , DKI Jakarta',
    vacancies: [
      {
        id: 1,
        position: 'Management Development Program for PT Majapahit Samudra Jaya',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4417/management-development-program-for-pt-majapahit-samudra-jaya',
      },
    ],
  },
  {
    id: 17,
    name: 'PT. Dharma Satya Nusantara, Tbk (DSN Group)',
    logo: 'pt-dharma-satya-nusantara-tbk.jpg',
    link: 'company-detail/pt-dharma-satya-nusantara-tbk.html',
    address: 'Kabupaten Temanggung , Jawa Tengah',
    vacancies: [
      {
        id: 1,
        position: 'DSN Falcataria Trainee',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4416/dsn-falcataria-trainee',
      },

    ],
  },
  {
    id: 18,
    name: 'Group M',
    logo: 'groupm.jpg',
    link: 'company-detail/group-m.html',
    address: 'Kota Administrasi Jakarta Selatan , DKI Jakarta',
    vacancies: [
      {
        id: 1,
        position: 'Media Masters',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4423/media-masters',
      },
    ],
  },
  {
    id: 19,
    name: 'PT. Indogal Agro Trading',
    logo: 'pt-indogal-agro-trading.jpg',
    link: 'company-detail/pt-indogal-agro-trading.html',
    address: 'Kota Administrasi Jakarta Selatan , DKI Jakarta',
    vacancies: [
      {
        id: 1,
        position: 'Butcher',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4422/butcher',
      },
      {
        id: 2,
        position: 'Staff Meat & Butchery',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4422/butcher',
      },
      {
        id: 3,
        position: 'Staff Veterinary & Animal Husbandry',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4420/staff-veterinary--animal-husbandry',
      },
      {
        id: 4,
        position: 'Staff Breeding & Genetic31',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4418/staff-breeding--genetic',
      },
      {
        id: 5,
        position: 'Technical Sales Executive (Ruminansia)',
        link: 'https://cda.ipb.ac.id/vacancy/site/view/4419/technical-sales-executive-ruminansia',
      },
    ],
  },
  /*{
    id: ,
    name: '',
    logo: '',
    link: 'company-detail/.html',
    address: '',
    vacancies: [
      {
        id: 1,
        position: '',
        link: '',
      },
      {
        id: 2,
        position: '',
        link: '',
      },
    ],
  },*/
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
