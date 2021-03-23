<template>
	<view class="personality-card u-padding-12">
		<u-image :src="img" width="100%" height="148"></u-image>
		<text class="u-font-xs p-c-title">{{title}}</text>
		<view class="u-flex u-row-between">
			<u-rate :count="count" v-model="value" size="20" active-color="#42B983" disabled></u-rate>
			<text class="u-font-xs">{{number}}</text>
		</view>
		<text class="p-c-price">${{price}}</text>
	</view>
</template>

<script>
	export default {
		name: "IndexCardList",
		props: {
			title: {
				type: String,
				required: false
			},
			count: {
				type: Number,
				required: false
			},
			value: {
				type: Number,
				required: false
			},
			number: {
				type: String,
				required: false
			},
			price: {
				type: Number,
				required: false
			},
			img: {
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
	.personality-card {
		display: inline-block;
		width: 316rpx;
		height: fit-content;
		background: #ffffff;
		margin-right: 12rpx;

		&:last-child {
			margin-right: unset;
		}

		.p-c-title {
			height: 64rpx;
			margin-top: 12rpx;
			white-space: pre-wrap;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}

		.p-c-price {
			font-size: 22rpx;
			color: #ff0000;
		}
	}
</style>
