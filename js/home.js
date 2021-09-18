const footer = `
<div class="container">
        <div class="row">
          <div class="col-md-3 order-3 order-md-1 mt-3 mt-lg-0">
            <div class="row">
              <div class="col-6">
                <img
                  src="https://cda.ipb.ac.id/themes/jobfair/images/resource/ipb.png"
                  alt="Logo IPB"
                  class="img-fluid"
                />
              </div>
              <div class="col-6">
                <img
                  src="https://cda.ipb.ac.id/themes/jobfair/images/resource/logo_jobfair.png"
                  alt="Logo CDA IPB"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6 text-white order-1 order-md-2">
            <p>
              Gedung Andi Hakim Nasoetion Lt. 1 Kampus IPB Dramaga <br />
              Kabupaten Bogor Jawa Barat 16680<br />
              0251-8423507<br />
              cda@apps.ipb.ac.id (Jobseeker)<br />
              cdaipb@apps.ipb.ac.id (Companies)
            </p>
          </div>
          <div class="col-md order-2 order-md-3">
            <div class="d-flex justify-content-between d-lg-inline-block">
              <a
                class="text-white decoration-none fs-1"
                href="https://www.facebook.com/cdaipb"
                ><i class="bi bi-facebook"></i
              ></a>
              <a
                class="text-white decoration-none fs-1"
                href="https://www.linkedin.com/in/cda-ipb-25345a118/"
                ><i class="bi bi-linkedin"></i
              ></a>
              <a
                class="text-white decoration-none fs-1"
                href="http://twitter.com/CDA_IPB"
                ><i class="bi bi-twitter"></i
              ></a>
              <a
                class="text-white decoration-none fs-1"
                href="https://www.instagram.com/cda_ipb/"
                ><i class="bi bi-instagram"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
`;

const footerNode = document.querySelector('footer');
footerNode.innerHTML = footer;

$('.slider-logo-home').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 325,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

AOS.init();
