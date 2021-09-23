AOS.init();

const firstDay = [
  {
    id: 1,
    time: '13.00-15.00 WIB',
    title: 'Cara Memperoleh Kerja, Seluk Beluk Dunia Kerja',
    company: 'Sekolah Karir 1',
    link: '',
  },
];

const secondDay = [
  {
    id: 1,
    time: '13.00-15.00 WIB',
    title: 'Personal Branding melalui CV dan Media Sosial',
    company: 'Top Karir',
    link: '',
  },
  {
    id: 2,
    time: '19.00-21.00 WIB',
    title: 'Pengenalan Diri dan Assessment Minat Karir',
    company: 'Vooya',
    link: '',
  },
];

const thirdDay = [
  {
    id: 1,
    time: '19.00-21.00 WIB',
    title: 'Interview and Grooming',
    company: 'Sekolah Karir 2',
    link: '',
  },
];

const fourthDay = [
  {
    id: 1,
    time: '13.00-15.00 WIB',
    title: 'Employee Experience',
    company: 'SVB Academy',
    link: '',
  },
];

const fifthDay = [
  {
    id: 1,
    time: '19.00 -21.00 WIB',
    title: 'Peluang Karir Agrobisnis di Multinasional Companies',
    company: '3C Virtual Human Capital',
    link: '',
  },
];

const days = [
  {
    id: 0,
    day: 'Senin, 4 Oktober 2021',
  },
  {
    id: 1,
    day: 'Jumat, 8 Oktober 2021',
  },
  {
    id: 2,
    day: 'Senin, 11 Oktober 2021',
  },
  {
    id: 3,
    day: 'Sabtu, 16 Oktober 2021',
  },
  {
    id: 4,
    day: 'Senin, 18 Oktober 2021',
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
