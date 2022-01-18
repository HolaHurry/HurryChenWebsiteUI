const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

const path = require('path');
const proxyList = require('./src/config/proxy');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
     // 基本路径
    publicPath: '/',

    devServer: {
        port: 9999,
        host: '0.0.0.0',
        // 自动启动浏览器
        open: false,
        proxy: proxyList
    },
    chainWebpack: (config) => {
        config.plugins.delete('prefetch');
        config.resolve.alias
        .set('@', resolve('src'))
        .set('@c',resolve('src/assets/css'))
        .set('@css', resolve('src/components'))
    },
    configureWebpack: {
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            })
        ]
    },
    // configureWebpack: {
    //     plugins: [
    //       require('unplugin-auto-import/webpack')({ /* options */ }),
    //     ]
    // },
     // 第三方插件配置
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './src/assets/css/common.less'),
                path.resolve(__dirname, './src/assets/css/layout.less')
            ]
        }
    }
}