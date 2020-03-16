/**
 * @description 针对请求进行封装，加入loadding
 */
import Request from '../lib/request.js'
const Http = new Request();

Http.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
	uni.showLoading({
		title: 'loadding'
	});
	wx.showNavigationBarLoading()
	return config;
})

Http.interceptor.response((response) => { /* 请求之后拦截器 */
	uni.hideLoading();
	wx.hideNavigationBarLoading();
	console.log('response', response)
	return  response && response.data
}, (response) => { // 请求错误做点什么
	wx.hideNavigationBarLoading()
	return response && response.data
})
export default Http;
