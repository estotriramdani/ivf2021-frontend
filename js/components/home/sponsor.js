const sponsorOne = `
<a href="company-detail.html">
  <img
    src="logo/linkaja.png"
    alt="logo LinkAja"
    class="img-fluid"
  />
</a>
`;



const sponsorHTML = `
<div class="row justify-content-center px-4">
  <div class="col-6 col-md-3 col-lg-4">
    ${sponsorOne}
  </div>
</div>
`;

document.querySelector('.sponsor-image').innerHTML = sponsorHTML;
