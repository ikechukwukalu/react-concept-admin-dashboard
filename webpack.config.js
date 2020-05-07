const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = { 
    entry: './src/index.js', 
    output: { 
        path: path.resolve(__dirname, 'dist'), 
        filename: 'main.js', 
        publicPath: '/concept' // For production - Change to base directory folder name Eg. https://localhost/basename/
    }, 
    devServer: { 
        historyApiFallback: true,
        host: 'localhost', 
        port: 80, // For production - You may need to change this to 80 
    }, 
    module: { 
        rules: [ 
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: { 
                    loader: "babel-loader" 
                } 
            }, 
            { test: /\.html$/, 
                use: [ 
                    { 
                        loader: "html-loader", 
                        options: 
                        { 
                            minimize: true 
                        } 
                    } 
                ] 
            }, 
            { 
                test: /\.css$/, 
                use: [MiniCssExtractPlugin.loader, "css-loader"] 
            },
            { 
                test: /\.(cur|jpg|jpeg|gif|png|woff|woff2|eot|ttf|svg)$/, 
                loader: "url-loader?limit=50000&name=/fonts/[name].[ext]"
            }
        ] 
    }, 
    plugins: [ 
        new HtmlWebPackPlugin({
            template: "./src/index.html", // Compiles html file in src folder 
            filename: "./index.html" 
        }), 
        new MiniCssExtractPlugin({ 
            filename: "[name].css", 
            chunkFilename: "[id].css" 
        }), 
        new CopyWebpackPlugin([ // Compiles directories in src folder 
            {
                from:'src/assets',
                to:'assets'
            }
        ])
    ] 
};