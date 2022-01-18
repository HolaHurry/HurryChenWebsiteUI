import request from './request';
import setUnAuthPage from './setUnAuthPage';

request.install = function (Vue, options) {
    // 请求拦截器
    request.api.interceptors.request.use(config => {
        // 用户自定义上下文路径
        if (options && options.contextPath) {
            config.url.replace('#{CONTEXTPATH}', options.contextPath);
        }
        return config;
    }, error => Promise.reject(error));

    // 响应拦截器
    request.api.interceptors.response.use(response => response.data, err => {
        // 用户自定义错误处理
        if (options && options.errHandler) {
            options.errHandler(err);
        }
        // 登录未通过，跳转到网关登录接口
        // const responseData = err.response.data && err.response.data.data || {};
        // const isApi401 = err.response.status === request.HTTP_STATUS_CODE.UNAUTHORIZED;
        // const isGateway401 = responseData.gw_code === request.HTTP_STATUS_CODE.UNAUTHORIZED;
        return Promise.reject(err);
    });
    Vue.prototype.$api = request;
};
request.setUnAuthPage = setUnAuthPage;

export default request;