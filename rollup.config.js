import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'index.js',
  output: {
    file: 'leaflet-terminator.js',
    name: 'terminator',
    format: 'umd',
  },
  plugins: [
    resolve({
      jsnext: true
    }),
    commonjs(),
    uglify()
  ]
};
