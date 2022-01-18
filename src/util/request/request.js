
// 引用axios
import axios from 'axios';
import qs from 'qs';
const Url = require('url-parse');
const GET_MAX_LENGTH = 1000;
import {
    HTTP_STATUS_CODE
} from './constants';

/**
 * 请求工具主函数
 * @param {string} method 方法类型
 * @param {string} url 接口地址
 * @param {object} params 参数
 * @param {object} headers 请求头对象
 * @param {object} configs 配置对象
 * @returns {promise} 请求回调
 */
function apiAxios(method, url, params, headers, configs) {
    return axios(Object.assign({
        method: method,
        url: url,
        headers: headers,
        data: method === 'POST' || method === 'PUT' || method === 'PATCH' || method === 'DELETE' ? params : null,
        params: method === 'GET' ? params : null,
        paramsSerializer: paramsSerializer => qs.stringify(paramsSerializer, {
            indices: false
        })
    }, configs));
}

// 返回在vue模板中的调用接口
export default {
    qs,
    api: axios,
    HTTP_STATUS_CODE,
    get: function (url, params, headers, configs) {
        let urlTemp = url;
        if (!url.startsWith('/')) {
            urlTemp = `/${url}`;
        }
        const urlObj = new Url(urlTemp);
        let query = urlObj.query;
        const paramsInJson = qs.stringify(params, {
            indices: false
        });
        query = query ? `${query}&${paramsInJson}` : `?${paramsInJson}`;
        const fullUrl = urlObj.pathname + query;
        // 长度超过1000改成post请求
        if (fullUrl.length > GET_MAX_LENGTH) {
            // 删掉问号
            query = query.substring(1);
            const headersTemp = Object.assign({}, headers, {
                'X-HTTP-Method-Override': 'GET',
                'content-type': 'application/x-www-form-urlencoded'
            });
            return apiAxios('POST', urlObj.pathname, query, headersTemp, configs);
        }
        return apiAxios('GET', urlTemp, params, headers, configs);
    },
    post: function (url, params, headers, configs) {
        let urlTemp = url;
        if (!url.startsWith('/')) {
            urlTemp = `/${url}`;
        }
        return apiAxios('POST', urlTemp, params, headers, configs);
    },
    patch: function (url, params, headers, configs) {
        let urlTemp = url;
        if (!url.startsWith('/')) {
            urlTemp = `/${url}`;
        }
        return apiAxios('PATCH', urlTemp, params, headers, configs);
    },
    put: function (url, params, headers, configs) {
        let urlTemp = url;
        if (!url.startsWith('/')) {
            urlTemp = `/${url}`;
        }
        return apiAxios('PUT', urlTemp, params, headers, configs);
    },
    delete: function (url, params, headers, configs) {
        let urlTemp = url;
        if (!url.startsWith('/')) {
            urlTemp = `/${url}`;
        }
        return apiAxios('DELETE', urlTemp, params, headers, configs);
    }
};
