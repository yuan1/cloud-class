<template>
	<view>
		<view class="content">
			<slot></slot>
		</view>
		<u-tabbar :list="tabbar" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
	export default {
		name: "BaseLayout",
		data() {
			return {
				tabbar: [{
						iconPath: "/static/uview/example/component.png",
						selectedIconPath: "/static/uview/example/component_select.png",
						text: '组件',
						count: 2,
						isDot: true,
						pagePath: "/pages/index/index"
					},
					{
						iconPath: "/static/uview/example/js.png",
						selectedIconPath: "/static/uview/example/js_select.png",
						text: '工具',
						midButton: true,
						pagePath: "/pages/js/index"
					},
					{
						iconPath: "/static/uview/example/template.png",
						selectedIconPath: "/static/uview/example/template_select.png",
						text: '模板',
						pagePath: "/pages/template/index"
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
