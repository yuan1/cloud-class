<template>
	<BaseLayout>
		<image class="logo" src="/static/uview/common/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</BaseLayout>
</template>

<script>
	import BaseLayout from "../../components/BaseLayout.vue"
	export default {
		components: {
			BaseLayout
		},
		data() {
			return {
				title: '模板'
			}
		},
		onLoad() {

		}
	}
</script>

<style>

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
