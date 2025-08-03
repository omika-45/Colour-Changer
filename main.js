const body = document.body;
const bg_color = ['#E6E1F5', '#FFE4E1', '#FADADD', '#FFFFF0', '#D0E7F9', '#F5FFFA', '#FFFAFA', '#FFE5B4', '#FFF5EE', '#F0F8FF', '#D3D3D3', '#EADCF7', '#F7E7CE', '#FFFDD0'];

function changeColor() {
  let num = Math.random();
  let len = bg_color.length;
  let index = num * len;
  let int_index = Math.floor(index);
  body.style.backgroundColor = bg_color[int_index];
  changeColor();
}

const text_color = ['#2E2E2E', '#3A305E', '2C3E50', '#4B2E2E', '#4B4B4B', '#4B306A', '#1C3B3A'];

function changeTextColor() {
  const text = document.getElementById('text');
  const color_index = Math.floor(Math.random() * text_color.length);
  text.style.color = text_color[color_index];
}