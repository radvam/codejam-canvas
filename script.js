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