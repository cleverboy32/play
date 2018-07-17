var webpack = require('webpack');
var path = require('path');

module.exports = {
    node: {
        fs: 'empty'
    },
    entry: './socket.js', //入口文件
    output:{
          path: path.resolve(__dirname, 'dist'), //输出位置
          filename: 'build.js' //输入文件
    },
    module:{
        rules:[
            {
                   test:/\.css$/,//支持正则
                   loader:'style-loader!css-loader' 
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    //其他解决方案配置
    resolve: {
        extensions: ['.js', '.json', '.css', '.scss']//添加在此的后缀所对应的文件可以省略后缀
    },
     //插件
     plugins:[
          new webpack.BannerPlugin('This file is created by ly')
     ]
}