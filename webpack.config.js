const path = require('path');
const { default : TimeFrame } = require("./src/timeframe");

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/timeframe.js'),
  },
  output: {
    filename: 'timeframejs.bundle.js',
    library: {
      name: "TimeFrame",
      type: "umd"
    },
    path: path.resolve(__dirname, 'dist')
  }
};