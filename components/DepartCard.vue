<template>

		<view class="depart-card u-flex u-flex-col u-row-center">
			<u-avatar :src="avatar"></u-avatar>
			<text>{{author}}</text>
			<text>{{info}}</text>
			<u-image :src="img" width="100%" height="68"></u-image>
			<view class="d-c-line" />
		</view>

</template>

<script>
	export default {
		name: "DepartCardList",
		props: {
			img: {
				required: false,
				type: String,
				default: ""
			},
			author: {
				type: String,
				required: false,
				default: ""
			},
			info: {
				type: String,
				required: false,
				default: ""
			},
			avatar: {
				required: false,
				type: String,
				default: ""
			},
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.depart-card {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		height: fit-content;

		text {
			margin-top: 12rpx;
		}

		.d-c-line {
			width: 80%;
			margin-top: 20rpx;
			border-top: 1px #f2f2f2 solid;
		}
	}
</style>
