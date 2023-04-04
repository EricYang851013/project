<template>
	<view class="content">
		<view class="in">
			<textarea name="" id="" cols="30" rows="10" placeholder="请尽量详细描述您的问题。比如在哪个页面，有什么错误提示。我们将会尽快回复您。感谢您给我们的建议。" v-model="feedback"></textarea>
		</view>
		<view class="notice">
			<text>请上传图片（可选，最多三张）</text>
		</view>
		<view class="upload" @click="upload">
			<image src="../../../static/tianjia.png" mode="" v-model="img"></image>
		</view>
		<button class="btn" @click="submit" :disabled="disabled">提交</button>
		
	</view>
</template>

<script>
	export default{
		data(){
			return  {
				feedback:'',
				img:'',
				disabled:true,
			}
		},
		watch:{
			feedback(){
				if(this.feedback){
					this.disabled = false
				}else{
					this.disabled = true
				}
			}
		},
		methods:{
			submit(){
				console.log(this.feedback);
				// 提交也可以打开，可以点击提交按钮后可以将信息传给后端
				uni.showModal({
					content: "dawd"
				})
			},
			upload(){
				let that = this
				uni.chooseImage({
					count:3,
					sourceType: ['album','camera'],
					success:function(res){
						// console.log(JSON.stringify(res.tempFilePaths));
						// 这里可以将图片信息打印出来，可以转成base64码传给后端
						uni.previewImage({
							urls:res.tempFilePaths,
							longPressActions: {
								itemList: ['上传图片'],
								success: function(data) {
									console.log("sucess");
								},
								fail: function(err) {
									console.log(err.errMsg);
								}
							},
							// success:function(res){
								
							// },
							// fail:function(res){
							// 	console.log(res);
							// }
						})
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.uni-page-head{
		
	}
	.content{
		height: calc(100vh - (44px + env(safe-area-inset-top)));
		// height: 100vh;
		overflow: hidden;
	}
	.in{
		margin-top: 30rpx;
		textarea{
			margin: auto;
			width: 75vw;
			height: 350rpx;
			background-color: #f0f3f4;
			padding: 35rpx ;
			border-radius: 40rpx;
		}
	}
	.upload{
		width: 150rpx;
		height: 150rpx;
		image{
			width: 100%;
			height: 100%;
			background-blend-mode: lighten;
		}
	}
	.notice{
		margin: 40rpx 50rpx;
	}
	.upload{
		margin: 40rpx 50rpx;
	}
	.btn{
		width: 85vw;
		// bottom: calc(var(--window-on-bottom));
		position: absolute;
		left: 0%;
		right: 0%;
		bottom: 10%;
		border-radius: 100rpx;
		background-color: #388463;
		color: white;
	}
</style>