module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: '@import "@/assets/scss/base.scss";'
            }
        }
    },
    productionSourceMap: false, // 打包不生成map文件
}