<template>
	<BaseLayout>
	
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
				title: '账户',
				keyword: '',
		
			};
		},
		methods: {
		
		}
	}
</script>

<style lang="scss">

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
