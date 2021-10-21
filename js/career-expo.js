AOS.init();

careerExpo.sort((a, b) => (a.width < b.width ? 1 : b.width < a.width ? -1 : 0));

let expo = '';
let c = 0;
careerExpo.forEach((career) => {
  let breaking = '';
  if (c < careerExpo.length - 1) {
    if (parseFloat(careerExpo[c].width) > parseFloat(careerExpo[c + 1].width)) {
      breaking = `<div style="flex-basis: 100%; height: 0;"></div>`;
    }
  }
  expo += companyCardGenerator(
    career.title,
    career.link,
    career.image,
    career.width
  );
});

document.getElementById('company-card-wrapper').innerHTML = expo;
