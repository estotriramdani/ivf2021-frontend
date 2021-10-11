AOS.init();

const days = [
  {
    id: 0,
    day: 'Senin, 15 November 2021',
  },
  {
    id: 1,
    day: 'Selasa, 16 November 2021',
  },
  {
    id: 2,
    day: 'Rabu, 17 November 2021',
  },
  {
    id: 3,
    day: 'Kamis, 18 November 2021',
  },
  {
    id: 4,
    day: 'Jumat, 19 November 2021',
  },
];

const firstDay = [
  {
    id: 1,
    time: '9.30 - 10.30',
    title: "Handling Emotion and Pressure at Work: Managing Yourself as a Professional",
    company: 'Coca-Cola Europacific Partners Indonesia (CCEP Indonesia)',
    link: '#',
  },
  {
    id: 2,
    time: '11.00 - 12.00',
    title: '',
    company: '',
    link: '',
  },
  {
    id: 3,
    time: '13.30 - 14.30',
    title: 'Start Data Career with EDTS',
    company: 'PT. Elevenia Digital Teknologi Sukses',
    link: '#',
  },
];

const secondDay = [
  {
    id: 1,
    time: '9.30 - 10.30',
    title: "",
    company: '',
    link: '',
  },
  {
    id: 2,
    time: '11.00 - 12.00',
    title: '',
    company: 'PT Web Media Technology Indonesia (Niagahoster)',
    link: '#',
  },
  {
    id: 3,
    time: '13.30 - 14.30',
    title: 'What&lsquo;s the Culture like to Work in Education Industry',
    company: 'Bina Nusantara Group',
    link: '',
  },
];

const thirdDay = [
  {
    id: 1,
    time: '9.30 - 10.30',
    title: "Info session Scholarship MM di PPM School of Management",
    company: 'PPM School of Management',
    link: '#',
  },
  {
    id: 2,
    time: '11.00 - 12.00',
    title: '',
    company: '',
    link: '',
  },
  {
    id: 3,
    time: '13.30 - 14.30',
    title: 'Study and Scholarship Opportunities in the Netherlands',
    company: 'Nuffic Neso Indonesia',
    link: '#',
  },
];

const fourthDay = [
  {
    id: 1,
    time: '9.30 - 10.30',
    title: "",
    company: '',
    link: '',
  },
  {
    id: 2,
    time: '11.00 - 12.00',
    title: '',
    company: 'LPDP',
    link: '#',
  },
  {
    id: 3,
    time: '13.30 - 14.30',
    title: 'Presentasi Perusahaan dan Seminar Online',
    company: 'PT. Malindo Feedmill, Tbk',
    link: '#',
  },
];

const fifthDay = [
  {
    id: 1,
    time: '9.30 - 10.30',
    title: "",
    company: '',
    link: '',
  },
  {
    id: 2,
    time: '11.00 - 12.00',
    title: '',
    company: '',
    link: '',
  },
  {
    id: 3,
    time: '13.30 - 14.30',
    title: '',
    company: 'GROW Dutch',
    link: '#',
  },
];

const tables = document.getElementsByClassName('table');
const toggleTables = document.getElementsByClassName('toggle-table');
const rundownList = document.getElementById('rundown-list');
const buttonToggleWrapper = document.getElementById('button-toggle-wrapper');

const spinnerHTML = `
          <div class="spinner-border text-warning" style="width: 3rem; height: 3rem;" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>`;

let buttonToggle = '';
days.forEach((day) => {
  buttonToggle += buttonToggleGenerator(day.day, day.id);
});

buttonToggleWrapper.innerHTML = buttonToggle;

const trGroup = {
  first: tableHTMLGenerator(trLoop(firstDay)),
  second: tableHTMLGenerator(trLoop(secondDay)),
  third: tableHTMLGenerator(trLoop(thirdDay)),
  four: tableHTMLGenerator(trLoop(fourthDay)),
  five: tableHTMLGenerator(trLoop(fifthDay)),
};

rundownList.innerHTML = trGroup.first;
