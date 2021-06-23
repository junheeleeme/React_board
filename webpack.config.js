const path = require("path");
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {

    name : 'React_web',
    mode : 'development', //production
    devtool : 'eval',

    resolve: {
        modules: ['node_modules'],
        extensions : ['.js', '.jsx'],
    },
    entry : { //입력
        app : ['./src/index'],
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options : {
                presets: ['@babel/preset-env', '@babel/preset-react'],
            },
            exclude: ['/node_modules'],
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(png|jpg|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: './imgs/[name].[ext]?[hash]',
                        limit: 8192,
                        publicPath: './'
                    }
                },
            ],
        }
    ],
    },
    output : { //출력
        path: path.join(__dirname, 'dist'),
        filename : 'app.js',
        publicPath: '/'
    },

    devServer: {
        contentBase: path.join(__dirname, '/'),
        host: 'localhost',
        port: 9000,
        hot: true,
        proxy: {
            '/api': 'http://localhost:9000'
        }
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            publicPath: './'
        }),
       // new CleanWebpackPlugin(),
    ]
};