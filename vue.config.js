//vue.config.js
module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Diagrama de influência do Sistema de Obesidade";
                return args;
            })
    }
}