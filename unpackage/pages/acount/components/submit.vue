<template>
	<view class="a">
		<!-- 登录页面正中间图标 -->
		<view class="logo">
			<view class="img">
				<!-- <image src="../../../../static/LOGO (1).png" mode=""></image> -->
				
			</view>
			<!-- <text>温室管家，让温室种植更智能</text> -->
		</view>
		<!-- 注册界面 -->
		<view class="form userform">
			<view class="username">
				<view class="get-code" :style="{'color':getCodeBtnColor}" @click.stop="getCode()">{{getCodeText}}</view>
				<input placeholder="请输入邮箱地址" v-model="phoneNumber" placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>
			<view class="code">
				<input placeholder="请输入验证码" v-model="code" placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>
			<view class="password">
				<input placeholder="请输入密码" v-model="passwd" password=true
					placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>
			<view class="btn" @tap="doReg">注册</view>
		</view>
 
	</view>
</template>
 
<script>
	// import md5 from "@/common/SDK/md5.min.js";
	export default {
		data() {
			return {
				phoneNumber: "",
				code:'',
				codeGet:'',
				passwd: "",
				getCodeText: '获取验证码',
				getCodeBtnColor: "#ffffff",
				getCodeisWaiting: false
			}
		},
		onLoad() {
 
		},
		methods: {
			Timer() {},
			saveUserInfo (email, passwd) {
				uni.setStorageSync('username', email)
				uni.setStorageSync('password', passwd)
			},
			getCode() {
				uni.hideKeyboard() //隐藏已经显示的软键盘，如果软键盘没有显示则不做任何操作。
				if (this.getCodeisWaiting) {
					return;
				}
				var reg = /^([a-zA-Z\d][\w-]{2,})@(\w{2,})\.([a-z]{2,})(\.[a-z]{2,})?$/
				if (!(reg.test(this.phoneNumber))) { //校验邮箱
					uni.showToast({
						title: '请填写正确邮箱地址',
						icon: "none"
					});
					return false;
				}
				this.getCodeText = "发送中..." //发送验证码
				this.getCodeisWaiting = true;
				this.getCodeBtnColor = "rgba(255,255,255,0.5)" //追加样式，修改颜色
				uni.request({
					url:'http://127.0.0.1:5000/captcha',
					method:'POST',
					data: {
						email: this.phoneNumber,
					},
					success: () => {
						uni.showToast({
							title: '验证码已发送',
							icon: "none"
						}); //弹出提示框
						this.setTimer()
					},
					fail: () => {
						uni.showToast({
							title: '发送失败',
							icon: "none"
						}); //弹出提示框
						this.setTimer()
					}
				})
				
				// setTimeout(() => {
				// 	uni.showToast({
				// 		title: '验证码已发送',
				// 		icon: "none"
				// 	}); //弹出提示框
				// 	// this.code = '1234'; //发送验证码，进行填入
				// 	this.setTimer(); //调用定时器方法
				// }, 1000)

			},
			//setTimer： 需要每隔一段时间执行一件事的的时候就需要使用SetTimer函数
			setTimer() {
				let holdTime = 60; //定义变量并赋值
				this.getCodeText = "重新获取(60)"
				//setInterval（）是一个实现定时调用的函数，可按照指定的周期（以毫秒计）来调用函数或计算表达式。
				//setInterval方法会不停地调用函数，直到 clearInterval被调用或窗口被关闭。
				this.Timer = setInterval(() => {
					if (holdTime <= 0) {
						this.getCodeisWaiting = false;
						this.getCodeBtnColor = "#ffffff";
						this.getCodeText = "获取验证码"
						clearInterval(this.Timer); //清除该函数
						return; //返回前面
					}
					this.getCodeText = "重新获取(" + holdTime + ")"
					holdTime--;
				}, 1000)
			},
			doReg() {
				uni.hideKeyboard() //隐藏已经显示的软键盘，如果软键盘没有显示则不做任何操作。
				//模板示例部分验证规则
				var reg = /^([a-zA-Z\d][\w-]{2,})@(\w{2,})\.([a-z]{2,})(\.[a-z]{2,})?$/
				if (!(reg.test(this.phoneNumber))) { //校验手机号码
					uni.showToast({
						title: '请填写正确邮箱地址',
						icon: "none"
					});
					return false;
				}
				uni.request({
					url:'http://127.0.0.1:5000/user/register',
					method:'POST',
					data: {
						email: this.phoneNumber,
						captcha: this.code,
						password: this.passwd
					},
					success: (res) => {
						this.codeGet = res.code
						uni.navigateTo({
							url: './login'
						})
					}
				})
				if (this.codeGet != 0) {
					uni.showToast({
						title: '验证码不正确',
						icon: "none"
					});
					return false;
				}
				uni.showLoading({
					title: '提交中...'
				})
				//把用户注册信息储存在本地
				this.saveUserInfo(this.phoneNumber, this.passwd)
			}
		}
	}
</script>
 
<style lang="less" scoped>
	.a {
		background: white; //整一个页面的背景颜色
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
			justify-content: center;
			align-items: center;
			height: 100upx;
			color:#0000ff;
		}
	}
</style>