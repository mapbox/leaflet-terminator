var L = require('leaflet'),
    insertCss = require('insert-css'),
    fs = require('fs'),
    terminator = require('./');

insertCss(fs.readFileSync('./node_modules/leaflet/dist/leaflet.css'));

var div = document.body.appendChild(document.createElement('div'));

div.style.width = '1000px';
div.style.height = '500px';

var map = L.map(div)
    .addLayer(L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'))
    .setView([0, 0], 2);

var term = terminator()
    .setStyle({
        weight: 1,
        color: '#000',
        fill: '#000'
    }).addTo(map);
