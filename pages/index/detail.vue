<template>
	<view>
		{{postData}}
	</view>
</template>

<script>
	import {
		getPostById
	} from '../../common/api/index.js';
	export default {
		data() {
			return {
				id: "",
				postData: {}
			};
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.id); //打印出上个页面传递的参数。。
			this.id = option.id;
			this.loadPostDetail();
		},
		methods: {
			loadPostDetail() {
				getPostById(this.id).then(data => {
					this.postData=data;
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
