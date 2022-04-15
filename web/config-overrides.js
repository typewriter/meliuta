module.exports = function override(config, env) {
  if (env !== 'production') {
    return config;
  }

  config.output = {
    ...config.output,
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].chunk.js',
  };

  const miniCssExtractPlugin = config.plugins.find(e => e.constructor.name === 'MiniCssExtractPlugin');
  miniCssExtractPlugin.options.filename = 'static/css/[name].css';
  miniCssExtractPlugin.options.chunkFilename = 'static/css/[name].chunk.css';

  return config;
}
