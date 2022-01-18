/**
 * 代理
 */

module.exports = {
    '/bingTool': {
        target: 'https://cn.bing.com',
        // 这个真得跨域
        changeOrigin: true,
        pathRewrite: {
            'bingTool': ''
        }
    }
};