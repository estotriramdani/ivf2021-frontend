AOS.init();

const expoCompanies = [
  {
    id: 1,
    title: 'No Data',
    image: 'no-data',
    link: '#',
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