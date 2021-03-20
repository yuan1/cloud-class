<template>
	<view>
		<view class="content">
			<slot></slot>
		</view>
		<u-tabbar :list="tabbar"></u-tabbar>
	</view>
</template>

<script>
	export default {
		name: "BaseLayout",
		data() {
			return {
				tabbar: [{
						iconPath: "home",
						selectedIconPath: "home-fill",
						text: '首页',
						pagePath: "/pages/index/index"
					},
					{
						iconPath: "grid",
						selectedIconPath: "grid-fill",
						text: '分类',
						pagePath: "/pages/js/index"
					},
					{
						iconPath: "coupon",
						selectedIconPath: "coupon-fill",
						text: '我的学习',
						pagePath: "/pages/template/index"
					},
					{
						iconPath: "account",
						selectedIconPath: "account-fill",
						text: '账户',
						pagePath: "/pages/account/index"
					},
				]
			};
		},
		onLoad() {
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
