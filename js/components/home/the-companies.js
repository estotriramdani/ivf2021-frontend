const careerExpoWrapper = document.getElementById('career-expo-wrapper');
const interExpoWrapper = document.getElementById('internship-expo-wrapper');
const scholarshipExpoWrapper = document.getElementById(
  'scholarship-expo-wrapper'
);
const entreExpoWrapper = document.getElementById('entre-expo-wrapper');

careerExpo.sort((a, b) => (a.width < b.width ? 1 : b.width < a.width ? -1 : 0));

scholarExpo.sort((a, b) =>
  a.width < b.width ? 1 : b.width < a.width ? -1 : 0
);

internExpo.sort((a, b) => (a.width < b.width ? 1 : b.width < a.width ? -1 : 0));

entreExpo.sort((a, b) => (a.width < b.width ? 1 : b.width < a.width ? -1 : 0));

let careerExpoFull = '';
careerExpo.forEach((career) => {
  careerExpoFull += companyCardGenerator(
    career.title,
    career.link,
    career.image,
    career.width
  );
});

let intershipExpoFull = '';
internExpo.forEach((career) => {
  intershipExpoFull += companyCardGenerator(
    career.title,
    career.link,
    career.image,
    career.width
  );
});

let scholarshipExpoFull = '';
scholarExpo.forEach((career) => {
  scholarshipExpoFull += companyCardGenerator(
    career.title,
    career.link,
    career.image,
    career.width
  );
});

let entreExpoFull = '';
entreExpo.forEach((career) => {
  entreExpoFull += companyCardGenerator(
    career.title,
    career.link,
    career.image,
    career.width
  );
});

careerExpoWrapper.innerHTML = careerExpoFull;
interExpoWrapper.innerHTML = intershipExpoFull;
scholarshipExpoWrapper.innerHTML = scholarshipExpoFull;
entreExpoWrapper.innerHTML = entreExpoFull;
