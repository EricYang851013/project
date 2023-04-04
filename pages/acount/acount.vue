<template>
	<view class="me">
		<view class="loge">
			<view class="head">
				<image src="../../static/acount.png" mode=""></image>
			</view>
			<view class="func" @click="login" v-show="!$store.state.islogin">
				<text>点击注册/登录</text>
			</view>
			<view class="name" v-show="$store.state.islogin">
				用户-{{$store.state.email}}
				<text>退出登录</text>
			</view>
		</view>
		<view class="detail">
			<view class="addANode" @click="goToNode">
				<text>添加卡片</text>
				<image src="../../static/you.png" mode="" class="right"></image>
			</view>
			<view class="feedback" @click="feedBack">
				<text>问题反馈</text>
				<image src="../../static/you.png" mode="" class="right" ></image>
			</view>
			<view class="aboutUs" @click="aboutUs">
				<text>关于我们</text>
				<image src="../../static/you.png" mode="" class="right"></image>
			</view>
		</view>
	</view>
</template>
 
<script>
	import login from './components/login.vue'
	// import Components1 from '../me/components/components.vue'
	export default {
		data() {
			return {
				area:'',
				infor:0,
				value:-1,
				range:[],
				i:0
			}
		},
		components:{
			login
		},
		methods:{
			goToNode(){
				if(!this.$store.state.islogin){
					uni.navigateTo({
						url:'./components/login'
					})
				}else{
					uni.navigateTo({
						url:'./components/addCard',
					})
				}
			},
			feedBack(){
				uni.navigateTo({
					url:'./components/feedBack'
				})
			},
			aboutUs(){
				uni.navigateTo({
					url:'/pages/tabar/me/components/aboutUs'
				})
			},
			login(){
				uni.navigateTo({
					url: './components/login'
				})
			},
			getUserInfo () {
				const username = uni.getStorageSync('username')
				this.$store.state.email = username
				const password = uni.getStorageSync('password')
				// console.log(username);
				if(username&&password){
					return {
						username,
						password
					}
				}else {
					return null
				}
			},
			change(e){
				if(typeof e != 'string'){
					this.infor = this.range[e].node_number
				}else{
					this.infor = 0
				}
			}
		},
		onShow() {
			const userInfo = this.getUserInfo()
			if (userInfo == null){
				this.$store.state.islogin = false
			}else {
				this.$store.state.islogin = true
			}
			// console.log(this.$store.state.islogin);
			const requestPromise = new Promise((resolve, reject) => {
				uni.getLocation({
				  type: 'gcj02',
				  success: function (res) {
					// 获取经纬度
					var longitude = res.longitude;
					var latitude = res.latitude;
					// 调用腾讯地图API
					uni.request({
					  url: 'https://apis.map.qq.com/ws/geocoder/v1/',
					  data: {
						key: 'GYSBZ-ABUC3-OEU33-YVSKC-I4JSV-33BVI',
						location: res.latitude + ',' + res.longitude
					  },
					  success: function (res) {
						// 获取城市信息
						resolve(res.data.result.address_component.city)
					  }
					});
				  }
				});
			}).then((res)=>{
				this.area = res;
			})
		},
	}
</script>
 
<style lang="less">
	.me{
		background-image: url("../../static/denglubeijing.png");
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		width: 100vw;
		height: 400rpx;
		position: absolute;
		.loge{
			// background-color: rgba(ff ,ff,ff,.5);
			width: 85vw;
			box-shadow: 2rpx 6rpx 10rpx 0 rgba(0, 0, 0, 0.1), 0 6rpx 20rpx 0 rgba(0, 0, 0, 0.1);
			border-radius: 30rpx;
			// border: 1px solid rgba(0,0,0,0.3);
			background-color: white;
			// background-image: linear-gradient(to top, #ffffff 30%, #d5893c);
			// opacity: 0.5;
			height: 280rpx;
			margin: 0% auto;
			position: relative;
			top: 70%;
			display: flex;
			flex-direction: column;
			.head{
				width: 20vw;
				height: 20vw;
				margin: 0% auto;
				position: relative;
				top: -25%;
				border-radius: 50%;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.func{
				text{
					color: #0000ff;
				}
				margin: 0% auto;
			}
			.name{
				position: relative;
				top: -20%;
				margin: 0% auto;
				text{
					margin: 5px auto;
					color: #0000ff;
				}
			}
			.information{
				display: flex;
				justify-content: space-between;
				margin:0 20px;
				image{
					width: 5vw;
					height: 5vw;
				}
				.greenHouses{
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
				}
				.area{
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					
				}
				.infor{
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
				}
			}
		}
		.detail{
			width: 85vw;
			height: 320rpx;
			margin: 0% auto;
			margin-top: 40%;
			background-color: white;
			// box-shadow: 2rpx 6rpx 10rpx 0 rgba(0, 0, 0, 0.1), 0 6rpx 20rpx 0 rgba(0, 0, 0, 0.1);
			// border-radius: 30rpx;
			display: flex;
			flex-direction: column;
			
			.addANode{
				flex: 1;
				display: flex;
				flex-direction: row;
				align-items: center;
				border-bottom: 1px solid #c3cbce;
				box-sizing: border-box;
				image{
					width: 40rpx;
					height: 40rpx;
					margin: 0% 20rpx;
				}
				.right{
					margin-left: auto;
				}
			}
			.feedback{
				flex: 1;
				display: flex;
				flex-direction: row;
				align-items: center;
				border-bottom: 1px solid #c3cbce;
				box-sizing: border-box;
				image{
					width: 40rpx;
					height: 40rpx;
					margin: 0% 20rpx;
				}
				.right{
					margin-left: auto;
				}
			}
			.aboutUs{
				flex: 1;
				display: flex;
				flex-direction: row;
				align-items: center;
				border-bottom: 1px solid #c3cbce;
				box-sizing: border-box;
				image{
					width: 40rpx;
					height: 40rpx;
					margin: 0% 20rpx;
				}
				.right{
					margin-left: auto;
				}
			}
			
		}
	}
	
	.uni-select{
		border: none!important;
	}
</style>