AOS.init();

const expoCompanies = [
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
