'use strict'

const path = require('path')

module.exports = {
    entry: {
        first: './src/index.js'
    },

    module: {},
    plugins: [],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
}