const theCompaniesWrapper = document.getElementById('the-companies-wrapper');

const companies = [
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
  {
    id: 1,
    title: 'Mentai Skuyy',
    image: 'mentai-skuyy.jpg',
    link: 'company-detail/mentai-skuyy.html',
    width: '200',
  },
  {
    id: 1,
    title: 'Tayos Fresh',
    image: 'tayos-fresh.jpg',
    link: 'company-detail/tayos-fresh.html',
    width: '200',
  },
  {
    id: 1,
    title: 'Vifara.co',
    image: 'vifara-co.jpg',
    link: 'company-detail/vifara-co.html',
    width: '200',
  },
  {
    id: 1,
    title: 'Hi-Moon',
    image: 'hi-moon.jpg',
    link: 'company-detail/hi-moon.html',
    width: '200',
  },
  {
    id: 1,
    title: 'Gizimate',
    image: 'gizimate.jpg',
    link: 'company-detail/gizimate.html',
    width: '200',
  },
  {
    id: 1,
    title: 'AIESEC',
    image: 'aiesec.jpg',
    link: 'company-detail/aiesec.html',
    width: '200',
  },
  {
    id: 1,
    title: 'PPM School of Management',
    image: 'ppm-school-of-management.jpg',
    link: 'company-detail/ppm-school-of-management.html',
    width: '200',
  },
  {
    id: 2,
    title: 'Universitas Mercu Buana Jakarta',
    image: 'universitas-mercu-buana-jakarta.jpeg',
    link: 'company-detail/universitas-mercu-buana-jakarta.html',
    width: '200',
  },
  {
    id: 3,
    title: 'Erasmus',
    image: 'erasmus.jpg',
    link: 'company-detail/erasmus.html',
    width: '200',
  },
  {
    id: 4,
    title: 'Leiden University',
    image: 'leiden-unversity.jpg',
    link: 'company-detail/leiden-unversity.html',
    width: '200',
  },
  {
    id: 5,
    title: 'GROW Dutch Universities Representative (Study in Holland)',
    image: 'grow-ducth-universities-representative.jpg',
    link: 'company-detail/grow-ducth-universities-representative.html',
    width: '200',
  },
];

companies.sort((a, b) => (a.width < b.width ? 1 : b.width < a.width ? -1 : 0));

let expo = '';
companies.forEach((career) => {
  expo += companyCardGenerator(
    career.title,
    career.link,
    career.image,
    career.width
  );
});

theCompaniesWrapper.innerHTML = expo;
