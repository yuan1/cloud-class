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
export function getComments() {
	return request({
		url: '/comments',
		method: 'GET'
	})
}
export function getCourses() {
	return request({
		url: '/courses',
		method: 'GET'
	})
}