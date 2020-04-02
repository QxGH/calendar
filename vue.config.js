module.exports = {
    publicPath: "./",
    outputDir: "dist",
    lintOnSave: false,
    runtimeCompiler: false,
    productionSourceMap: false,
    devServer: {
        host: "0.0.0.0",
        port: 8086,
        https: false
    },
    configureWebpack: {
        devtool: 'source-map'
    }
};