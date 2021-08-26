const path = require("path")


module.exports = {
    // Mode: setting this to development preconfigure webpack with some defaults
    mode: "development",

    // Loaders: these allow various non-js filetypes to be imported
    module: {
        rules: [
            {
                test: /[.]css$/,
                exclude: /node_modules/,
                use: [{
                    loader: "css-loader",
                }],
            },
            {
                test: /[.]js$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    },
                }],
            },
            {
                test: /[.]jsx$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    },
                }],
            },
            {
                test: /[.]ts$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-typescript"]
                    },
                }],
            },
            {
                test: /[.]tsx$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"]
                    },
                }],
            },
        ],
    },

    // Resolve: allow these file types to be imported
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"],
    },

    // Input: this is the source root file
    entry: "./src/index.ts",

    // Output: this is what webpack should build
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    // Devtools: display source maps
    devtool: "inline-source-map",
}