AOS.init();

const careerExpoCompanies = [
  {
    id: 1,
    title: 'PT. ASURANSI ADIRA DINAMIKA, TBK',
    image: 'pt-asuransi-adira-dinamika-tbk.png',
    link: 'company-detail/pt-asuransi-adira-dinamika-tbk.html',
    width: '200',
  },
  {
    id: 2,
    title: 'PT. Malindo Feedmill, Tbk',
    image: 'pt-malindo-feedmill-tbk.png',
    link: 'company-detail/pt-malindo-feedmill-tbk.html',
    width: '200',
  },
  {
    id: 3,
    title: 'PT Indofood CBP Sukses Makmur,Tbk-Noodle Division',
    image: 'pt-indofood-cbp-sukses-makmur-tbk-noodle-division.png',
    link: 'company-detail/pt-indofood-cbp-sukses-makmur-tbk-noodle-division.html',
    width: '200',
  },
  {
    id: 4,
    title: 'PT ELEVENIA DIGITAL TEKNOLOKI SUKSES',
    image: 'pt-elevenia-digital-teknologi-sukses.jpg',
    link: 'company-detail/pt-elevenia-digital-teknologi-sukses.html',
    width: '300',
  },
  {
    id: 6,
    title: 'PT Bumi Rasa Pangan Utama',
    image: 'pt-bumi-rasa-pangan-utama.png',
    link: 'company-detail/pt-bumi-rasa-pangan-utama.html',
    width: '200',
  },
  {
    id: 6,
    title: 'Coca-Cola Europacific Partners Indonesia (CCEP Indonesia)',
    image: 'coca-cola-europacific-partners-indonesia.png',
    link: 'company-detail/coca-cola-europacific-partners-indonesia.html',
    width: '300',
  },
  {
    id: 7,
    title: 'Bina Nusanatara Group',
    image: 'bina-nusantara-group.png',
    link: 'company-detail/bina-nusantara-group.html',
    width: '200',
  },
  {
    id: 8,
    title: 'PT Sanghiang Perkasa (Kalbe Nutritionals)',
    image: 'pt-sanghiang-perkata-kalbe-nutritionals.png',
    link: 'company-detail/pt-sanghiang-perkata-kalbe-nutritionals.html',
    width: '200',
  },
  {
    id: 9,
    title: 'PT. GMZ BIOMEGA UTAMA',
    image: 'pt-gmz-biomega-utama.png',
    link: 'company-detail/pt-gmz-biomega-utama.html',
    width: '200',
  },
  {
    id: 9,
    title: 'PT. GMZ BIOMEGA UTAMA',
    image: 'pt-gmz-biomega-utama.png',
    link: 'company-detail/pt-gmz-biomega-utama.html',
    width: '200',
  },
];

careerExpoCompanies.sort((a, b) =>
  a.width < b.width ? 1 : b.width < a.width ? -1 : 0
);

let careerExpo = '';
careerExpoCompanies.forEach((career) => {
  careerExpo += companyCardGenerator(
    career.title,
    career.link,
    career.image,
    career.width
  );
});

document.getElementById('company-card-wrapper').innerHTML = careerExpo;
