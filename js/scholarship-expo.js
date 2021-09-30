AOS.init();

const expoCompanies = [
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
    image: 'universitas-mercu-buana-jakarta.jpg',
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

expoCompanies.sort((a, b) =>
  a.width < b.width ? 1 : b.width < a.width ? -1 : 0
);

let expo = '';
expoCompanies.forEach((career) => {
  expo += companyCardGenerator(
    career.title,
    career.link,
    career.image,
    career.width
  );
});

document.getElementById('company-card-wrapper').innerHTML = expo;
