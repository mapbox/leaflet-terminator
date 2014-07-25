# leaflet-terminator

![](https://farm3.staticflickr.com/2930/14556106388_d621a29e8c_z.jpg)

Displays a [solar terminator](http://en.wikipedia.org/wiki/Terminator_(solar))
on a Leaflet map.

## API

### `terminator(date)`

Create a solar terminator. The terminator is a [Leaflet L.Path](http://leafletjs.com/reference.html) object.

`date` is optional, and would need to be a JavaScript Date object. Default
is now.

### `terminator.setDate(date)`

Recalculate the terminator to a given [JavaScript Date object](http://www.w3schools.com/jsref/jsref_obj_date.asp).

## Using it

This is built with [browserify](http://browserify.org/). If you want a **standalone javascript file or UMD module**,
download `leaflet-terminator.js`.

If you want to use it with browserify, use npm.

If you have a patch to contribute, change things in `index.js` or in one of the
dependency files. `leaflet-terminator.js` is a built file, **do not change it:**
your changes will be overwritten.

## See Also

This is totally cribbed from [Mike Bostock's example](http://bl.ocks.org/mbostock/4597134), which
is itself cribbed from science. Under the hood lie a bunch of libraries that you
can use separately, like [leaflet-geodesy](https://github.com/mapbox/leaflet-geodesy)
and [spherical](https://github.com/mapbox/spherical).
