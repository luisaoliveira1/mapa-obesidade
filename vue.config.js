//vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Mapa Multissistêmico de Evidências sobre Obesidade';
      return args;
    });
  },
};
