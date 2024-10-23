// import url from 'postcss-url';

// api.js  
import axios from 'axios';

// 创建一个axios实例，可以配置默认的baseURL、timeout等
const apiClient = axios.create({
    baseURL: 'https://api.luffycity.com/api/v1/', // 替换为你的API基础URL
    timeout: 1000, // 请求超时时间
});

const geeClient = axios.create({
    baseURL: 'https://api.geetest.com/', // 替换为你的API基础URL
    timeout: 1000, // 请求超时时间
});

// 封装一个通用的GET请求函数
export function categorylist(params = {}) {
    return apiClient.get("/course/free/", { params })
        .then(response => {
            // 可以在这里统一处理响应数据，比如错误处理
            return response.data;
        })
        .catch(error => {
            // 处理请求错误
            console.error('GET请求失败:', error);
            throw error;
        });
}
export function CourseDetail(id, params = {}) {
    return apiClient.get(`/course/free/${id}/`, { params })
        .then(response => {
            // 可以在这里统一处理响应数据，比如错误处理
            return response.data;
        })
        .catch(error => {
            // 处理请求错误
            console.error('GET请求失败:', error);
            throw error;
        });
}
//https://api.geetest.com/get.php
const geetesturl = '/get.php'
export function geeTest() {
    // return apiClient.get('/captcha_check/')
    return geeClient.get(geetesturl)
        // 
        .then(response => {
            // 可以在这里统一处理响应数据，比如错误处理
            console.log('GET请求成功:', response)
            return response;
        })
        .catch(error => {
            // 处理请求错误
            console.error('GET请求失败:', error);
            throw error;
        });
    // return geeClient.post('/init.php', {
    //     gt: 'your_gt_key',
    //     challenge: 'your_challenge_key',
    //     offline: false,
    //     product: 'float',
    //     new_captcha: true
    // }).then(response => {
    //     // initGeetest(response.data, handlerEmbed);
    //     console.log(response)

    // }).catch(error => {
    //     console.error('Error initializing Geetest:', error);
    // });
    // };
}


// const initGeetestWithAxios = () => {
//     axios.post('https://api.geetest.com/init.php', {
//         gt: 'your_gt_key',
//         challenge: 'your_challenge_key',
//         offline: false,
//         product: 'float',
//         new_captcha: true
//     })
//    .then(response => {
//         initGeetest(response.data, handlerEmbed);
//     })
//    .catch(error => {
//         console.error('Error initializing Geetest:', error);
//     });
// };

// var handlerEmbed = function (captchaObj) {
//     captchaObj.appendTo("#captcha-container");
//     captchaObj.onSuccess(function () {
//         var validate = captchaObj.getValidate();
//         // 在这里可以将 validate 提交到服务器进行验证
//     });
// };

// initGeetestWithAxios();
// 封装一个通用的POST请求函数
export function postRequest(url, data = {}) {
    return apiClient.post(url, data)
        .then(response => {
            // 可以在这里统一处理响应数据，比如错误处理
            return response.data;
        })
        .catch(error => {
            // 处理请求错误
            console.error('POST请求失败:', error);
            throw error;
        });
}

// 你可以根据需要继续封装其他类型的请求函数，如PUT、DELETE等