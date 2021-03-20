import request from './request.js';

export function getPosts() {
	return request({
		url: '/posts',
		method: 'GET'
	})
}
export function getPostById(id) {
	return request({
		url: '/posts/'+id,
		method: 'GET'
	})
}