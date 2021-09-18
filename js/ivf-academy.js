AOS.init();

const firstDay = [
  {
    id: 1,
    time: '11:49 AM',
    title: "No Man's Land",
    company: 'Divavu',
    link: 'http://salon.com/condimentum/id/luctus.png?donec=quisque&ut=erat&dolor=eros&morbi=viverra&vel=eget&lectus=congue&in=eget&quam=semper&fringilla=rutrum&rhoncus=nulla&mauris=nunc&enim=purus&leo=phasellus&rhoncus=in&sed=felis&vestibulum=donec&sit=semper&amet=sapien&cursus=a&id=libero&turpis=nam&integer=dui&aliquet=proin&massa=leo&id=odio&lobortis=porttitor&convallis=id&tortor=consequat&risus=in&dapibus=consequat&augue=ut&vel=nulla&accumsan=sed&tellus=accumsan&nisi=felis&eu=ut&orci=at&mauris=dolor&lacinia=quis&sapien=odio&quis=consequat&libero=varius&nullam=integer&sit=ac&amet=leo&turpis=pellentesque&elementum=ultrices&ligula=mattis',
  },
  {
    id: 2,
    time: '6:53 PM',
    title: 'In Old California',
    company: 'Kare',
    link: 'http://indiatimes.com/imperdiet/sapien.jpg?erat=leo&curabitur=rhoncus&gravida=sed&nisi=vestibulum&at=sit&nibh=amet&in=cursus&hac=id&habitasse=turpis&platea=integer&dictumst=aliquet&aliquam=massa&augue=id&quam=lobortis&sollicitudin=convallis&vitae=tortor&consectetuer=risus&eget=dapibus&rutrum=augue&at=vel&lorem=accumsan&integer=tellus&tincidunt=nisi&ante=eu&vel=orci&ipsum=mauris&praesent=lacinia&blandit=sapien&lacinia=quis&erat=libero&vestibulum=nullam&sed=sit&magna=amet&at=turpis&nunc=elementum&commodo=ligula&placerat=vehicula&praesent=consequat&blandit=morbi&nam=a&nulla=ipsum&integer=integer&pede=a',
  },
  {
    id: 3,
    time: '3:13 AM',
    title: 'Trailer Park Boys: Countdown to Liquor Day',
    company: 'Livetube',
    link: 'http://nationalgeographic.com/nisl/venenatis/lacinia/aenean/sit/amet.html?luctus=eget&et=eros&ultrices=elementum&posuere=pellentesque&cubilia=quisque&curae=porta&mauris=volutpat&viverra=erat&diam=quisque&vitae=erat&quam=eros&suspendisse=viverra&potenti=eget&nullam=congue&porttitor=eget&lacus=semper&at=rutrum&turpis=nulla&donec=nunc&posuere=purus&metus=phasellus&vitae=in&ipsum=felis&aliquam=donec&non=semper&mauris=sapien&morbi=a&non=libero&lectus=nam&aliquam=dui&sit=proin&amet=leo&diam=odio&in=porttitor&magna=id&bibendum=consequat&imperdiet=in&nullam=consequat&orci=ut&pede=nulla&venenatis=sed&non=accumsan&sodales=felis&sed=ut&tincidunt=at&eu=dolor&felis=quis&fusce=odio&posuere=consequat&felis=varius&sed=integer&lacus=ac&morbi=leo&sem=pellentesque&mauris=ultrices&laoreet=mattis&ut=odio&rhoncus=donec&aliquet=vitae&pulvinar=nisi&sed=nam&nisl=ultrices&nunc=libero&rhoncus=non&dui=mattis&vel=pulvinar&sem=nulla&sed=pede&sagittis=ullamcorper&nam=augue&congue=a&risus=suscipit&semper=nulla&porta=elit&volutpat=ac',
  },
];

const secondDay = [
  {
    id: 1,
    time: '2:40 AM',
    title: 'Night Flier',
    company: 'Trudeo',
    link: 'https://chronoengine.com/posuere/metus/vitae.js?justo=orci&sollicitudin=luctus&ut=et&suscipit=ultrices&a=posuere&feugiat=cubilia&et=curae&eros=nulla&vestibulum=dapibus&ac=dolor&est=vel&lacinia=est&nisi=donec&venenatis=odio&tristique=justo&fusce=sollicitudin&congue=ut&diam=suscipit&id=a&ornare=feugiat&imperdiet=et&sapien=eros&urna=vestibulum&pretium=ac&nisl=est&ut=lacinia&volutpat=nisi&sapien=venenatis&arcu=tristique&sed=fusce&augue=congue&aliquam=diam&erat=id&volutpat=ornare',
  },
  {
    id: 2,
    time: '12:05 AM',
    title: 'Money as Debt',
    company: 'Feedfish',
    link: 'https://wikia.com/ante/ipsum/primis.json?aliquam=fusce&lacus=congue&morbi=diam&quis=id&tortor=ornare&id=imperdiet&nulla=sapien&ultrices=urna&aliquet=pretium&maecenas=nisl&leo=ut&odio=volutpat&condimentum=sapien&id=arcu&luctus=sed',
  },
  {
    id: 3,
    time: '10:35 AM',
    title: 'Licence to Kill',
    company: 'Wikizz',
    link: 'https://parallels.com/amet/eleifend/pede/libero/quis.html?mi=vestibulum&sit=sit&amet=amet&lobortis=cursus&sapien=id&sapien=turpis&non=integer&mi=aliquet&integer=massa&ac=id&neque=lobortis&duis=convallis&bibendum=tortor&morbi=risus&non=dapibus&quam=augue&nec=vel&dui=accumsan&luctus=tellus&rutrum=nisi&nulla=eu&tellus=orci&in=mauris&sagittis=lacinia&dui=sapien&vel=quis&nisl=libero&duis=nullam&ac=sit&nibh=amet&fusce=turpis&lacus=elementum&purus=ligula&aliquet=vehicula&at=consequat&feugiat=morbi&non=a&pretium=ipsum&quis=integer&lectus=a&suspendisse=nibh&potenti=in&in=quis&eleifend=justo&quam=maecenas&a=rhoncus&odio=aliquam&in=lacus&hac=morbi&habitasse=quis&platea=tortor&dictumst=id&maecenas=nulla&ut=ultrices&massa=aliquet&quis=maecenas&augue=leo&luctus=odio&tincidunt=condimentum&nulla=id&mollis=luctus&molestie=nec&lorem=molestie&quisque=sed&ut=justo&erat=pellentesque&curabitur=viverra&gravida=pede&nisi=ac',
  },
];

const thirdDay = [
  {
    id: 1,
    time: '8:36 AM',
    title: 'Fast Five (Fast and the Furious 5, The)',
    company: 'Katz',
    link: 'https://youtu.be/mauris.jsp?odio=in&porttitor=hac&id=habitasse&consequat=platea&in=dictumst&consequat=morbi&ut=vestibulum&nulla=velit&sed=id&accumsan=pretium&felis=iaculis&ut=diam&at=erat&dolor=fermentum&quis=justo&odio=nec&consequat=condimentum&varius=neque&integer=sapien&ac=placerat&leo=ante&pellentesque=nulla&ultrices=justo',
  },
  {
    id: 2,
    time: '8:55 PM',
    title: 'Dickson Greeting',
    company: 'Jabbertype',
    link: 'http://studiopress.com/amet/justo/morbi/ut/odio/cras/mi.aspx?platea=felis&dictumst=sed&aliquam=interdum&augue=venenatis&quam=turpis&sollicitudin=enim&vitae=blandit&consectetuer=mi&eget=in&rutrum=porttitor&at=pede&lorem=justo&integer=eu&tincidunt=massa&ante=donec&vel=dapibus&ipsum=duis&praesent=at&blandit=velit&lacinia=eu&erat=est&vestibulum=congue&sed=elementum&magna=in&at=hac&nunc=habitasse&commodo=platea&placerat=dictumst&praesent=morbi&blandit=vestibulum&nam=velit&nulla=id&integer=pretium&pede=iaculis&justo=diam&lacinia=erat&eget=fermentum&tincidunt=justo&eget=nec&tempus=condimentum&vel=neque&pede=sapien&morbi=placerat&porttitor=ante&lorem=nulla&id=justo&ligula=aliquam&suspendisse=quis&ornare=turpis&consequat=eget',
  },
  {
    id: 3,
    time: '5:51 PM',
    title: 'Comanche Station',
    company: 'Youopia',
    link: 'https://bandcamp.com/vestibulum/sagittis/sapien/cum.jsp?sit=quis&amet=turpis&erat=sed&nulla=ante&tempus=vivamus&vivamus=tortor&in=duis&felis=mattis&eu=egestas&sapien=metus&cursus=aenean&vestibulum=fermentum&proin=donec&eu=ut&mi=mauris&nulla=eget&ac=massa&enim=tempor&in=convallis&tempor=nulla&turpis=neque&nec=libero&euismod=convallis&scelerisque=eget&quam=eleifend',
  },
];

const fourthDay = [
  {
    id: 1,
    time: '6:34 AM',
    title: "Birder's Guide to Everything, A",
    company: 'Wikibox',
    link: 'https://dot.gov/consectetuer.jsp?nunc=quis&vestibulum=libero&ante=nullam&ipsum=sit&primis=amet&in=turpis&faucibus=elementum&orci=ligula&luctus=vehicula&et=consequat&ultrices=morbi&posuere=a&cubilia=ipsum&curae=integer&mauris=a&viverra=nibh&diam=in&vitae=quis&quam=justo&suspendisse=maecenas&potenti=rhoncus&nullam=aliquam&porttitor=lacus&lacus=morbi&at=quis&turpis=tortor&donec=id&posuere=nulla&metus=ultrices&vitae=aliquet&ipsum=maecenas&aliquam=leo&non=odio&mauris=condimentum&morbi=id&non=luctus&lectus=nec&aliquam=molestie&sit=sed&amet=justo&diam=pellentesque&in=viverra&magna=pede&bibendum=ac&imperdiet=diam&nullam=cras&orci=pellentesque&pede=volutpat&venenatis=dui&non=maecenas&sodales=tristique&sed=est&tincidunt=et&eu=tempus&felis=semper&fusce=est&posuere=quam&felis=pharetra&sed=magna&lacus=ac&morbi=consequat&sem=metus&mauris=sapien&laoreet=ut&ut=nunc&rhoncus=vestibulum&aliquet=ante&pulvinar=ipsum&sed=primis&nisl=in&nunc=faucibus&rhoncus=orci&dui=luctus&vel=et&sem=ultrices&sed=posuere&sagittis=cubilia&nam=curae&congue=mauris&risus=viverra&semper=diam&porta=vitae&volutpat=quam&quam=suspendisse',
  },
  {
    id: 2,
    time: '12:10 PM',
    title: 'Star Trek: The Motion Picture',
    company: 'Zoonoodle',
    link: 'http://amazon.com/amet/cursus/id/turpis/integer/aliquet/massa.png?ornare=lectus&imperdiet=in&sapien=est&urna=risus&pretium=auctor&nisl=sed&ut=tristique&volutpat=in&sapien=tempus&arcu=sit&sed=amet&augue=sem&aliquam=fusce&erat=consequat&volutpat=nulla&in=nisl&congue=nunc&etiam=nisl&justo=duis&etiam=bibendum&pretium=felis&iaculis=sed&justo=interdum&in=venenatis&hac=turpis&habitasse=enim&platea=blandit&dictumst=mi&etiam=in&faucibus=porttitor',
  },
  {
    id: 3,
    time: '10:11 AM',
    title: 'Take the High Ground!',
    company: 'Tagtune',
    link: 'https://seesaa.net/in/imperdiet/et/commodo/vulputate/justo.xml?volutpat=morbi&eleifend=vel&donec=lectus&ut=in&dolor=quam&morbi=fringilla&vel=rhoncus&lectus=mauris&in=enim&quam=leo&fringilla=rhoncus&rhoncus=sed&mauris=vestibulum&enim=sit&leo=amet&rhoncus=cursus&sed=id&vestibulum=turpis&sit=integer&amet=aliquet&cursus=massa&id=id&turpis=lobortis&integer=convallis&aliquet=tortor&massa=risus&id=dapibus&lobortis=augue&convallis=vel&tortor=accumsan&risus=tellus&dapibus=nisi&augue=eu&vel=orci&accumsan=mauris&tellus=lacinia&nisi=sapien&eu=quis&orci=libero&mauris=nullam&lacinia=sit&sapien=amet&quis=turpis&libero=elementum&nullam=ligula&sit=vehicula&amet=consequat&turpis=morbi&elementum=a&ligula=ipsum&vehicula=integer&consequat=a&morbi=nibh&a=in&ipsum=quis&integer=justo&a=maecenas&nibh=rhoncus&in=aliquam&quis=lacus&justo=morbi&maecenas=quis&rhoncus=tortor&aliquam=id&lacus=nulla',
  },
];

const fifthDay = [
  {
    id: 1,
    time: '7:10 PM',
    title: 'Black Snake Moan',
    company: 'Leexo',
    link: 'http://sitemeter.com/rhoncus/aliquet/pulvinar/sed/nisl/nunc.json?montes=primis&nascetur=in&ridiculus=faucibus&mus=orci&vivamus=luctus&vestibulum=et&sagittis=ultrices&sapien=posuere&cum=cubilia&sociis=curae&natoque=donec&penatibus=pharetra&et=magna&magnis=vestibulum&dis=aliquet&parturient=ultrices&montes=erat&nascetur=tortor&ridiculus=sollicitudin&mus=mi&etiam=sit&vel=amet&augue=lobortis&vestibulum=sapien&rutrum=sapien&rutrum=non&neque=mi&aenean=integer&auctor=ac&gravida=neque&sem=duis&praesent=bibendum&id=morbi&massa=non&id=quam&nisl=nec&venenatis=dui&lacinia=luctus&aenean=rutrum&sit=nulla&amet=tellus&justo=in&morbi=sagittis&ut=dui&odio=vel&cras=nisl&mi=duis&pede=ac&malesuada=nibh&in=fusce&imperdiet=lacus&et=purus&commodo=aliquet&vulputate=at&justo=feugiat&in=non&blandit=pretium',
  },
  {
    id: 2,
    time: '11:02 PM',
    title: 'Yamla Pagla Deewana 2',
    company: 'Tagfeed',
    link: 'http://ocn.ne.jp/lobortis/ligula/sit/amet/eleifend.xml?suspendisse=quis&potenti=augue&in=luctus&eleifend=tincidunt&quam=nulla&a=mollis',
  },
  {
    id: 3,
    time: '2:08 PM',
    title: 'Cold Fish (Tsumetai nettaigyo)',
    company: 'Lazz',
    link: 'http://google.fr/justo.jpg?laoreet=curae&ut=donec&rhoncus=pharetra&aliquet=magna',
  },
];

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
