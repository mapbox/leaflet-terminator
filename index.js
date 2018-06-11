/*
 * Adapted from the example by Mike Bostock
 * http://bl.ocks.org/mbostock/4597134
 */

var LGeodesy = require('leaflet-geodesy');

var pi = Math.PI,
    radians = pi / 180,
    degrees = 180 / pi;

module.exports = function(date) {
    var circle = LGeodesy.circle([0, 0],
        pi * 6378137 / 2, { parts: 100 });

    circle.setDate = function(date) {
        circle.setLatLng( L.latLng( antipode( solarPosition(date) ).reverse() ).wrap());
        return circle;
    };

    return circle.setDate(date || new Date());
};

function antipode(position) {
    return [position[0] + 180, -position[1]];
}

function solarPosition(date) {
    var centuries = (date - Date.UTC(2000, 0, 1, 12)) / 864e5 / 36525, // since J2000
        longitude = (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - date) / 864e5 * 360 - 180;
    return [
        longitude - equationOfTime(centuries) * degrees,
        solarDeclination(centuries) * degrees
    ];
}

// Equations based on NOAA’s Solar Calculator; all angles in radians.
// http://www.esrl.noaa.gov/gmd/grad/solcalc/

function equationOfTime(centuries) {
    var e = eccentricityEarthOrbit(centuries),
        m = solarGeometricMeanAnomaly(centuries),
        l = solarGeometricMeanLongitude(centuries),
        y = Math.tan(obliquityCorrection(centuries) / 2);
        y *= y;
    return y * Math.sin(2 * l) -
        2 * e * Math.sin(m) +
        4 * e * y * Math.sin(m) * Math.cos(2 * l) -
        0.5 * y * y * Math.sin(4 * l) -
        1.25 * e * e * Math.sin(2 * m);
}

function solarDeclination(centuries) {
    return Math.asin(Math.sin(obliquityCorrection(centuries)) * Math.sin(solarApparentLongitude(centuries)));
}

function solarApparentLongitude(centuries) {
    return solarTrueLongitude(centuries) - (0.00569 + 0.00478 * Math.sin((125.04 - 1934.136 * centuries) * radians)) * radians;
}

function solarTrueLongitude(centuries) {
    return solarGeometricMeanLongitude(centuries) + solarEquationOfCenter(centuries);
}

function solarGeometricMeanAnomaly(centuries) {
    return (357.52911 + centuries * (35999.05029 - 0.0001537 * centuries)) * radians;
}

function solarGeometricMeanLongitude(centuries) {
    var l = (280.46646 + centuries * (36000.76983 + centuries * 0.0003032)) % 360;
    return (l < 0 ? l + 360 : l) / 180 * pi;
}

function solarEquationOfCenter(centuries) {
    var m = solarGeometricMeanAnomaly(centuries);
    return (Math.sin(m) * (1.914602 - centuries * (0.004817 + 0.000014 * centuries)) +
            Math.sin(m + m) * (0.019993 - 0.000101 * centuries) +
            Math.sin(m + m + m) * 0.000289) * radians;
}

function obliquityCorrection(centuries) {
    return meanObliquityOfEcliptic(centuries) + 0.00256 * Math.cos((125.04 - 1934.136 * centuries) * radians) * radians;
}

function meanObliquityOfEcliptic(centuries) {
    return (23 + (26 + (21.448 - centuries * (46.8150 + centuries * (0.00059 - centuries * 0.001813))) / 60) / 60) * radians;
}

function eccentricityEarthOrbit(centuries) {
    return 0.016708634 - centuries * (0.000042037 + 0.0000001267 * centuries);
}
