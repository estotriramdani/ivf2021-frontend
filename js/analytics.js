let latitude = '';
let longtitude = '';
async function sendData() {
  try {
    const response = await fetch('https://httpbin.org/ip');
    const page_name = document.title;
    const current_position = getLocation().then((res) => console.log(res));
    console.log(current_position);
    let device = '';
    if (window.innerWidth > 992) {
      device = 'desktop';
    } else if (window.innerWidth > 768) {
      device = 'tablet';
    } else {
      device = 'mobile';
    }

    const responseJson = await response.json();

    var formdata = new FormData();
    formdata.append('page_name', page_name);
    formdata.append('user_ip', responseJson.origin);
    formdata.append('latitude', latitude);
    formdata.append('longtitude', longtitude);
    formdata.append('device', device);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };
    setTimeout(() => {
      fetch(
        'https://esto.my.id/ivf-analytics/api/save-data.php',
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error));
    }, 2000);
  } catch (error) {
    console.log(error);
  }
}

// sendData();

async function getLocation() {
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}

function showPosition(position) {
  latitude = position.coords.latitude;
  longtitude = position.coords.longitude;
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.log('User denied the request for Geolocation.');
      break;
    case error.POSITION_UNAVAILABLE:
      console.log('Location information is unavailable.');
      break;
    case error.TIMEOUT:
      console.log('The request to get user location timed out.');
      break;
    case error.UNKNOWN_ERROR:
      console.log('An unknown error occurred.');
      break;
  }
}

function handleClickCard(e) {
  e.innerHTML += `<div class="spinner-border text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;
}
