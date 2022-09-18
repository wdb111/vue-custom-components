var path = require('path')
var webpack = require('webpack')
const NODE_ENV = process.env.NODE_ENV

module.exports = {
  // entry: './src/main.js',
  entry: NODE_ENV == 'development' ? './src/main.js' : './src/myPlugin/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',//路劲
    filename: 'wdb-npm-practice.js',//打包之后的名称
    library: "wdb-npm-practice",//指定的就是你使用require时的模块名
    libraryTarget: "umd",//指定输出格式
    umdNamedDefine: true//会对UMD的构建过程中的AMD模块进行命名。否则就使用匿名的define
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {}
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader'},
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader",
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
} else {
  module.exports.devtool = '#eval-source-map'
}
