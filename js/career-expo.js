AOS.init();

const careerExpoCompanies = [
  {
    id: 1,
    title: 'Innojam',
    link: 'https://springer.com/venenatis/tristique/fusce/congue/diam/id/ornare.js?bibendum=aliquet&morbi=ultrices&non=erat&quam=tortor&nec=sollicitudin&dui=mi&luctus=sit&rutrum=amet&nulla=lobortis&tellus=sapien&in=sapien&sagittis=non&dui=mi&vel=integer&nisl=ac&duis=neque&ac=duis&nibh=bibendum&fusce=morbi&lacus=non&purus=quam&aliquet=nec&at=dui&feugiat=luctus&non=rutrum&pretium=nulla&quis=tellus&lectus=in&suspendisse=sagittis&potenti=dui&in=vel&eleifend=nisl&quam=duis&a=ac&odio=nibh&in=fusce&hac=lacus&habitasse=purus&platea=aliquet&dictumst=at&maecenas=feugiat&ut=non&massa=pretium&quis=quis&augue=lectus&luctus=suspendisse&tincidunt=potenti&nulla=in&mollis=eleifend&molestie=quam&lorem=a&quisque=odio&ut=in&erat=hac&curabitur=habitasse&gravida=platea&nisi=dictumst&at=maecenas&nibh=ut&in=massa&hac=quis&habitasse=augue&platea=luctus&dictumst=tincidunt&aliquam=nulla&augue=mollis&quam=molestie&sollicitudin=lorem&vitae=quisque&consectetuer=ut&eget=erat&rutrum=curabitur&at=gravida&lorem=nisi&integer=at&tincidunt=nibh&ante=in&vel=hac&ipsum=habitasse&praesent=platea',
    image: 'http://dummyimage.com/300x400.png/cc0000/ffffff',
  },
  {
    id: 2,
    title: 'Realbuzz',
    link: 'https://comsenz.com/maecenas/tristique/est/et/tempus/semper/est.html?rhoncus=nonummy&sed=integer&vestibulum=non&sit=velit&amet=donec&cursus=diam&id=neque&turpis=vestibulum&integer=eget&aliquet=vulputate&massa=ut&id=ultrices&lobortis=vel&convallis=augue&tortor=vestibulum&risus=ante&dapibus=ipsum&augue=primis&vel=in&accumsan=faucibus&tellus=orci&nisi=luctus&eu=et&orci=ultrices&mauris=posuere&lacinia=cubilia&sapien=curae&quis=donec&libero=pharetra&nullam=magna&sit=vestibulum&amet=aliquet&turpis=ultrices&elementum=erat&ligula=tortor&vehicula=sollicitudin&consequat=mi&morbi=sit&a=amet&ipsum=lobortis',
    image: 'http://dummyimage.com/300x400.png/ff4444/ffffff',
  },
  {
    id: 3,
    title: 'Feedfish',
    link: 'http://feedburner.com/sociis/natoque/penatibus.jpg?integer=euismod&non=scelerisque&velit=quam&donec=turpis&diam=adipiscing&neque=lorem&vestibulum=vitae&eget=mattis&vulputate=nibh&ut=ligula&ultrices=nec&vel=sem&augue=duis&vestibulum=aliquam&ante=convallis&ipsum=nunc&primis=proin&in=at&faucibus=turpis&orci=a&luctus=pede&et=posuere&ultrices=nonummy&posuere=integer&cubilia=non&curae=velit&donec=donec&pharetra=diam&magna=neque&vestibulum=vestibulum&aliquet=eget&ultrices=vulputate&erat=ut&tortor=ultrices&sollicitudin=vel&mi=augue&sit=vestibulum&amet=ante&lobortis=ipsum&sapien=primis&sapien=in&non=faucibus&mi=orci&integer=luctus&ac=et&neque=ultrices&duis=posuere&bibendum=cubilia&morbi=curae&non=donec&quam=pharetra&nec=magna&dui=vestibulum&luctus=aliquet&rutrum=ultrices&nulla=erat&tellus=tortor&in=sollicitudin&sagittis=mi&dui=sit&vel=amet&nisl=lobortis&duis=sapien&ac=sapien&nibh=non&fusce=mi&lacus=integer&purus=ac&aliquet=neque&at=duis&feugiat=bibendum&non=morbi&pretium=non&quis=quam&lectus=nec&suspendisse=dui&potenti=luctus&in=rutrum&eleifend=nulla&quam=tellus&a=in&odio=sagittis&in=dui&hac=vel&habitasse=nisl&platea=duis&dictumst=ac&maecenas=nibh&ut=fusce&massa=lacus&quis=purus&augue=aliquet&luctus=at',
    image: 'http://dummyimage.com/300x400.png/dddddd/000000',
  },
  {
    id: 4,
    title: 'Devcast',
    link: 'http://fotki.com/volutpat.xml?massa=venenatis&donec=lacinia&dapibus=aenean&duis=sit&at=amet&velit=justo&eu=morbi&est=ut&congue=odio&elementum=cras&in=mi&hac=pede&habitasse=malesuada&platea=in&dictumst=imperdiet&morbi=et&vestibulum=commodo&velit=vulputate&id=justo&pretium=in&iaculis=blandit&diam=ultrices&erat=enim&fermentum=lorem&justo=ipsum&nec=dolor&condimentum=sit&neque=amet&sapien=consectetuer&placerat=adipiscing&ante=elit&nulla=proin&justo=interdum&aliquam=mauris&quis=non&turpis=ligula&eget=pellentesque&elit=ultrices&sodales=phasellus&scelerisque=id&mauris=sapien&sit=in&amet=sapien&eros=iaculis&suspendisse=congue&accumsan=vivamus&tortor=metus&quis=arcu&turpis=adipiscing&sed=molestie&ante=hendrerit&vivamus=at&tortor=vulputate&duis=vitae',
    image: 'http://dummyimage.com/300x400.png/ff4444/ffffff',
  },
  {
    id: 5,
    title: 'Edgeify',
    link: 'http://indiegogo.com/non/pretium/quis/lectus.json?vel=viverra&lectus=diam&in=vitae&quam=quam&fringilla=suspendisse&rhoncus=potenti&mauris=nullam&enim=porttitor&leo=lacus&rhoncus=at&sed=turpis&vestibulum=donec&sit=posuere&amet=metus&cursus=vitae&id=ipsum',
    image: 'http://dummyimage.com/300x400.png/ff4444/ffffff',
  },
  {
    id: 6,
    title: 'Oba',
    link: 'http://over-blog.com/nulla/quisque/arcu/libero/rutrum/ac.png?nunc=at&commodo=nulla&placerat=suspendisse&praesent=potenti&blandit=cras&nam=in&nulla=purus&integer=eu&pede=magna&justo=vulputate&lacinia=luctus&eget=cum&tincidunt=sociis&eget=natoque&tempus=penatibus&vel=et&pede=magnis&morbi=dis&porttitor=parturient&lorem=montes&id=nascetur&ligula=ridiculus&suspendisse=mus&ornare=vivamus&consequat=vestibulum&lectus=sagittis&in=sapien&est=cum&risus=sociis&auctor=natoque&sed=penatibus&tristique=et&in=magnis&tempus=dis&sit=parturient&amet=montes&sem=nascetur&fusce=ridiculus&consequat=mus&nulla=etiam&nisl=vel&nunc=augue&nisl=vestibulum&duis=rutrum&bibendum=rutrum&felis=neque&sed=aenean&interdum=auctor&venenatis=gravida&turpis=sem&enim=praesent&blandit=id&mi=massa&in=id&porttitor=nisl&pede=venenatis&justo=lacinia&eu=aenean&massa=sit',
    image: 'http://dummyimage.com/300x400.png/5fa2dd/ffffff',
  },
  {
    id: 7,
    title: 'Rhynyx',
    link: 'http://pagesperso-orange.fr/mauris/sit/amet/eros/suspendisse/accumsan/tortor.jsp?molestie=odio&nibh=curabitur&in=convallis&lectus=duis&pellentesque=consequat&at=dui&nulla=nec&suspendisse=nisi&potenti=volutpat&cras=eleifend&in=donec&purus=ut&eu=dolor&magna=morbi&vulputate=vel&luctus=lectus&cum=in&sociis=quam&natoque=fringilla&penatibus=rhoncus&et=mauris&magnis=enim&dis=leo&parturient=rhoncus&montes=sed&nascetur=vestibulum&ridiculus=sit&mus=amet&vivamus=cursus&vestibulum=id&sagittis=turpis&sapien=integer&cum=aliquet&sociis=massa&natoque=id&penatibus=lobortis&et=convallis&magnis=tortor&dis=risus&parturient=dapibus&montes=augue&nascetur=vel&ridiculus=accumsan&mus=tellus&etiam=nisi&vel=eu&augue=orci&vestibulum=mauris&rutrum=lacinia&rutrum=sapien&neque=quis&aenean=libero&auctor=nullam&gravida=sit&sem=amet&praesent=turpis&id=elementum&massa=ligula&id=vehicula&nisl=consequat&venenatis=morbi&lacinia=a&aenean=ipsum&sit=integer&amet=a&justo=nibh&morbi=in&ut=quis&odio=justo&cras=maecenas&mi=rhoncus&pede=aliquam&malesuada=lacus&in=morbi&imperdiet=quis&et=tortor&commodo=id&vulputate=nulla',
    image: 'http://dummyimage.com/300x400.png/dddddd/000000',
  },
  {
    id: 8,
    title: 'Miboo',
    link: 'http://stanford.edu/ornare.aspx?quam=semper&sapien=est&varius=quam&ut=pharetra&blandit=magna&non=ac&interdum=consequat&in=metus&ante=sapien&vestibulum=ut&ante=nunc&ipsum=vestibulum&primis=ante&in=ipsum&faucibus=primis&orci=in&luctus=faucibus&et=orci&ultrices=luctus&posuere=et&cubilia=ultrices&curae=posuere&duis=cubilia&faucibus=curae&accumsan=mauris&odio=viverra&curabitur=diam&convallis=vitae&duis=quam',
    image: 'http://dummyimage.com/300x400.png/ff4444/ffffff',
  },
  {
    id: 9,
    title: 'Centimia',
    link: 'https://ifeng.com/orci/vehicula/condimentum/curabitur.png?ligula=nullam&sit=varius&amet=nulla&eleifend=facilisi&pede=cras&libero=non&quis=velit&orci=nec&nullam=nisi&molestie=vulputate&nibh=nonummy&in=maecenas&lectus=tincidunt&pellentesque=lacus&at=at&nulla=velit&suspendisse=vivamus&potenti=vel&cras=nulla&in=eget&purus=eros&eu=elementum&magna=pellentesque&vulputate=quisque&luctus=porta&cum=volutpat&sociis=erat&natoque=quisque&penatibus=erat&et=eros&magnis=viverra&dis=eget&parturient=congue&montes=eget&nascetur=semper&ridiculus=rutrum&mus=nulla&vivamus=nunc&vestibulum=purus&sagittis=phasellus&sapien=in&cum=felis&sociis=donec&natoque=semper&penatibus=sapien&et=a&magnis=libero&dis=nam&parturient=dui&montes=proin&nascetur=leo&ridiculus=odio&mus=porttitor&etiam=id&vel=consequat&augue=in&vestibulum=consequat&rutrum=ut&rutrum=nulla&neque=sed&aenean=accumsan&auctor=felis&gravida=ut&sem=at&praesent=dolor&id=quis&massa=odio&id=consequat&nisl=varius&venenatis=integer&lacinia=ac&aenean=leo&sit=pellentesque&amet=ultrices&justo=mattis&morbi=odio&ut=donec&odio=vitae&cras=nisi&mi=nam&pede=ultrices',
    image: 'http://dummyimage.com/300x400.png/dddddd/000000',
  },
  {
    id: 10,
    title: 'Roombo',
    link: 'http://fc2.com/nulla/eget.jpg?ultricies=consequat&eu=dui&nibh=nec&quisque=nisi&id=volutpat&justo=eleifend&sit=donec&amet=ut&sapien=dolor&dignissim=morbi&vestibulum=vel&vestibulum=lectus&ante=in&ipsum=quam&primis=fringilla&in=rhoncus&faucibus=mauris&orci=enim&luctus=leo&et=rhoncus&ultrices=sed&posuere=vestibulum&cubilia=sit&curae=amet&nulla=cursus&dapibus=id&dolor=turpis&vel=integer&est=aliquet&donec=massa&odio=id&justo=lobortis&sollicitudin=convallis&ut=tortor&suscipit=risus&a=dapibus&feugiat=augue&et=vel&eros=accumsan&vestibulum=tellus&ac=nisi&est=eu&lacinia=orci&nisi=mauris&venenatis=lacinia&tristique=sapien&fusce=quis&congue=libero&diam=nullam&id=sit&ornare=amet&imperdiet=turpis&sapien=elementum&urna=ligula&pretium=vehicula&nisl=consequat&ut=morbi&volutpat=a&sapien=ipsum&arcu=integer&sed=a&augue=nibh&aliquam=in&erat=quis&volutpat=justo&in=maecenas&congue=rhoncus&etiam=aliquam&justo=lacus&etiam=morbi&pretium=quis',
    image: 'http://dummyimage.com/300x400.png/cc0000/ffffff',
  },
];

let careerExpo = '';
careerExpoCompanies.forEach((career) => {
  careerExpo += companyCardGenerator(career.title, career.link, career.image);
});

document.getElementById('company-card-wrapper').innerHTML = careerExpo;
