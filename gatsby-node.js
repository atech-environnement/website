
exports.modifyWebpackConfig = function(config, env) {
  config.loader('svg', function(cfg) {
    cfg.test = /\.svg(\?.*)?$/;
    cfg.loader = 'url';
    return cfg;
  });
  return config;
};
