AOS.init();

const careerExpoCompanies = [
  {
    id: 1,
    title: 'Innojam',
    image: 'http://dummyimage.com/300x400.png/cc0000/ffffff',
    link: 'company-detail.html',
  },
  {
    id: 2,
    title: 'Realbuzz',
    image: 'http://dummyimage.com/300x400.png/ff4444/ffffff',
    link: 'company-detail.html',
  },
  {
    id: 3,
    title: 'Feedfish',
    image: 'http://dummyimage.com/300x400.png/dddddd/000000',
    link: 'company-detail.html',
  },
  {
    id: 4,
    title: 'Devcast',
    image: 'http://dummyimage.com/300x400.png/ff4444/ffffff',
    link: 'company-detail.html',
  },
  {
    id: 5,
    title: 'Edgeify',
    image: 'http://dummyimage.com/300x400.png/ff4444/ffffff',
    link: 'company-detail.html',
  },
  {
    id: 6,
    title: 'Oba',
    image: 'http://dummyimage.com/300x400.png/5fa2dd/ffffff',
    link: 'company-detail.html',
  },
  {
    id: 7,
    title: 'Rhynyx',
    image: 'http://dummyimage.com/300x400.png/dddddd/000000',
    link: 'company-detail.html',
  },
  {
    id: 8,
    title: 'Miboo',
    image: 'http://dummyimage.com/300x400.png/ff4444/ffffff',
    link: 'company-detail.html',
  },
  {
    id: 9,
    title: 'Centimia',
    image: 'http://dummyimage.com/300x400.png/dddddd/000000',
    link: 'company-detail.html',
  },
  {
    id: 10,
    title: 'Roombo',
    image: 'http://dummyimage.com/300x400.png/cc0000/ffffff',
    link: 'company-detail.html',
  },
];

let careerExpo = '';
careerExpoCompanies.forEach((career) => {
  careerExpo += companyCardGenerator(career.title, career.link, career.image);
});

document.getElementById('company-card-wrapper').innerHTML = careerExpo;
