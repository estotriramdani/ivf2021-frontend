function tableHTMLGenerator(tr) {
  return `
          <div class="table-responsive">
            <table class="table table-borderless table-hover">
              <thead>
                <tr class="rundown-table-tr">
                  <td style="font-weight: 600;">Waktu</td>
                  <td style="font-weight: 600;">Judul</td>
                  <td style="font-weight: 600;">Pemateri</td>
                  <td style="font-weight: 600;">Aksi</td>
                </tr>
              </thead>
              <tbody>
                ${tr}
              </tbody>
            </table>
          </div
          `;
}

function trGenerator(time, title, company, link) {
  return `<tr class="rundown-table-tr">
                      <td>${time}</td>
                      <td>
                        ${title}
                      </td>
                      <td>${company}</td>
                      <td>
                        <a href="${link}" class="button button-blue">Daftar</a>
                      </td>
                    </tr>`;
}

function buttonToggleGenerator(date, id) {
  return `<button class="button d-block mb-2 toggle-table ${
    id === 0 ? 'button-blue' : ''
  }" id="toogle-${id}" onclick="handleChangeTable(this)">
            ${date}
          </button>`;
}

function trLoop(array) {
  let fullTr = '';
  array.forEach((data) => {
    fullTr += trGenerator(data.time, data.title, data.company, data.link);
  });
  return fullTr;
}

function handleChangeTable(e) {
  for (let i = 0; i < toggleTables.length; i++) {
    toggleTables[i].classList.remove('button-blue');
  }
  e.classList.add('button-blue');

  const tableTarget = e.id[e.id.length - 1];
  for (let i = 0; i < tables.length; i++) {
    tables[i].classList.add('d-none');
  }
  rundownList.innerHTML = spinnerHTML;
  setTimeout(() => {
    switch (tableTarget) {
      case '0':
        rundownList.innerHTML = trGroup.first;
        break;
      case '1':
        rundownList.innerHTML = trGroup.second;
        break;
      case '2':
        rundownList.innerHTML = trGroup.third;
        break;
      case '3':
        rundownList.innerHTML = trGroup.four;
        break;
      default:
        rundownList.innerHTML = trGroup.five;
        break;
    }
  }, 500);
}