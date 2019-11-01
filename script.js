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