const bubble = document.createElement('div');
bubble.classList.add('bubble-yellow');
bubble.setAttribute(
  'style',
  'position: absolute;top: 50%;width: 700px;height: 700px;border-radius: 50%;left: -350px; z-index: -1;'
);

document.body.appendChild(bubble);
