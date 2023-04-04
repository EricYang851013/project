<template>
	<view class="a">
		<!-- 登录页面正中间图标 -->
		<view class="logo">
			<view class="img">
				<image src="../../../static/logo.png" mode=""></image>
			</view>
			<!-- <text>温室管家，让温室种植更智能</text> -->
		</view>
		<!-- 登录界面 -->
		<view class="form userform">
			<view class="username">
				<input placeholder="请输入邮箱地址" v-model="phoneNumber" placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>
			<view class="password">
				<input placeholder="请输入密码" v-model="passwd" password=true
					placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>
			<view class="btn" @tap="doReg">登录</view>
			<view class="res">
				<view @tap="toEnroll">🔔使用该功能请先注册</view>
				<view>❗忘记密码请联系管理员</view>
			</view>
		</view>
	</view>
</template>
 
<script>
	// import md5 from "@/common/SDK/md5.min.js";
	export default {
		data() {
			return {
				phoneNumber: "",
				passwd: "",
				code:'dwa',
				getCodeText: '获取验证码',
				getCodeBtnColor: "#ffffff",
				getCodeisWaiting: false
			}
		},
		onLoad() {
			// const userInfo = this.getUserInfo()
			// if(userInfo){
			// 	this.phoneNumber = userInfo.username
			// 	this.passwd = userInfo.password
			// 	// this.doReg()
			// }
		},
		methods: {
			saveUserInfo (email, passwd) {
				uni.setStorageSync('username', email)
				uni.setStorageSync('password', passwd)
				console.log("1a");
			},
			getUserInfo () {
				const username = uni.getStorageSync('username')
				const password = uni.getStorageSync('password')
				if(username&&password){
					return {
						username,
						password
					}
				}else {
					return null
				}
			},
			doReg() {
				var that = this
				uni.hideKeyboard() //隐藏已经显示的软键盘，如果软键盘没有显示则不做任何操作。
				//模板示例部分验证规则
				var reg = /^([a-zA-Z\d][\w-]{2,})@(\w{2,})\.([a-z]{2,})(\.[a-z]{2,})?$/
				if (!(reg.test(this.phoneNumber))) { //校验邮箱地址
					uni.showToast({
						title: '请填写正确邮箱地址',
						icon: "none"
					});
					return false;
				}
				const requestPromise = new Promise((resolve, reject) => {
				 return uni.request({
				  	url:'http://127.0.0.1:5000/user/login',
				  	method:'POST',
				  	data:{
				  		email: this.phoneNumber,
				  		password: this.passwd
				  	},
				  	success: (res) => {
				  		this.code = res.data.error_code
						resolve()
				  	},
				  	fail: () => {
						reject()
				  	}
				  })
				})
				
				requestPromise.then(()=>{
					if (this.code == 1) {
						uni.showToast({
							title: '密码不正确',
							icon: "none"
						});
						this.code = ''
						return false;
					}else if(this.code == 0){
				  		console.log(this.code);
						uni.hideLoading()
						this.saveUserInfo(this.phoneNumber, this.passwd)
						this.$store.state.email = this.phoneNumber
						uni.showToast({
							title: '登录成功',
							icon: "none"
						});
						this.$store.state.islogin = true
						uni.navigateBack();
					}
				}, ()=>{
					uni.showToast({
						title: '服务器维护中……',
						icon: "none"
					});
					return false;
				})
			},
			toEnroll() {
				uni.hideKeyboard() //隐藏已经显示的软键盘，如果软键盘没有显示则不做任何操作。
				uni.navigateTo({
					url: 'submit'
				}); //跳转到登录页
			}
		}
	}
</script>
 
<style lang="less" scoped>
	.a {
		background: white; //整一个页面的背景颜色
		// linear-gradient(to bottom, #f06c7a 0%, #f06c7a 100%);
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.icon {
		color: #ffffff;
	}
	.logo {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 35vh;
		width: 80vw;
		margin: 0% auto;
		.img {
			width: 200rpx;
			height: 200rpx;
			image {
				width: 100%;
				height: 100%;
			}
			margin-bottom: 20rpx;
		}
		text{
			color: #1b4231;
		}
	}
	.form {
		width: 86%;
		padding: 0 7%;
		font-size: 30upx;
 
		.username,
		.password,
		.code {
			width: calc(100% - 90upx);
			height: 90upx;
			display: flex;
			align-items: center;
			border-radius: 45upx;
			background-color: #c3cbce;
			padding: 0 45upx;
			margin-bottom: 26upx;
 
			input {
				width: 100%;
				height: 50upx;
				// color: #c3cbce;
				font-weight: 200;
			}
		}
 
		.btn {
			color: white;
			width: 100%;
			height: 90upx;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 45upx;
			background-color: #388463;
			font-size: 40upx;
		}
	}
 
	.userform {
		.username {
			position: relative;
 
			.get-code {
				position: absolute;
				height: 90upx;
				display: flex;
				align-items: center;
				justify-content: center;
				right: 0;
				padding: 0 40upx;
				z-index: 3;
 
				&:after { //点击以后，左边出现白色的线
					content: " ";
					width: 1upx; //宽度为1upx
					height: 50upx; //高度为50upx
					background-color: #fff;  //背景颜色为白色
					position: absolute;
					z-index: 3;
					margin-right: 100%;
					left: 0;
					top: 20upx;
				}
			}
		}
 
		.res {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			height: 100upx;
			color:#0000ff;
			view:nth-child(2){
				color: #c46a50;
			}
		}
	}
</style>