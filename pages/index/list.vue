<template>
	<scroll-view>
	<u-cell-group class="personality-list">
		<u-cell-item v-for="(item,index) in personalityList.data" :key="index" :title="item.title" :label="item.desc"
			@click="openDetail(item.id)" :arrow="false">
			<u-image slot="right-icon" width="160rpx" height="160rpx" class="u-padding-16" :src="item.thumbnail">
			</u-image>
		</u-cell-item>
		<u-loadmore :status="personalityList.status" class="u-padding-top-20 u-padding-bottom-20" />
	</u-cell-group>
	</scroll-view>
</template>

<script>
	import {
		getPosts
	} from "../../common/api/index.js";
	export default {
		data() {
			return {
				personalityList: {
					status: 'loadmore',
					page: 0,
					data: []
				},
			};
		},
		onLoad() {
			this.loadingPersonalityList();
		},
		onReachBottom() {
			this.loadingPersonalityList();
		},
		methods: {
			loadingPersonalityList() {
				if (this.personalityList.page >= 3) {
					return;
				};
				this.personalityList.status = 'loading';
				this.personalityList.page++;
				getPosts().then(data => {
					this.personalityList.data = [
						...this.personalityList.data,
						...data
					];
					if (this.personalityList.page >= 3) this.personalityList.status = 'nomore';
				})
			},
			openDetail(id) {
				uni.navigateTo({
					url: "/pages/index/detail?id=" + id
				})
			}
		}
	}
</script>

<style lang="scss">
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
			color: #2979FF;
			padding: 16rpx;
			text-align: center;
			font-size: 24rpx;
		}
	}
</style>
