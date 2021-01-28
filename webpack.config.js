        //  加载nodejs 内置模块path
var path=require('path');
module.exports={
    entry:{
        index:'./src/index.js',
        one:'./src/one.js'
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name]_[chunkhash].main.js"
    },
    // devtool:"source-map",
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                    }
             }
            }
        ]
    },

    mode:"development"
}