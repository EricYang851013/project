<template>
	<view class="content" v-if="selected">
		<view class="image">
			<view class="img1"></view>
			<view class="img2"></view>
			<view class="img3"></view>
			<view class="img">
				<!-- <span>......</span> -->
			</view>
		</view>
		<view class="suozaidi">
			<view class="s">
				<span class="fa fa-arrow-circle-right"></span>
				<span>地区分布：</span>
			</view>
			
			<view class="location">
				{{location}}
			</view>
		</view>
		<view class="one">
			<view class="o">
				<span class="fa fa-align-center"></span>
				<span>植物形态：</span>
			</view>
			<view class="first_cont ">
				{{content_one}}
			</view>
		</view>
		<view class="two">
			<view class="t">
				<span class="fa fa-unlink"></span>
				<span>功效作用：</span>
			</view>
			<view class="second_cont">
				{{content_two}}
			</view>
		</view>
		<view class="three">
			<view class="th">
				<span class="fa fa-exclamation"></span>
				<span>使用禁忌：</span>
			</view>
			<view class="third_cont">
				{{content_three}}
			</view>
		</view>
		<view class="four">
			<view class="f">
				<span class="fa fa-search"></span>
				<span>药理研究：</span>
			</view>
			<view class="third_cont">
				{{content_four}}
			</view>
		</view>
		
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				content_one:'',
				content_two:'',
				content_three:'',
				content_four:'',
				location:''
			}
		},
		computed: {
			...mapState(['selected'])
		},
		props: ['card'],
		mounted(){
			setTimeout(()=>{
				this.content_one = this.card.zhiwuxiangtai
				this.content_two = this.card.gongxiao
				this.content_three = this.card.jinji
				this.content_four = this.card.yanjiu
				this.location = this.card.chandifenbu
			},500)
		}
	}
</script>

<style lang="scss">
.content {
	margin-top: 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	// align-items: center;
	.image{
		display: flex;
		flex-direction: row;
		margin: 0 auto;
		.img1{
			width: 60px;
			height: 60px;
			background-size: 150%;
			background-position: 23%;
			background-image: url('../../../static/caoyao_card/dangshenxijie.jpg');
			border-radius: 50px;
			margin: 20px 8px;
		}
		.img2{
			width: 60px;
			height: 60px;
			background-size: 150%;
			background-position: 23%;
			background-image: url('../../../static/caoyao_card/dangshenxijie2.jpg');
			border-radius: 50px;
			margin: 20px 8px;
		}
		.img3{
			width: 60px;
			height: 60px;
			background-size: 150%;
			background-position: 23%;
			background-image: url('../../../static/caoyao_card/dangshenxijie3.jpg');
			border-radius: 50px;
			margin: 20px 8px;
		}
		.img{
			width: 60px;
			height: 60px;
			background-color: #d4d4d4;
			background-image: url('../../../static/24gf-ellipsis.png');
			background-size: 50%;
			background-position: center;
			background-repeat: no-repeat;
			border-radius: 50px;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			margin: 20px 8px;
		}
	}
	.suozaidi{
		display: flex;
		flex-direction: row;
		justify-content: center;
		
		width: 90vw;
		margin: 0 auto;
		.image{
			width: 20px;
			height: 20px;
		}
		.s{
			white-space: nowrap;
			.fa{
				margin-top: 3px;
				margin-right: 5px;
				white-space: nowrap;
				// margin-right: 5px;
			}
		}
	}
	.one{
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 90vw;
		margin: 0 auto;
		.o{
			white-space: nowrap;
			.fa{
				margin-right: 5px;
				margin-top: 18px;
				// white-space: nowrap;
			}
		}
	}
	.first_cont{
		width: 85vw;
		// margin: 10px auto;
		margin-top: 10px;
	}
	.two{
		display: flex;
		flex-direction: row;
		justify-content: center;width: 90vw;
		margin: 0 auto;
		.t{
			white-space: nowrap;
			.fa{
				margin-right: 5px;
				margin-top: 18px;
				white-space: nowrap;
			}			
		}

	}
	.second_cont{
		width: 85vw;
		// margin: 10px auto;
		margin-top: 10px;
	}
	.three{
		display: flex;
		flex-direction: row;
		justify-content: center;width: 90vw;
		margin: 0 auto;
		.th{
			white-space: nowrap;
			.fa{
				margin-top: 20px;
				margin-right: 10px;
				margin-left: 5px;
				white-space: nowrap;
			}		
		}

	}
	.third_cont{
		width: 85vw;
		// margin: 10px auto;
		margin-top: 10px;
	}
	.four{
		display: flex;
		flex-direction: row;
		justify-content: center;width: 90vw;
		margin: 0 auto;
		.f{
			white-space: nowrap;
			.fa{
				margin-top: 18px;
				margin-right: 6px;
				// margin-left: 5px;
				white-space: nowrap;
			}		
		}
	
	}
	.third_cont{
		width: 85vw;
		// margin: 10px auto;
		margin-top: 10px;
	}
}
</style>
