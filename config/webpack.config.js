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
    externals: {
        react: "react",
        antd: "antd",
        moment: "moment",
        // lodash : "lodash",
        // ajv: "ajv",
        "kpc-react/components/form": "Kpc.Form",
        "kpc-react/components/input": "Kpc.Input",
    },
    module: {
        rules: [
            {
                test: /\.(svg|woff|ttf|eot)/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require("autoprefixer")
                            ]
                        }
                    }
                ]
            }
        ]
    }
};