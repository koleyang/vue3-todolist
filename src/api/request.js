import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:8080/', // 基础 URL
  timeout: 5000, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在这里可以添加一些请求前的处理，比如设置 token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // 请求错误处理
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 可以根据项目需求处理响应数据
    return response.data;
  },
  error => {
    // 响应错误处理
    if (error.response) {
      // 根据不同的响应状态码做不同的处理
      switch (error.response.status) {
        case 401:
          console.error('未授权，请重新登录');
          break;
        case 404:
          console.error('请求的资源不存在');
          break;
        default:
          console.error('请求失败，请稍后再试');
      }
    } else if (error.request) {
      console.error('请求失败，请检查网络连接');
    } else {
      console.error('请求配置错误');
    }
    return Promise.reject(error);
  }
);

export default service;