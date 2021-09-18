const timelineHeadingHTML = `
<h1 class="text-center mb-5" data-aos="fade-up">Timeline Kegiatan</h1>
<div
  class="row justify-content-center mb-3"
  style="position: relative; z-index: 50"
  data-aos="fade-up"
>
  <div class="col-md-6">
    <p class="text-center">
      Untuk mewujudkan misi tersebut, CDA IPB menyelenggarakan IPB
      Virtual Fair 2021 yang dikolaborasikan dengan National Virtual
      Career Hack, dengan rangkaian kegiatan sebagai berikut
    </p>
  </div>
</div>
`;
document.getElementById('timeline-heading').innerHTML = timelineHeadingHTML;

function timelineCardGenerator(date, name) {
  return `<div class="col-md-4 p-3" style="height: 100%;">
    <div class="timeline-card" data-aos="fade-up">
      <div class="timeline-card-icon">
        <i class="bi bi-calendar"></i>
      </div>
      <div class="timeline-card-date mb-3">
        <i class="bi bi-calendar-week-fill"></i> &nbsp; ${date}
      </div>
      <div class="timeline-card-title">
        ${name}
      </div>
    </div>
  </div>
  `;
}

const timelineData = [
  {
    id: 1,
    date: '1-30 Oktober 2021',
    name: '[New] Academy IVF',
  },
  {
    id: 2,
    date: '16-20 Oktober 2021',
    name: 'Career, Internship, Scholarship, [New] Entrepreneurship Expo',
  },
  {
    id: 3,
    date: '16-20 Oktober 2021',
    name: 'Webinarseries',
  },
  {
    id: 4,
    date: '15-19 November 2021',
    name: '[New] Meeting & Chatting with Company ',
  },
];

let fullCard = '';

timelineData.forEach((data) => {
  fullCard += timelineCardGenerator(data.date, data.name);
});

document.getElementById('timeline-card-wrapper').innerHTML = fullCard;
