var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
const PORT = 8080;

for (var key in config.entry) {
    console.log(key)
    config.entry[key].unshift('react-hot-loader/patch', `webpack-dev-server/client?http://localhost:${PORT}/`, 'webpack/hot/only-dev-server');
    console.log(config.entry[key]);
}

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        chunks: false,
        colors: true
    }
}).listen(PORT, 'localhost', function(err, result) {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at http://localhost:8080/')
});