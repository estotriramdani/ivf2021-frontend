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
  {
    id: 5,
    day: 'Sabtu, 20 November 2021',
  },
  {
    id: 6,
    day: 'Senin, 22 November 2021',
  },
  {
    id: 7,
    day: 'Selasa, 23 November 2021',
  },
];

const firstDay = [
  {
    id: 1,
    time: '9.30 - 10.30',
    title:
      'Unlock your potential and plan your career journey with CCEP Indonesia',
    company: 'Coca-Cola Europacific Partners Indonesia (CCEP Indonesia)',
    link: '#hidden',
  },
  {
    id: 2,
    time: '11.00 - 12.00',
    title: '',
    company: 'PT. Great Giant Pineapple',
    link: '#hidden',
  },
  {
    id: 3,
    time: '13.30 - 14.30',
    title: 'Start Data Career with EDTS',
    company: 'PT. Elevenia Digital Teknologi Sukses',
    link: '#hidden',
  },
];

const secondDay = [
  {
    id: 1,
    time: '9.30 - 10.30',
    title: '',
    company: '',
    link: '#hidden',
  },
  {
    id: 2,
    time: '11.00 - 12.00',
    title: 'How to Kickstart Your Career in Digital Industry',
    company: 'PT Web Media Technology Indonesia (Niagahoster)',
    link: '#hidden',
  },
  {
    id: 3,
    time: '13.30 - 14.30',
    title: '',
    company: '',
    link: '#hidden',
  },
];

const thirdDay = [
  {
    id: 1,
    time: '9.30 - 10.30',
    title: 'Info session Scholarship MM di PPM School of Management',
    company: 'PPM School of Management',
    link: '#hidden',
  },
  {
    id: 2,
    time: '11.00 - 12.00',
    title: 'Start Your Journey With Us',
    company: 'PT Indogal Agro Trading',
    link: '#hidden',
  },
  {
    id: 3,
    time: '13.30 - 14.30',
    title: '',
    company: 'LinkAja',
    link: '#hidden',
  },
];

const fourthDay = [
  {
    id: 1,
    time: '9.30 - 10.30',
    title: '',
    company: 'PT Home Center Indonesia',
    link: '#hidden',
  },
  {
    id: 2,
    time: '11.00 - 12.00',
    title: 'Wujudkan Impian dengan Ikut Beasiswa LPDP',
    company: 'LPDP',
    link: '#hidden',
  },
  {
    id: 3,
    time: '13.30 - 14.30',
    title: 'Presentasi Perusahaan dan Seminar Online',
    company: 'PT. Malindo Feedmill, Tbk',
    link: '#hidden',
  },
];

const fifthDay = [
  {
    id: 1,
    time: '9.30 - 10.30',
    title: '',
    company: 'Astra Credit Companies',
    link: '#hidden',
  },
  {
    id: 2,
    time: '11.00 - 12.00',
    title: 'Study and Scholarship Opportunities in the Netherlands',
    company: 'Nuffic Neso',
    link: '#hidden',
  },
  {
    id: 3,
    time: '13.30 - 14.30',
    title: 'Study in Holland',
    company: 'GROW Dutch',
    link: '#hidden',
  },
];
const sixthDay = [
  {
    id: 1,
    time: '9.30 - 10.30',
    title: 'Study in the Netherlands at Leiden University',
    company: 'Leiden University',
    link: '#hidden',
  },
  {
    id: 2,
    time: '11.00 - 12.00',
    title: '',
    company: '',
    link: '#hidden',
  },
  {
    id: 3,
    time: '13.30 - 14.30',
    title: '',
    company: 'Erasmus',
    link: '#hidden',
  },
];
const seventhDay = [
  
  {
    id: 2,
    time: '11.00 - 12.00',
    title: 'What&lsquo;s the Culture like to Work in Education Industry',
    company: 'Bina Nusantara Group',
    link: '#hidden',
  },
  
];
const eigthDay = [
  {
    id: 1,
    time: '9.30 - 10.30',
    title: 'DSN Goes To Campus : Build Your Career Up!',
    company: 'PT. Dharma Satya Nusantara, Tbk',
    link: '#hidden',
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
  six: tableHTMLGenerator(trLoop(sixthDay)),
  seven: tableHTMLGenerator(trLoop(seventhDay)),
  eight: tableHTMLGenerator(trLoop(eigthDay)),
};

rundownList.innerHTML = trGroup.first;

const tutup = document.querySelectorAll("a[href='#tutup']");
const hidden = document.querySelectorAll("a[href='#hidden']");

changeButtonBehaviour(tutup, hidden);
