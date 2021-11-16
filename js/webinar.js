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
    link: '#tutup',
  },
  {
    id: 2,
    time: '11.00 - 12.00',
    title: 'GGF Graduates Program',
    company: 'PT. Great Giant Pineapple',
    link: '#tutup',
  },
  {
    id: 3,
    time: '13.30 - 14.30',
    title: 'Start Data Career with EDTS',
    company: 'PT. Elevenia Digital Teknologi Sukses',
    link: '#tutup',
  },
];

const secondDay = [
  {
    id: 1,
    time: '9.30 - 10.30',
    title: 'Preparing & Exploring career',
    company: 'CDA IPB',
    link: '#tutup',
  },
  {
    id: 2,
    time: '11.00 - 12.00',
    title: 'How to Kickstart Your Career in Digital Industry',
    company: 'PT Web Media Technology Indonesia (Niagahoster)',
    link: '#tutup',
  },
  {
    id: 3,
    time: '13.30 - 14.30',
    title: 'Life at Start Up: Boost your career in Tech Company',
    company: 'Fuse',
    link: '#tutup',
  },
];

const thirdDay = [
  {
    id: 1,
    time: '9.30 - 10.30',
    title: 'Info session Scholarship MM di PPM School of Management',
    company: 'PPM School of Management',
    link: 'https://cda.ipb.ac.id/eventlist/site/view/52',
  },
  {
    id: 2,
    time: '11.00 - 12.00',
    title: 'Start Your Journey With Us',
    company: 'PT Indogal Agro Trading',
    link: 'https://cda.ipb.ac.id/eventlist/site/view/49',
  },
  {
    id: 3,
    time: '13.30 - 14.30',
    title: 'Berkarya untuk Nusantara bersama LinkAja',
    company: 'LinkAja',
    link: 'https://cda.ipb.ac.id/eventlist/site/view/51',
  },
];

const fourthDay = [
  {
    id: 1,
    time: '9.30 - 10.30',
    title: 'A simple way to make your CV attractive and stand out',
    company: 'PT Home Center Indonesia',
    link: 'https://cda.ipb.ac.id/eventlist/site/view/55',
  },
  {
    id: 2,
    time: '11.00 - 12.00',
    title: 'Wujudkan Impian dengan Ikut Beasiswa LPDP',
    company: 'LPDP',
    link: 'https://cda.ipb.ac.id/eventlist/site/view/44',
  },
  {
    id: 3,
    time: '13.30 - 14.30',
    title: 'Presentasi Perusahaan dan Seminar Online',
    company: 'PT. Malindo Feedmill, Tbk',
    link: 'https://cda.ipb.ac.id/eventlist/site/view/46',
  },
];

const fifthDay = [
  {
    id: 1,
    time: '9.30 - 10.30',
    title: 'JLDP Recruitment Process and Alumni Sharing',
    company: 'Astra Credit Companies',
    link: 'https://cda.ipb.ac.id/eventlist/site/view/56',
  },
  {
    id: 2,
    time: '11.00 - 12.00',
    title: 'Study and Scholarship Opportunities in the Netherlands',
    company: 'Nuffic Neso',
    link: 'https://cda.ipb.ac.id/eventlist/site/view/47',
  },
  {
    id: 3,
    time: '13.30 - 14.30',
    title: 'Study in the Netherlands',
    company: 'GROW Dutch',
    link: 'https://cda.ipb.ac.id/eventlist/site/view/54',
  },
];
const sixthDay = [
  {
    id: 1,
    time: '9.30 - 10.30',
    title: 'Study in the Netherlands at Leiden University',
    company: 'Leiden University',
    link: 'https://cda.ipb.ac.id/eventlist/site/view/53',
  },
  {
    id: 2,
    time: '11.00 - 12.00',
    title: 'The Importance of Internship Abroad in Post-Pandemic Era',
    company: 'AIESEC',
    link: 'https://cda.ipb.ac.id/eventlist/site/view/61',
  },
  {
    id: 3,
    time: '13.30 - 14.30',
    title: 'Erasmus Scholarship Information',
    company: 'Erasmus',
    link: 'https://cda.ipb.ac.id/eventlist/site/view/57',
  },
];
const seventhDay = [
  
  {
    id: 2,
    time: '11.00 - 12.00',
    title: 'What&lsquo;s the Culture like to Work in Education Industry',
    company: 'Bina Nusantara Group',
    link: 'https://cda.ipb.ac.id/eventlist/site/view/42',
  },
  
];
const eigthDay = [
  {
    id: 1,
    time: '10.30 - 11.30',
    title: 'DSN Goes To Campus : Build Your Career Up!',
    company: 'PT. Dharma Satya Nusantara, Tbk',
    link: 'https://cda.ipb.ac.id/eventlist/site/view/50',
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
