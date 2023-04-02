const counter = document.getElementById('counter');
const cookie = document.getElementById('cookie_img');
const speed = document.getElementById('speed');
counter.textContent = 0;
let more = true;

cookie.onclick = () => {
  counter.textContent = Number(counter.textContent) + 1;
  if (more) {
    cookie.width += 10;
    cookie.height += 10;
    more = false;
  } else {
    cookie.width -= 10;
    cookie.height -= 10;
    more = true;
  }
};
