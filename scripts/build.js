import * as pkg from '../package.json';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import svg from 'rollup-plugin-svg';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';


const buildDate = Date()

const headerLong = `/*!
* ${pkg.name} - ${pkg.description}
* @version ${pkg.version}
* ${pkg.homepage}
*
* @copyright ${pkg.author}
* @license ${pkg.license}
*
* BUILT: ${buildDate}
*/;`

const babelConfig = () => {

  let targets = pkg.browserslist
  const plugins = [
    ['@babel/plugin-proposal-class-properties', { 'loose': true }],
    ['@babel/plugin-transform-classes'],
    ['@babel/plugin-transform-runtime', {
      corejs: 3,
      helpers: true,
      useESModules: true,
      version: "^7.9.6",
      regenerator: false
    }]
  ]


  return babel({
    include: 'src/**',
    babelHelpers: 'runtime',
    babelrc: false,
    presets: [['@babel/preset-env', {
      modules: false,
      targets: targets || pkg.browserslist,
      // useBuildins and plugin-transform-runtime are mutually exclusive
      // https://github.com/babel/babel/issues/10271#issuecomment-528379505
      // use babel-polyfills when released
      useBuiltIns: false,
      bugfixes: true
    }]],
    plugins
  })
}

export default {
  input: './src/circuit_visualization.js',
  output: {
    file: './dist/circuit_visualization.js',
    format: 'iife',
    name: 'CircuitVisualization',
    sourcemap: true,
    banner: headerLong,
    // remove Object.freeze
    freeze: false
  },
  treeshake: {
    // property getter have no sideeffects
    propertyReadSideEffects: false
  },
  plugins: [
    // Production config
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    svg(),
    postcss({ plugins: [] }),
    resolve({ browser: true }),
    commonjs(),
    babelConfig('maintained node versions'),
    filesize(),
  ],
  watch: {
    exclude: ['./dist', './playground'],
  }
};