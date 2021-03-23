const server_url = process.env.NODE_ENV === 'development' ? 'http://10.0.0.75:9090' : 'http://***/api';; //请求地址
let token = ' '; //凭证
function service(options = {}) {
	options.url = `${server_url}${options.url}`;
	//配置请求头
	options.header = {
		'content-type': 'application/x-www-form-urlencoded',
		'token': `${token}` //Bearer 
	};

	return new Promise((resolved, rejected) => {
		//成功
		options.success = (res) => {

			if (Number(res.statusCode) == 200) { //请求成功
				resolved(res.data);
			} else {
				uni.showToast({
					icon: 'none',
					duration: 3000,
					title: `${res.errMsg}`
				});
				rejected(res.errMsg); //错误
			}

		}
		//错误
		options.fail = (err) => {
			uni.showToast({
				icon: 'none',
				duration: 3000,
				title: `${err.errMsg}`
			});
			rejected(err); //错误
		}
		uni.request(options);
	});
}
export default service;
