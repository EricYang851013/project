<template>
	<view class="content">
		<view class="backgroud">
		</view>
		<view class="add">
			<view class="title">
				<!-- <text>添加节点</text> -->
			</view>
			<view class="nodeName">
				<input type="text" placeholder="中药名称" v-model="input1">
			</view>
			<view class="dapengNum">
				<input type="text" placeholder="所属地区" v-model="input4">
			</view>
			<view class="class">
				<input type="text" placeholder="详细描述" v-model="input5">
			</view>
		</view>
		<button class="btn" :disabled="disabled" @click="dimit">提交</button>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				disabled:true,
				input1:"",
				input2:"",
				input3:"",
				input4:"",
				input5:""
			}
		},
		onLoad() {
	
		},
		methods:{
			dimit(){
				uni.request({
					url:'http://aymep4.natappfree.cc/api/addNode',
					method:'POST',
					data:{
						email:this.$store.state.email,
						nodeName:this.input1,
						nodeNum:this.input2,
						dapengName:this.input3,
						dapengNum:this.input4,
						class:this.input5
					},
					success: (res) => {
						console.log(this.$store.state.email)
						if(res.statusCode == 500){
							uni.showModal({
								content:"请勿重复添加节点",
								showCancel:false,
								confirmColor:"black",
								success: () => {
									this.input1 = ""
									this.input2 = ""
									this.input3 = ""
									this.input4 = ""
									this.input5 = ""
								}
							})
						}else if(res.statusCode == 200){
							uni.showModal({
								content:"添加节点成功",
								showCancel:false,
								confirmColor:"black",
								success: () => {
									this.input1 = ""
									this.input2 = ""
									this.input3 = ""
									this.input4 = ""
									this.input5 = ""
								}
							})
						}
					},
					fail: () => {
						uni.showModal({
							content:"添加节点失败",
							showCancel:false,
							confirmColor:"black",
							success: () => {
								this.input1 = ""
								this.input2 = ""
								this.input3 = ""
								this.input4 = ""
								this.input5 = ""
							}
						})
					}
				})
				
			}
		},
		watch:{
			input1(){
				if(this.input1&&this.input2&&this.input3&&this.input4&&this.input5)
				{
					this.disabled=false
				}
				else{
					this.disabled=true
				}
			},
			input2(){
				if(this.input1&&this.input2&&this.input3&&this.input4&&this.input5)
				{
					this.disabled=false
				}
				else{
					this.disabled=true
				}
			},
			input3(){
				if(this.input1&&this.input2&&this.input3&&this.input4&&this.input5)
				{
					this.disabled=false
				}
				else{
					this.disabled=true
				}
			},
			input4(){
				if(this.input1&&this.input2&&this.input3&&this.input4&&this.input5)
				{
					this.disabled=false
				}
				else{
					this.disabled=true
				}
			},
			input5(){
				if(this.input1&&this.input2&&this.input3&&this.input4&&this.input5)
				{
					this.disabled=false
				}
				else{
					this.disabled=true
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.content{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.backgroud{
		background-image: url("../../../static/denglubeijing.png");
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		width: 100vw;
		height: 400rpx;
	}
	.add{
		margin: 50rpx auto;
		box-shadow: 2rpx 6rpx 10rpx 0 rgba(0, 0, 0, 0.1), 0 6rpx 20rpx 0 rgba(0, 0, 0, 0.1);
		border-radius: 30rpx;
		width: 85vw;
		height: 38vh;
		display: flex;
		flex-direction: column;
		.title{
			margin-top: 5px;
			flex: 1;
			display: flex;
			align-items: center;
			text{
				margin: 0% 40rpx;
				color: #388463;
				font-weight: 600;
			}
		}
		.nodeName{
			display: flex;
			align-items: center;
			flex: 2;
			justify-content: center;
			input{
				border-bottom: 1px solid #c3cbce;
				width: 70vw;
			}
		}
		.nodeNum{
			flex: 2;
			display: flex;
			align-items: center;
			justify-content: center;
			input{
				border-bottom: 1px solid #c3cbce;
				width: 70vw;
			}
		}
		.dapengName{
			flex: 2;
			display: flex;
			align-items: center;
			justify-content: center;
			input{
				border-bottom: 1px solid #c3cbce;
				width: 70vw;
			}
		}
		.dapengNum{
			flex: 2;
			display: flex;
			align-items: center;
			justify-content: center;
			input{
				border-bottom: 1px solid #c3cbce;
				width: 70vw;
			}
			
		}
		.class{
			flex: 2;
			display: flex;
			align-items: center;
			justify-content: center;
			input{
				border-bottom: 1px solid #c3cbce;
				width: 70vw;
			}
			margin-bottom: 50rpx;
		}
	}
	.btn{
		background-color: #388463;
		width: 70vw;
		border-radius: 200rpx;
		color: white;
	}
</style>