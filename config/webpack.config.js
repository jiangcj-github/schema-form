const path = require('path');

module.exports = {
    entry: {
        antd: path.resolve(__dirname, '../lib/antd/index.js'),
        kpc: path.resolve(__dirname, '../lib/kpc/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "sf.[name].min.js",
        library: "sf",
        libraryTarget: "umd",
    },
    mode: "production",
    externals: [
        {
            react: "React",
            antd: "antd",
            // moment: "moment",
            // lodash : "lodash",
            // ajv: "ajv",
            "kpc-react": "Kpc",
        }, 
    ]
};