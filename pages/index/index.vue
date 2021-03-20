<template>
	<BaseLayout>
		<view class="index-search">
			<u-search placeholder="请输入..." v-model="keyword" :show-action="false"></u-search>
		</view>
		<u-tabs class="content" :list="list" :is-scroll="false" font-size="32" :current="tabCurrent" @change="change">
		</u-tabs>
		<view class="content" v-if="tabCurrent===0">
			<u-swiper :list="imgs" border-radius='0'></u-swiper>
		</view>
		<view class="index-hot">
			<text class="i-h-title">
				<u-icon name="bell-fill" color="#2979ff" size="28"></u-icon>
				<text> 今日热门</text>
			</text>
			<view class="i-h-list">
				<text class="truncate">· 互联网是怎么跟广告业抢饭吃的？</text>
				<text class="truncate">· 中国那家老板最牛</text>
			</view>
		</view>
		<view class="index-list">
			<u-cell-group>
				<u-cell-item title="人家设计的这个才叫loading，你设计的那个顶多较多菊花" label="等待界面的设计最初的时候并不走心，现在已经花样百出，本文带你一起看看。"
					:arrow="false" title-style={font-size:40rpx}>
					<u-image width="200rpx" height="200rpx"
						src="https://scpic.chinaz.net/files/pic/pic9/202103/apic31409.jpg" slot="right-icon"></u-image>
				</u-cell-item>

			</u-cell-group>
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
				keyword: '',
				list: [{
					name: '个性推荐'
				}, {
					name: '课程'
				}, {
					name: '微专业'
				}],
				tabCurrent: 0,
				imgs: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg'
					}
				],
			};
		},
		onLoad() {

		},
		methods: {
			change(index) {
				this.tabCurrent = index;
			}
		}
	}
</script>

<style lang="scss">
	.index-search {
		width: 100%;
		padding: 16rpx 32rpx;
	}

	.index-hot {
		width: 100%;
		height: fit-content;
		padding: 32rpx;
		border-bottom: 24rpx solid #F3F4F6;

		.i-h-title {
			display: block;
			font-size: 32rpx;

			text {
				padding-left: 8rpx;
			}
		}

		.i-h-list {
			font-size: 28rpx;
			margin-top: 42rpx;

			text {
				display: block;
				margin-bottom: 12rpx;
			}
		}
	}

	.index-list {
		padding: 32rpx;
		display: flex;
		justify-content: space-between;
	}
</style>
