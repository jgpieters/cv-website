const path = require('path');
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: "development",
    entry: {
        main: "./src/client/main.tsx",
    },
    output: {
        filename: "[name].bundle.js",
        chunkFilename: '[name].chunk.js',
        path: __dirname + "/dist/client",
        publicPath: "/assets/"
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        disableHostCheck: true,
        publicPath: '/assets',
        historyApiFallback: true,
        compress: true,
        port: 9000
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.css$/,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }]
            },
            {
                test: /\.(png|svg|jpg|gif|pdf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            emitFile: true,
                            outputPath: 'img',
                            publicPath: "/assets/img",
                            name: '[hash].[ext]',
                        },
                    },
                ],
            },
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        },
        usedExports: true
    },
    plugins: [
        new CopyPlugin([
            { from: path.join(__dirname, 'public', "assets", "img", "custom"), to: path.join(__dirname, 'dist', "client", "img", "custom") }
        ]),
    ],
};