'use strict'

const path = require('path')
const Enzyme = require('enzyme')
const EnzymeAdapter = require('enzyme-adapter-react-16')

require('@babel/register')({
  configFile: path.join(__dirname, '../babel.config.js'),
  plugins: [
    '@babel/plugin-transform-modules-commonjs',
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          '^whats-that-gerber$': 'whats-that-gerber/src/index.ts',
        },
      },
    ],
  ],
  extensions: ['.js', '.ts', '.tsx'],
  sourceMaps: 'inline',
})

Enzyme.configure({adapter: new EnzymeAdapter()})

const chai = require('chai')
const sinonChai = require('sinon-chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(sinonChai)
chai.use(chaiAsPromised)
