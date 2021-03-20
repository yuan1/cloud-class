<template>
	<BaseLayout>
		<u-search placeholder="云课堂" v-model="keyword" :show-action="false" class="container"></u-search>
		<u-tabs :list="tabsList" :is-scroll="false" :current="tabsCurrent" font-size="26" @change="tabsChange"
			class="content">
		</u-tabs>
		<scroll-view class="personality" v-if="tabsCurrent==0">
			<u-swiper class="personality-swiper" height="360" border-radius="0" :list="personalitySwiperList">
			</u-swiper>
			<view class="personality-hot">
				<view class="p-h-title">
					<u-icon name="gift" size="30" color="#ff0000"></u-icon>
					<text>今日热门</text>
				</view>
				<view class="p-h-list">
					<view>·互联网是怎么跟广告业抢饭碗的</view>
					<view>·互联网是怎么跟广告业抢饭碗的</view>
				</view>
			</view>
			<u-gap height="16" bg-color="#f2f2f2"></u-gap>
			<u-cell-group class="personality-list">
				<u-cell-item v-for="(item,index) in personalityList.data" :key="index" :title="item.title" :label="item.desc" @click="openDetail(item.id)"
					:arrow="false">
					<u-image slot="right-icon" width="160rpx" height="160rpx" class="u-padding-16"
						:src="item.thumbnail"></u-image>
				</u-cell-item>
				<u-loadmore :status="personalityList.status" class="u-padding-top-20 u-padding-bottom-20" />
			</u-cell-group>
		</scroll-view>
	</BaseLayout>
</template>

<script>
	import BaseLayout from "../../components/BaseLayout.vue"
	import {
		getPosts
	} from "../../common/api/index.js";
	export default {
		components: {
			BaseLayout
		},
		data() {
			return {
				keyword: '',
				tabsList: [{
					name: '个性推荐'
				}, {
					name: '课程'
				}, {
					name: '微专业'
				}],
				tabsCurrent: 0,
				personalitySwiperList: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				personalityList: {
					status: 'loadmore',
					page: 0,
					data: []
				}
			}
		},
		onLoad() {
			this.loadingPersonalityList();
		},
		onReachBottom() {
			this.loadingPersonalityList();
		},
		methods: {
			tabsChange(index) {
				this.tabsCurrent = index;
				if (index == 0) {
					this.loadingPersonalityList();
				}
			},
			loadingPersonalityList() {
				if (this.personalityList.page >= 3) {
					return;
				};
				this.personalityList.status = 'loading';
				this.personalityList.page++;
				getPosts().then(data => {
					this.personalityList.data=[
						...this.personalityList.data,
						...data
					];
					if (this.personalityList.page >= 3) this.personalityList.status = 'nomore';
				})
			},
			openDetail(id){
				uni.navigateTo({
					url:"/pages/index/detail?id="+id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.personality-hot {
		width: 100%;
		padding: 15rpx 20rpx;

		.p-h-title {
			height: 80rpx;
			line-height: 80rpx;

			text {
				padding: 0 6rpx;
			}
		}

		.p-h-list {
			view {
				color: rgb(144, 147, 153);
				padding: 6rpx;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
		}
	}

	.personality-list {
		::v-deep .u-cell_title {
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		::v-deep .u-cell__label {
			white-space: pre-wrap;
		}
	}
</style>
