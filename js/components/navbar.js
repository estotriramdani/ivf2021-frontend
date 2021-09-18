const baseUrl = 'http://localhost:5500/';

const navbarHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-blue">
  <div class="container-fluid">
    <a class="navbar-brand d-lg-none" href="/">IVF 2021</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse d-lg-flex justify-content-center"
      id="navbarNav"
    >
      <ul class="navbar-nav mt-3 mt-lg-0">
        <li class="nav-item p-lg-1 mb-2 mb-lg-0">
          <a class="nav-link button-white" aria-current="page" href="${baseUrl}"
            >Home</a
          >
        </li>
        <li class="nav-item p-lg-1 mb-2 mb-lg-0">
          <a class="nav-link button-white" href="${baseUrl}ivf-academy.html">IVF Academy</a>
        </li>
        <li class="nav-item p-lg-1 mb-2 mb-lg-0 dropdown">
          <a
            class="nav-link button-white dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Expo
          </a>
          <ul
            class="dropdown-menu container mt-2"
            aria-labelledby="navbarDropdown"
            style="margin: auto"
          >
            <li><a class="dropdown-item" href="${baseUrl}career-expo.html">Career Expo</a></li>
            <li><a class="dropdown-item" href="${baseUrl}internship-expo.html">Internship Expo</a></li>
            <li><a class="dropdown-item" href="${baseUrl}scholarship-expo.html">Scholarship Expo</a></li>
            <li><a class="dropdown-item" href="${baseUrl}entrepreneur-expo.html">Entrepreneurship Expo</a></li>
          </ul>
        </li>
        <li class="nav-item p-lg-1 mb-2 mb-lg-0">
          <a class="nav-link button-white" href="${baseUrl}webinar.html">Webinar Series</a>
        </li>
        <li class="nav-item p-lg-1 mb-2 mb-lg-0">
          <a class="nav-link button-white" href="${baseUrl}live-chat.html">Live Chat</a>
        </li>
        <li class="nav-item p-lg-1 mb-2 mb-lg-0">
          <a class="nav-link button-white" href="${baseUrl}vacancy.html">Vacancy</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;
document.getElementById('navbar').innerHTML = navbarHTML;
