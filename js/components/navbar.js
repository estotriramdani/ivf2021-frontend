const navbarHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-blue sticky-top">
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
          <a class="nav-link button-white" aria-current="page" href="#"
            >Home</a
          >
        </li>
        <li class="nav-item p-lg-1 mb-2 mb-lg-0">
          <a class="nav-link button-white" href="#">IVF Academy</a>
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
            <li><a class="dropdown-item" href="#">Career Expo</a></li>
            <li><a class="dropdown-item" href="#">Internship Expo</a></li>
            <li><a class="dropdown-item" href="#">Scholarship Expo</a></li>
            <li><a class="dropdown-item" href="#">Entrepreneurship Expo</a></li>
          </ul>
        </li>
        <li class="nav-item p-lg-1 mb-2 mb-lg-0">
          <a class="nav-link button-white" href="#">Webinar Series</a>
        </li>
        <li class="nav-item p-lg-1 mb-2 mb-lg-0">
          <a class="nav-link button-white" href="#">Live Chat</a>
        </li>
        <li class="nav-item p-lg-1 mb-2 mb-lg-0">
          <a class="nav-link button-white" href="#">Vacation</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;
document.getElementById('navbar').innerHTML = navbarHTML;
