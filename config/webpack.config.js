const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../lib/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "sf.min.js",
        library: "sf",
        libraryTarget: "umd",
    },
    mode: "production",
    // externals: {
    //     react: "react",
    //     antd: "antd",
    //     lodash : "lodash",
    //     ajv: "ajv",
    // },
};