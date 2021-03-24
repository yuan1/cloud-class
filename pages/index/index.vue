<template>
	<BaseLayout>
		<u-search placeholder="云课堂" v-model="keyword" :show-action="false" class="container"></u-search>
		<u-tabs :list="tabsList" :is-scroll="false" :current="tabsCurrent" font-size="26" @change="tabsChange"
			class="content">
		</u-tabs>
		<scroll-view v-if="tabsCurrent==0 ||tabsCurrent==1">
			<u-swiper height="360" border-radius="0" :list="personalitySwiperList">
			</u-swiper>
		</scroll-view>
		<scroll-view class="personality" v-if="tabsCurrent==0">
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
				<u-cell-item v-for="(item,index) in personalityList.data" :key="index" :title="item.title"
					:label="item.desc" @click="openDetail(item.id)" :arrow="false">
					<u-image slot="right-icon" width="160rpx" height="160rpx" class="u-padding-16"
						:src="item.thumbnail"></u-image>
				</u-cell-item>
				<view class="p-l-more" @click="openMoreList()">查看更多</view>
			</u-cell-group>
			<u-cell-group class="content" :border="false">
				<u-cell-item icon="integral-fill" title="'前端'值得学的课" :arrow="true" value="更多"></u-cell-item>
			</u-cell-group>
			<scroll-view scroll-x="true" class="personality-learn">
				<IndexCardList v-for="(card,index) in cardList" :key="card.id"
					:title="card.title" :count="card.count" :value="card.value" :number="card.number"
					:price="card.price" :img="card.thumbnail">
				</IndexCardList>
				<u-gap height="24" bg-color="#f2f2f2"></u-gap>
			</scroll-view>
			<view class="personality-pop">
				<u-image width="100%" height="380rpx" src="https://cdn.uviewui.com/uview/swiper/1.jpg"
					:lazy-load="true">
				</u-image>
				<text class="p-p-title">春季新品发布会专题春季新品发布会专题春季新品发布会专题</text>
				<text class="p-p-author">汤小元 共54个学时</text>
				<text class="p-p-info">分别从字体、构图和技法三方面完整介绍手绘POP插画的绘制方法。</text>
			</view>
		</scroll-view>
		<scroll-view class="course" v-if="tabsCurrent==1">
			<view class="u-padding-24">精选好课</view>
			<view class="course-card">
				<IndexCardList v-for="(cou,index) in coursesList" :key="cou.id" :title="cou.title" :count="cou.count"
					:value="cou.value" :number="cou.number" :price="cou.price" :img="cou.thumbnail">
				</IndexCardList>
			</view>
			<view class="c-big">
				<view class="personality-card u-padding-12">
					<u-image src="http://img.ithome.com/specialnews/2020/11/20201110_115639_393.png" width="100%"
						height="368"></u-image>
					<text class="u-font-xs p-c-title">苹果2021春季新品发布会专题</text>
					<view>
						<u-rate :count="count" v-model="value" size="20" active-color="#42B983" disabled></u-rate>
						<text class="u-font-xs u-margin-left-12">1024人学过</text>
					</view>
					<text class="p-c-price">$66.00</text>
				</view>
			</view>
		</scroll-view>
		<scroll-view v-if="tabsCurrent==2">
			<view class="depart">
				<text>跟随知名企业的一线资深工程师、设计师，</text>
				<text>以及行业知名专家学习，</text>
				<text>系统的掌握工作方法和技巧，获得全面的职业提升！</text>
				<u-button type="primary" ripple-bg-color="#3684c6" size="medium">查看所有微专业 ></u-button>
			</view>
			<view class="u-flex u-row-between u-padding-16">
				<view style="width: 49%;">
					<video style="width: 100%; height: 220rpx"
						src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"></video>
					<view class="truncate u-font-xs">深度学习工程师微专业</view>
				</view>
				<view style="width: 49%;">
					<video style="width: 100%; height: 220rpx;"
						src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"></video>
					<view class="truncate u-font-xs">地产数据分析师</view>
				</view>
			</view>
			<view>
				<view class="u-text-center">微专业导师简介</view>
				<view class="depart-author">
					<view class="d-a-card u-flex u-flex-col u-row-center">
						<u-avatar src="/static/uview/common/logo.png"></u-avatar>
						<text>吴恩达 Andrew Ng</text>
						<text>deeplearning.ai 创始人</text>
						<u-avatar src="/static/uview/common/logo.png"></u-avatar>
					</view>
					<view class="d-a-card u-flex u-flex-col u-row-center">
						<u-avatar src="/static/uview/common/logo.png"></u-avatar>
						<text>吴恩达 Andrew Ng</text>
						<text>deeplearning.ai 创始人</text>
						<u-avatar src="/static/uview/common/logo.png"></u-avatar>
					</view>
					<view class="d-a-card u-flex u-flex-col u-row-center">
						<u-avatar src="/static/uview/common/logo.png"></u-avatar>
						<text>吴恩达 Andrew Ng</text>
						<text>deeplearning.ai 创始人</text>
						<u-avatar src="/static/uview/common/logo.png"></u-avatar>
					</view>
				</view>
			</view>
		</scroll-view>
	</BaseLayout>
</template>

<script>
	import BaseLayout from "../../components/BaseLayout.vue"
	import IndexCardList from "../../components/IndexCardList.vue"
	import {
		getPosts,
		getComments,
		getCourses
	} from "../../common/api/index.js";
	export default {
		components: {
			BaseLayout,
			IndexCardList
		},
		data() {
			return {
				count: 5,
				value: 3,
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
					data: []
				},
				cardList: [],
				coursesList: []
			}
		},
		onLoad() {
			this.loadingPersonalityList();
			this.loadingPersonalityCard();
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
				if (index == 1) {
					this.loadingCoursesList();
				}
			},
			loadingPersonalityList() {
				getPosts().then(data => {
					this.personalityList.data = data
					if (this.personalityList.data.length > 4) {
						this.personalityList.data = this.personalityList.data.slice(0, 3)
					}
				})
			},
			loadingCoursesList() {
				getCourses().then(data => {
					this.coursesList = data
				})
			},
			openMoreList() {
				uni.navigateTo({
					url: "/pages/index/list"
				})
			},
			openDetail(id) {
				uni.navigateTo({
					url: "/pages/index/detail?id=" + id
				})
			},
			// 更多列表
			loadingPersonalityCard() {
				getComments().then(data => {
					this.cardList = data
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
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
		}

		.p-l-more {
			font-size: 24rpx;
			color: #2B85E4;
			padding: 16rpx 0;
			text-align: center;
		}
	}

	.personality-learn {
		// padding: 0 16rpx;
		white-space: nowrap; //阻止文本换行
		background: #f2f2f2;
	}

	.personality-pop {
		padding: 16rpx;

		text {
			display: block;
			margin-top: 20rpx;
		}

		.p-p-title {
			font-size: 28rpx;
			color: #606266;
		}

		.p-p-author {
			font-size: 24rpx;
			color: #656565;
		}

		.p-p-info {
			font-size: 24rpx;
			color: #656565;
		}
	}

	.course {
		.course-card ::v-deep .personality-card {
			width: 50%;
			margin-right: unset;
		}

		.c-big ::v-deep .personality-card {
			width: 100%;
			margin-right: unset;
		}
	}

	.depart {
		width: 100%;
		height: 780rpx;
		padding: 240rpx 0;
		background: url(https://goss.cfp.cn/static/home/h4_3.png);
		background-size: 100% 100%;

		text {
			color: #FFFFFF;
			text-align: center;
			display: block;
			font-size: 24rpx;
			margin-top: 12rpx;
		}

		::v-deep .u-size-medium {
			width: 320rpx;
			margin-top: 32rpx;
			display: flex;
		}
	}

	.depart-author {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.d-a-card {
			width: 49%;
			display: flex;
			flex-wrap: wrap;
			padding: 32rpx 0;
			margin-top: 12rpx;
			height: fit-content;
			background: #f2f2f2;

			text {
				margin-top: 12rpx;
			}
		}
	}
</style>
