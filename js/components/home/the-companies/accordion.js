function accordionGenerator(id, title, cards) {
  return `
  <div class="accordion-item" data-aos="fade-up">
    <h2 class="accordion-header" id="${id}-heading">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#${id}"
        aria-expanded="false"
        aria-controls="${id}"
      >
        ${title}
      </button>
    </h2>
    <div
      id="${id}"
      class="accordion-collapse collapse"
      aria-labelledby="${id}-heading"
    >
      <div class="accordion-body">
        <div class="row">
          ${cards}
        </div>
      </div>
    </div>
  </div>
  `;
}

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

const internshipExpoCompanies = [
  {
    id: 1,
    title: 'Fivebridge',
    link: 'http://merriam-webster.com/ornare/consequat/lectus/in/est.aspx?id=volutpat&sapien=in&in=congue&sapien=etiam&iaculis=justo&congue=etiam&vivamus=pretium&metus=iaculis&arcu=justo&adipiscing=in&molestie=hac&hendrerit=habitasse&at=platea&vulputate=dictumst&vitae=etiam&nisl=faucibus&aenean=cursus&lectus=urna&pellentesque=ut&eget=tellus&nunc=nulla&donec=ut&quis=erat&orci=id&eget=mauris&orci=vulputate&vehicula=elementum&condimentum=nullam&curabitur=varius&in=nulla&libero=facilisi&ut=cras',
    image: 'http://dummyimage.com/300x400.png/ff4444/ffffff',
  },
  {
    id: 2,
    title: 'Leenti',
    link: 'https://lulu.com/nec/dui.html?odio=dictumst&condimentum=aliquam&id=augue&luctus=quam&nec=sollicitudin&molestie=vitae&sed=consectetuer&justo=eget&pellentesque=rutrum&viverra=at&pede=lorem&ac=integer&diam=tincidunt&cras=ante&pellentesque=vel&volutpat=ipsum&dui=praesent&maecenas=blandit&tristique=lacinia&est=erat&et=vestibulum&tempus=sed&semper=magna&est=at&quam=nunc',
    image: 'http://dummyimage.com/300x400.png/cc0000/ffffff',
  },
  {
    id: 3,
    title: 'Eimbee',
    link: 'https://imgur.com/lorem/quisque/ut/erat.aspx?ante=amet&ipsum=nunc&primis=viverra&in=dapibus&faucibus=nulla&orci=suscipit&luctus=ligula&et=in&ultrices=lacus&posuere=curabitur&cubilia=at&curae=ipsum',
    image: 'http://dummyimage.com/300x400.png/5fa2dd/ffffff',
  },
  {
    id: 4,
    title: 'Oyoba',
    link: 'http://tamu.edu/sed/interdum/venenatis/turpis.jsp?phasellus=vitae&id=mattis&sapien=nibh&in=ligula&sapien=nec&iaculis=sem&congue=duis&vivamus=aliquam&metus=convallis&arcu=nunc&adipiscing=proin&molestie=at&hendrerit=turpis&at=a&vulputate=pede&vitae=posuere&nisl=nonummy&aenean=integer&lectus=non&pellentesque=velit&eget=donec&nunc=diam&donec=neque&quis=vestibulum&orci=eget&eget=vulputate&orci=ut&vehicula=ultrices&condimentum=vel&curabitur=augue&in=vestibulum&libero=ante&ut=ipsum&massa=primis&volutpat=in&convallis=faucibus&morbi=orci&odio=luctus&odio=et&elementum=ultrices&eu=posuere&interdum=cubilia&eu=curae&tincidunt=donec&in=pharetra&leo=magna&maecenas=vestibulum&pulvinar=aliquet&lobortis=ultrices&est=erat&phasellus=tortor&sit=sollicitudin&amet=mi&erat=sit&nulla=amet&tempus=lobortis&vivamus=sapien&in=sapien&felis=non&eu=mi&sapien=integer&cursus=ac&vestibulum=neque&proin=duis&eu=bibendum&mi=morbi&nulla=non&ac=quam&enim=nec&in=dui&tempor=luctus&turpis=rutrum&nec=nulla&euismod=tellus&scelerisque=in&quam=sagittis&turpis=dui&adipiscing=vel&lorem=nisl&vitae=duis&mattis=ac&nibh=nibh&ligula=fusce&nec=lacus&sem=purus&duis=aliquet&aliquam=at&convallis=feugiat&nunc=non&proin=pretium&at=quis&turpis=lectus&a=suspendisse&pede=potenti',
    image: 'http://dummyimage.com/300x400.png/ff4444/ffffff',
  },
  {
    id: 5,
    title: 'Brightdog',
    link: 'https://prlog.org/nisi/nam/ultrices/libero/non/mattis.png?nunc=a&proin=pede&at=posuere&turpis=nonummy&a=integer&pede=non&posuere=velit&nonummy=donec&integer=diam&non=neque&velit=vestibulum&donec=eget&diam=vulputate&neque=ut&vestibulum=ultrices&eget=vel&vulputate=augue&ut=vestibulum&ultrices=ante&vel=ipsum&augue=primis&vestibulum=in&ante=faucibus&ipsum=orci&primis=luctus&in=et&faucibus=ultrices&orci=posuere&luctus=cubilia&et=curae&ultrices=donec&posuere=pharetra&cubilia=magna&curae=vestibulum&donec=aliquet&pharetra=ultrices&magna=erat&vestibulum=tortor&aliquet=sollicitudin&ultrices=mi&erat=sit',
    image: 'http://dummyimage.com/300x400.png/ff4444/ffffff',
  },
  {
    id: 6,
    title: 'Rhynyx',
    link: 'http://deviantart.com/aliquet/ultrices/erat/tortor.jpg?at=cubilia&nunc=curae&commodo=duis&placerat=faucibus&praesent=accumsan&blandit=odio&nam=curabitur&nulla=convallis&integer=duis&pede=consequat&justo=dui&lacinia=nec&eget=nisi&tincidunt=volutpat&eget=eleifend&tempus=donec&vel=ut&pede=dolor&morbi=morbi&porttitor=vel&lorem=lectus&id=in&ligula=quam&suspendisse=fringilla&ornare=rhoncus&consequat=mauris&lectus=enim&in=leo&est=rhoncus&risus=sed&auctor=vestibulum&sed=sit&tristique=amet&in=cursus&tempus=id&sit=turpis&amet=integer&sem=aliquet',
    image: 'http://dummyimage.com/300x400.png/dddddd/000000',
  },
  {
    id: 7,
    title: 'Eimbee',
    link: 'https://foxnews.com/at/vulputate/vitae/nisl/aenean.aspx?dis=vitae&parturient=mattis&montes=nibh&nascetur=ligula&ridiculus=nec&mus=sem&vivamus=duis&vestibulum=aliquam&sagittis=convallis&sapien=nunc&cum=proin&sociis=at&natoque=turpis&penatibus=a&et=pede&magnis=posuere&dis=nonummy&parturient=integer&montes=non&nascetur=velit&ridiculus=donec&mus=diam&etiam=neque&vel=vestibulum&augue=eget&vestibulum=vulputate&rutrum=ut&rutrum=ultrices&neque=vel&aenean=augue&auctor=vestibulum&gravida=ante&sem=ipsum&praesent=primis&id=in',
    image: 'http://dummyimage.com/300x400.png/dddddd/000000',
  },
  {
    id: 8,
    title: 'Gabspot',
    link: 'http://shareasale.com/est/congue/elementum/in.png?tristique=elementum&fusce=pellentesque&congue=quisque&diam=porta&id=volutpat&ornare=erat&imperdiet=quisque&sapien=erat&urna=eros&pretium=viverra&nisl=eget&ut=congue&volutpat=eget&sapien=semper&arcu=rutrum&sed=nulla&augue=nunc&aliquam=purus&erat=phasellus&volutpat=in&in=felis&congue=donec&etiam=semper&justo=sapien&etiam=a',
    image: 'http://dummyimage.com/300x400.png/dddddd/000000',
  },
  {
    id: 9,
    title: 'Meedoo',
    link: 'https://umn.edu/eros/elementum/pellentesque.json?sit=quisque&amet=ut&sem=erat&fusce=curabitur&consequat=gravida&nulla=nisi&nisl=at&nunc=nibh&nisl=in&duis=hac&bibendum=habitasse&felis=platea&sed=dictumst&interdum=aliquam&venenatis=augue&turpis=quam&enim=sollicitudin&blandit=vitae&mi=consectetuer&in=eget&porttitor=rutrum&pede=at&justo=lorem&eu=integer&massa=tincidunt&donec=ante&dapibus=vel&duis=ipsum&at=praesent&velit=blandit&eu=lacinia&est=erat&congue=vestibulum&elementum=sed&in=magna&hac=at&habitasse=nunc',
    image: 'http://dummyimage.com/300x400.png/dddddd/000000',
  },
  {
    id: 10,
    title: 'Topiczoom',
    link: 'http://wsj.com/in/magna/bibendum/imperdiet/nullam.jpg?aliquam=maecenas&convallis=tristique&nunc=est&proin=et&at=tempus&turpis=semper&a=est&pede=quam&posuere=pharetra&nonummy=magna&integer=ac&non=consequat&velit=metus&donec=sapien&diam=ut&neque=nunc&vestibulum=vestibulum&eget=ante&vulputate=ipsum&ut=primis&ultrices=in&vel=faucibus&augue=orci&vestibulum=luctus&ante=et',
    image: 'http://dummyimage.com/300x400.png/ff4444/ffffff',
  },
];

const entrepreneurExpoCompanies = [
  {
    id: 1,
    title: 'Rhynoodle',
    link: 'https://cisco.com/bibendum/imperdiet/nullam/orci/pede/venenatis.json?ultrices=vestibulum&posuere=proin&cubilia=eu&curae=mi&duis=nulla&faucibus=ac&accumsan=enim&odio=in',
    image: 'http://dummyimage.com/300x400.png/5fa2dd/ffffff',
  },
  {
    id: 2,
    title: 'Minyx',
    link: 'https://adobe.com/mattis/odio/donec/vitae.aspx?sed=sit&magna=amet&at=diam&nunc=in&commodo=magna&placerat=bibendum&praesent=imperdiet&blandit=nullam&nam=orci&nulla=pede&integer=venenatis&pede=non&justo=sodales&lacinia=sed&eget=tincidunt&tincidunt=eu&eget=felis&tempus=fusce&vel=posuere&pede=felis&morbi=sed&porttitor=lacus&lorem=morbi&id=sem&ligula=mauris&suspendisse=laoreet&ornare=ut&consequat=rhoncus&lectus=aliquet&in=pulvinar&est=sed&risus=nisl&auctor=nunc&sed=rhoncus&tristique=dui&in=vel&tempus=sem&sit=sed&amet=sagittis&sem=nam&fusce=congue&consequat=risus&nulla=semper&nisl=porta&nunc=volutpat&nisl=quam&duis=pede&bibendum=lobortis&felis=ligula&sed=sit&interdum=amet&venenatis=eleifend&turpis=pede&enim=libero&blandit=quis&mi=orci&in=nullam',
    image: 'http://dummyimage.com/300x400.png/ff4444/ffffff',
  },
  {
    id: 3,
    title: 'Gabspot',
    link: 'http://linkedin.com/tellus/nulla/ut/erat/id/mauris.png?erat=vivamus&fermentum=metus&justo=arcu&nec=adipiscing&condimentum=molestie&neque=hendrerit&sapien=at&placerat=vulputate&ante=vitae&nulla=nisl&justo=aenean&aliquam=lectus&quis=pellentesque&turpis=eget&eget=nunc&elit=donec&sodales=quis&scelerisque=orci&mauris=eget&sit=orci&amet=vehicula&eros=condimentum&suspendisse=curabitur&accumsan=in&tortor=libero&quis=ut&turpis=massa&sed=volutpat&ante=convallis&vivamus=morbi&tortor=odio&duis=odio&mattis=elementum&egestas=eu&metus=interdum&aenean=eu&fermentum=tincidunt&donec=in&ut=leo&mauris=maecenas&eget=pulvinar&massa=lobortis&tempor=est&convallis=phasellus&nulla=sit&neque=amet&libero=erat&convallis=nulla&eget=tempus&eleifend=vivamus&luctus=in&ultricies=felis&eu=eu&nibh=sapien&quisque=cursus&id=vestibulum&justo=proin&sit=eu&amet=mi&sapien=nulla&dignissim=ac&vestibulum=enim&vestibulum=in&ante=tempor&ipsum=turpis&primis=nec&in=euismod&faucibus=scelerisque&orci=quam&luctus=turpis&et=adipiscing&ultrices=lorem&posuere=vitae&cubilia=mattis&curae=nibh&nulla=ligula&dapibus=nec&dolor=sem&vel=duis&est=aliquam&donec=convallis&odio=nunc&justo=proin&sollicitudin=at&ut=turpis&suscipit=a&a=pede&feugiat=posuere&et=nonummy&eros=integer&vestibulum=non&ac=velit&est=donec',
    image: 'http://dummyimage.com/300x400.png/ff4444/ffffff',
  },
  {
    id: 4,
    title: 'Geba',
    link: 'http://cnet.com/nulla/suscipit/ligula.js?pellentesque=sapien&at=a&nulla=libero&suspendisse=nam&potenti=dui&cras=proin&in=leo&purus=odio&eu=porttitor&magna=id&vulputate=consequat&luctus=in&cum=consequat&sociis=ut&natoque=nulla&penatibus=sed&et=accumsan&magnis=felis&dis=ut&parturient=at&montes=dolor&nascetur=quis&ridiculus=odio&mus=consequat',
    image: 'http://dummyimage.com/300x400.png/cc0000/ffffff',
  },
  {
    id: 5,
    title: 'Topicshots',
    link: 'https://mac.com/magna/vestibulum/aliquet/ultrices/erat.aspx?leo=dui&pellentesque=maecenas&ultrices=tristique&mattis=est&odio=et&donec=tempus&vitae=semper&nisi=est&nam=quam&ultrices=pharetra&libero=magna&non=ac&mattis=consequat&pulvinar=metus&nulla=sapien&pede=ut&ullamcorper=nunc&augue=vestibulum&a=ante&suscipit=ipsum&nulla=primis&elit=in&ac=faucibus&nulla=orci&sed=luctus&vel=et&enim=ultrices&sit=posuere&amet=cubilia&nunc=curae&viverra=mauris&dapibus=viverra&nulla=diam&suscipit=vitae&ligula=quam&in=suspendisse&lacus=potenti&curabitur=nullam&at=porttitor&ipsum=lacus&ac=at&tellus=turpis&semper=donec&interdum=posuere&mauris=metus&ullamcorper=vitae&purus=ipsum&sit=aliquam&amet=non&nulla=mauris&quisque=morbi&arcu=non&libero=lectus&rutrum=aliquam&ac=sit&lobortis=amet&vel=diam&dapibus=in&at=magna&diam=bibendum&nam=imperdiet&tristique=nullam',
    image: 'http://dummyimage.com/300x400.png/dddddd/000000',
  },
  {
    id: 6,
    title: 'Browsecat',
    link: 'http://livejournal.com/leo/pellentesque/ultrices/mattis/odio/donec/vitae.html?felis=maecenas&ut=tristique&at=est&dolor=et&quis=tempus&odio=semper&consequat=est&varius=quam&integer=pharetra&ac=magna&leo=ac&pellentesque=consequat&ultrices=metus&mattis=sapien&odio=ut&donec=nunc&vitae=vestibulum&nisi=ante&nam=ipsum&ultrices=primis&libero=in&non=faucibus&mattis=orci&pulvinar=luctus&nulla=et&pede=ultrices&ullamcorper=posuere&augue=cubilia&a=curae&suscipit=mauris&nulla=viverra&elit=diam&ac=vitae&nulla=quam&sed=suspendisse&vel=potenti&enim=nullam&sit=porttitor&amet=lacus&nunc=at&viverra=turpis&dapibus=donec&nulla=posuere&suscipit=metus&ligula=vitae&in=ipsum&lacus=aliquam&curabitur=non&at=mauris',
    image: 'http://dummyimage.com/300x400.png/dddddd/000000',
  },
  {
    id: 7,
    title: 'Miboo',
    link: 'http://pagesperso-orange.fr/congue/vivamus/metus/arcu.js?dictumst=sed&aliquam=tincidunt&augue=eu&quam=felis&sollicitudin=fusce&vitae=posuere&consectetuer=felis&eget=sed&rutrum=lacus&at=morbi&lorem=sem&integer=mauris&tincidunt=laoreet&ante=ut&vel=rhoncus&ipsum=aliquet&praesent=pulvinar&blandit=sed&lacinia=nisl&erat=nunc&vestibulum=rhoncus&sed=dui&magna=vel&at=sem&nunc=sed&commodo=sagittis&placerat=nam&praesent=congue&blandit=risus&nam=semper&nulla=porta&integer=volutpat&pede=quam&justo=pede&lacinia=lobortis&eget=ligula&tincidunt=sit&eget=amet&tempus=eleifend&vel=pede&pede=libero&morbi=quis&porttitor=orci&lorem=nullam&id=molestie&ligula=nibh&suspendisse=in&ornare=lectus&consequat=pellentesque&lectus=at&in=nulla&est=suspendisse&risus=potenti&auctor=cras&sed=in&tristique=purus&in=eu&tempus=magna&sit=vulputate&amet=luctus&sem=cum&fusce=sociis&consequat=natoque&nulla=penatibus&nisl=et&nunc=magnis&nisl=dis&duis=parturient&bibendum=montes&felis=nascetur&sed=ridiculus&interdum=mus&venenatis=vivamus&turpis=vestibulum&enim=sagittis&blandit=sapien&mi=cum&in=sociis&porttitor=natoque&pede=penatibus&justo=et&eu=magnis&massa=dis',
    image: 'http://dummyimage.com/300x400.png/cc0000/ffffff',
  },
  {
    id: 8,
    title: 'Vipe',
    link: 'https://sciencedaily.com/ac/diam/cras/pellentesque.js?orci=posuere&luctus=felis&et=sed&ultrices=lacus&posuere=morbi&cubilia=sem&curae=mauris&donec=laoreet&pharetra=ut&magna=rhoncus&vestibulum=aliquet&aliquet=pulvinar&ultrices=sed&erat=nisl&tortor=nunc&sollicitudin=rhoncus&mi=dui&sit=vel&amet=sem&lobortis=sed&sapien=sagittis&sapien=nam&non=congue&mi=risus&integer=semper&ac=porta&neque=volutpat&duis=quam&bibendum=pede&morbi=lobortis&non=ligula&quam=sit&nec=amet&dui=eleifend&luctus=pede&rutrum=libero&nulla=quis&tellus=orci&in=nullam&sagittis=molestie&dui=nibh&vel=in&nisl=lectus&duis=pellentesque&ac=at&nibh=nulla&fusce=suspendisse&lacus=potenti&purus=cras&aliquet=in&at=purus&feugiat=eu&non=magna&pretium=vulputate&quis=luctus&lectus=cum&suspendisse=sociis&potenti=natoque&in=penatibus&eleifend=et&quam=magnis',
    image: 'http://dummyimage.com/300x400.png/dddddd/000000',
  },
  {
    id: 9,
    title: 'Quatz',
    link: 'http://cbslocal.com/vestibulum.html?pede=dis&morbi=parturient&porttitor=montes&lorem=nascetur',
    image: 'http://dummyimage.com/300x400.png/5fa2dd/ffffff',
  },
  {
    id: 10,
    title: 'Edgeblab',
    link: 'https://cdbaby.com/in/faucibus/orci/luctus/et/ultrices.png?quisque=eros&id=viverra&justo=eget&sit=congue&amet=eget&sapien=semper&dignissim=rutrum',
    image: 'http://dummyimage.com/300x400.png/dddddd/000000',
  },
];

function companyCardGenerator(title, link, image) {
  return `
  <div class="col-md-4 col-lg-2 col-sm-6 p-2" data-aos="fade-up">
    <a href="${link}" class="company-card shadow-sm">
      <div class="company-card-img">
        <img
          src="${image}"
          alt="${title}"
        />
      </div>
      <p class="company-card-title">${title}</p>
    </a>
  </div>
  `;
}

let careerExpo = '';
careerExpoCompanies.forEach((career) => {
  careerExpo += companyCardGenerator(career.title, career.link, career.image);
});

let internshipExpo = '';
internshipExpoCompanies.forEach((internship) => {
  internshipExpo += companyCardGenerator(
    internship.title,
    internship.link,
    internship.image
  );
});

let entreExpo = '';
entrepreneurExpoCompanies.forEach((entre) => {
  entreExpo += companyCardGenerator(entre.title, entre.link, entre.image);
});

document.getElementById('accordionPanelsStayOpenExample').innerHTML +=
  accordionGenerator('career-expo', 'Career Expo', careerExpo);

document.getElementById('accordionPanelsStayOpenExample').innerHTML +=
  accordionGenerator('internship-expo', 'Internship Expo', internshipExpo);

document.getElementById('accordionPanelsStayOpenExample').innerHTML +=
  accordionGenerator(
    'entrepreneurship-expo',
    'Entrepreneurship Expo',
    entreExpo
  );
