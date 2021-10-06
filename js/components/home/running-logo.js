function runningLogoGenerator(logo, title, link) {
  return `<img
  src="img/logo/${logo}"
  alt="${title}"
  />`;
}

let companiesFullHTML = '';
let i = 0;

let companies = [];

companies.push(...careerExpo);
companies.push(...internExpo);
companies.push(...scholarExpo);
companies.push(...entreExpo);

companies.forEach((company) => {
  companiesFullHTML +=
    runningLogoGenerator(company.image, company.title, company.link) + '<br/>';
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
