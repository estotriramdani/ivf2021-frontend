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
