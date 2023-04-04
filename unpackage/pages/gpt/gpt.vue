<template>
<view class="charts-box">
	<view class="gpt">
		<image src="../../static/logo.png">
			<view class="title">
				<span>试试这样问：</span>
			</view>
			<hr class="foo">
			<view class="suggest">
				<view class="example" @click="navigator">
					<p>"艾叶的功效是什么？" →</p>
				</view>
				<view class="example" @click="navigator">
					<p>"什么药材清热解毒？" →</p>
				</view>
				<view class="example" @click="navigator">
					<p>"湖北省有哪些药材？" →</p>
				</view>
			</view>
	</view>
	<view class="input" @click="navigator">
		<image src="../../static/send.png">
	</view>
</view>
</template>

<script>
	import $ from 'jquery'
	export default {
		data() {
			return {};
		},
		onReady() {},
		methods: {
			navigator() {
				uni.navigateTo({
					url: "/pages/gpt/chat"
				})
			}
		},
	};
</script>
<style lang="scss" scoped>
	.charts-box {
		width: 90%;
		height: 480px;
		border: 3px solid rgba(56, 126, 135, 0.7);
		border-radius: 8px;
		box-shadow: 8px 7px 10px rgba(0, 0, 0, .5);
		position: absolute;
		left: 50%;
		top: 49%;
		transform: translate(-50%, -50%);
		background-color: #fafbff;
	}

	.gpt {
		margin-left: 10px;
		margin-right: 10px;
		margin-top: 5px;

		image {
			width: 150px;
			height: 150px;
			margin-top: 20px;
			margin-left: 80px;
		}

		.title {
			margin: 10px auto;
			text-align: center;
			font-size: 22px;
			font-weight: 550;
			color: rgb(56, 126, 135);
		}
	}

	.suggest {
		margin: 20px auto;
		// border: 1px solid black;
		width: 270px;
		height: 170px;

		span {
			font-size: 17px;
			font-weight: 550;
			color: rgb(56, 126, 135);
		}

		.example {
			// background-color: rgba(5, 5, 7, 0.6);
			// background-color: antiquewhite;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 5px;
			background-color: white;
			border: 2px solid rgba(161, 163, 190, 0.8);
			// box-shadow: 5px 5px 5px rgba(0, 0, 0, .5);
			width: 85%;
			height: 40px;
			margin: 10px auto 0;
			color: dimgray;
		}
	}

	.input {
		position: absolute;
		left: 30px;
		bottom: 10px;
		border: 2px solid rgba(56, 126, 135, 0.7);
		border-radius: 5px;
		width: 80%;
		height: 30px;

		image {
			position: absolute;
			right: 10px;
			top: 3px;
			height: 75%;
			width: 9%;
		}
	}

	.foo {
		margin-top: 2px;
		height: 1px;
	}
</style>
