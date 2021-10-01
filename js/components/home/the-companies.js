const theCompaniesWrapper = document.getElementById('the-companies-wrapper');

companiesFull.sort((a, b) =>
  a.width < b.width ? 1 : b.width < a.width ? -1 : 0
);

let expo = '';
companiesFull.forEach((career) => {
  expo += companyCardGenerator(
    career.title,
    career.link,
    career.image,
    career.width
  );
});

theCompaniesWrapper.innerHTML = expo;
