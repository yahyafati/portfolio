const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "/",
    },
    resolve: {
        modules: [path.join(__dirname, "src"), "node_modules"],
        alias: {
            react: path.join(__dirname, "node_modules", "react"),
        },
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                ],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[hash]-[name].[ext]",
                        },
                    },
                ],
            },
            {
                test: /\.(pdf|docx)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            favicon: "./src/favicon.png",
        }),
    ],
};
