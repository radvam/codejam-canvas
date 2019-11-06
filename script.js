let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let json4 = [];
let json32 = [];

const request4x4 = fetch("./data/4x4.json")
  .then(response => response.json())
  .then(data => (json4 = data));

const request32x32 = fetch("./data/32x32.json")
  .then(response => response.json())
  .then(data => (json32 = data));

function draw(data, type) {
  let pixel = canvas.width / data.length;
  for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length; j++) {
          if (type == 'hex') {
              ctx.fillStyle = `#${data[i][j]}`;
          } else if (type == 'rgba') {
              ctx.fillStyle = `rgba(${data[i][j][0]}, ${data[i][j][1]}, ${data[i][j][2]}, ${data[i][j][3]})`;
          }
          ctx.fillRect(i * pixel, j * pixel, pixel, pixel);
      }
  }
} 

let button4 = document.getElementById('btn-4');
let button32 = document.getElementById('btn-32');

ctx.fillStyle="#CDCDCB";
ctx.fillRect(0,0,canvas.width, canvas.height);

button4.addEventListener('click', () => {
    draw(json4, 'hex');
});

button32.addEventListener('click', () => {
    draw(json32, 'rgba');
});

let image = document.getElementById('btn-image');
const img = new Image();
img.src = 'data/image.png';

image.addEventListener('click', () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
});
