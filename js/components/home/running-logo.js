function runningLogoGenerator(logo, title) {
  return `<img
  src="img/logo/${logo}"
  alt="${title}"
/>`;
}
let companiesFullHTML = '';
let i = 0;
companiesFull.forEach((company) => {
  companiesFullHTML +=
    runningLogoGenerator(company.image, company.title) + '<br/>';
});
const runningLogoHTML = `
<div class="row justify-content-center">
  <div class="col-md-8">
    <div class="slider-logo-home">
      ${companiesFullHTML}
    </div>
  </div>
</div>
`;

document.querySelector('.running-logo').innerHTML = runningLogoHTML;
