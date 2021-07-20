const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

    name : 'React-webpack-setting', // 웹팩 설정 이름
    mode : 'production', //'development', //실서비스 : production
    devtool : 'eval', //  <-- 여기까지는 생략가능
    resolve: {
        modules: ['node_modules'],
        extensions : ['.js', '.jsx'],
    },
    entry:{ // 합쳐질 파일 요소들 입력
        app : ['./src/index.jsx'], 
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options : {
                presets: ['@babel/preset-env', '@babel/preset-react']
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
        },        
    ],},
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
        },
        historyApiFallback: true, //리액트 라우트 직접주소 입력해서 들어가는 법
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            publicPath: './'
        }),
        new CleanWebpackPlugin(),
    ],
    performance: {
        hints: false,
    },

};