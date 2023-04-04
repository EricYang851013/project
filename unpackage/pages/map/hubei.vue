<template>
<view>
	<view class="charts-box">
		<qiun-data-charts type="map" :opts="{extra:{map:{mercator:true}}}" :chartData="chartsDataMap1" />
		<view v-show="show">
			<view class="title">
				<view class="decoration"></view>
				<span class="text">湖北省药材</span>
			</view>
			<view class="placeholder">
				<view class="content one" style="left: 20px;">
					<view class="item">
						<img class="img" src="../../static/plan.png"></img>
						<span class="name">艾叶</span>
					</view>
					<view class="item">
						<img class="img" src="../../static/plan.png"></img>
						<span class="name">白及</span>
					</view>
					<view class="item">
						<img class="img" src="../../static/plan.png"></img>
						<span class="name">前胡</span>
					</view>
					<view class="item">
						<img class="img" src="../../static/plan.png"></img>
						<span class="name">香附</span>
					</view>
					<view class="item">
						<img class="img" src="../../static/plan.png"></img>
						<span class="name">玄参</span>
					</view>
					<view class="item">
						<img class="img" src="../../static/plan.png"></img>
						<span class="name">桑叶</span>
					</view>
				</view>
				<view class="content two" style="left: 350px;">
					<view class="item" @click="navigator">
						<img class="img" src="../../static/plan.png"></img>
						<span class="name">白前</span>
					</view>
					<view class="item">
						<img class="img" src="../../static/plan.png"></img>
						<span class="name">栀子花</span>
					</view>
					<view class="item">
						<img class="img" src="../../static/plan.png"></img>
						<span class="name">百合</span>
					</view>
					<view class="item last">
						<img class="img" src="../../static/plan.png"></img>
						<span class="name">百合</span>
					</view>
				</view>
				<view class="arrow">
					<img @click="pre" class="left" src="../../static/arrow.png">
					<img @click="next" class="right" src="../../static/arrow.png">
				</view>
			</view>
		</view>
	</view>
	<view class="alert">
		<p>*地图来源于高德开放平台，<br>该版本数据更新于2021.5</p>
	</view>
</view>
</template>


<script module="echarts" lang="renderjs">
	//下面是演示数据，您的项目不需要引用，数据需要您从服务器自行获取
	import mapdata from '@/mockdata/hubeidata.json'
	// import $ from 'jquery'
	export default {
		data() {
			return {
				chartsDataMap1: {},
				show: false
			};
		},
		onReady() {
			//模拟从服务器获取数据
			this.getServerData()
		},
		methods: {
			getServerData() {
				setTimeout(() => {
					this.chartsDataMap1 = {
						series: mapdata.features
					}
					this.show = !this.show
				}, 300)
			},
			next() {
				let one = document.querySelector('.one')
				let two = document.querySelector('.two')
				one.style.left = '-400px'
				two.style.left = '20px'
			},
			pre() {
				let one = document.querySelector('.one')
				let two = document.querySelector('.two')
				one.style.left = '20px'
				two.style.left = '350px'
			},
			navigator() {
				console.log(111)
				uni.switchTab({
					url:'../card/card'
				})
			}
		},
	};
</script>


<style lang="scss" scoped>
	.alert{
		position: absolute;
		bottom: 0;
		right: 0;
		font-size: 5px;
		color: gray;
	}
	.charts-box {
		width: 80%;
		padding: 10px;
		border: 3px solid rgba(56, 126, 135, 0.7);
		border-radius: 8px;
		box-shadow: 8px 7px 10px rgba(0, 0, 0, .5);
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		overflow: hidden;
	}

	.title {
		position: absolute;
		left: 50%;
		top: 245px;
		transform: translateX(-50%);
		display: flex;
		align-items: center;

		.decoration {
			display: inline-block;
			height: 30px;
			width: 5px;
			border: 1px solid rgb(52, 104, 104);
			border-radius: 10px;
			background-color: rgb(52, 104, 104);
		}

		.text {
			margin-left: 8px;
			color: rgb(52, 104, 104);
			color: rgb(33, 175, 140);
			letter-spacing: 1px;
			font-weight: 600;
		}
	}

	.placeholder {
		margin: 30px auto 20px;
		height: 200px;
		width: 280px;
	}

	.content {
		// border: 1px solid black;
		position: absolute;
		margin: 20px auto 5px;
		height: 200px;
		width: 280px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		transition: all .3s;

		.item {
			padding-left: 5px;
			display: flex;
			align-items: center;
			border: 2px solid black;
			border-radius: 5px;
			width: 100px;
			height: 38px;

			.img {
				width: 40%;
				height: auto;
				max-width: 35%;
			}

			.name {
				font-weight: 600;
				letter-spacing: 1px;
			}
		}
	}

	.two {
		margin-top: 15px;
		height: 150px !important;
	}

	.last {
		opacity: 0;
	}

	.arrow {
		position: absolute;

		.left {
			position: absolute;
			top: 90px;
			left: -30px;
			width: 50px;
			transform: scaleX(-1);
		}

		.right {
			position: absolute;
			top: 90px;
			right: -312px;
			width: 50px;
		}
	}
</style>
