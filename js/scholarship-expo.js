AOS.init();

scholarExpo.sort((a, b) =>
  a.width < b.width ? 1 : b.width < a.width ? -1 : 0
);

let expo = '';
scholarExpo.forEach((career) => {
  expo += companyCardGenerator(
    career.title,
    career.link,
    career.image,
    career.width
  );
});

document.getElementById('company-card-wrapper').innerHTML = expo;
