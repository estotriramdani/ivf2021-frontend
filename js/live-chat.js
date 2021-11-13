const liveChatCompanyWrapper = document.getElementById(
  'live-chat-company-wrapper'
);

let companies = '';

liveChatCommpanies.forEach((data) => {
  companies += companyCardGenerator(
    data.name,
    data.link,
    data.logo,
    data.width,
    '#0c8deb',
    '_self'
  );
});

liveChatCompanyWrapper.innerHTML = companies;
