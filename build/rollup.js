import * as pkg from '../package.json';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import svg from 'rollup-plugin-svg'


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
  input: './src/main.js',
  output: {
    file: './dist/open-roberta-configuration.js',
    format: 'iife',
    name: 'configuration',
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
    svg(),
    resolve({ browser: true }),
    commonjs(),
    babelConfig('maintained node versions'),
    filesize(),
  ],
};