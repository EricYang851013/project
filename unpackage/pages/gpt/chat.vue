<template>
	<view id="parent" class="charts-box">
		<view class="gpt" v-show="init">
			<image src="../../static/logo.png">
				<view class="answer">
					<p>您好，请问有什么我可以帮到您的?</p>
				</view>
		</view>
		
		<view class="gpt foo" v-for="(item,index) in context" :key="index"
			:class="{ odd: index % 2 === 0, even: index % 2 === 1 }">
			<image :src="getImg(index)">
				<view class="question">
					<p>{{item}}</p>
				</view>
		</view>


		<view class="input" @keydown.enter="send">
			<input id="inputcontent" v-model="question" type="text" placeholder="请输入你的问题" auto-focus="autofocus">
			<image @click="send" src="../../static/send.png">
		</view>

<!-- 		<view class="gpt" v-show="isAnswering">
			<image src="../../static/logo.png">
				<view class="answer">
					<p>加载中...</p>
				</view>
		</view> -->
	</view>
</template>

<script>
	import $, { post } from 'jquery'
	export default {
		data() {
			return {
				init: false,
				isAnswering: false,
				question: '',
				q:'',
				answer: '',
				context: []
			};
		},
		onReady() {
			setTimeout(() => {
				this.init = true
			}, 600)
		},
		methods: {
			getImg(index) {
				if (index % 2 === 0) {
					return require('../../static/acount.png');
				} else {
					return require('../../static/logo.png');
				}
			},
			handleAnswer() {
				this.context.push(this.answer)
			},
			response() {
				this.handleAnswer()
				this.isAnswering = false
			},
			handleSend() {
				if (this.isAnswering) {
					return
				}
				if (this.question.trim() !== '') {
					// console.log(this.question)
					this.context.push(this.question)
					this.q = this.question //中间变量转接
					this.question = ''
				}
				setTimeout(() => {
					this.isAnswering = true
				}, 600)				
			},
			sendQuestion() {
				uni.request({
				    url: 'http://127.0.0.1:5000/gpt/chat', 
				    data: {
				        question: this.q
				    },
					method:'POST',
				    success: (res) => {
						console.log('**********',this.question)
				        console.log(res.data);
						this.answer = res.data
						  this.response()
				    },
					fail(err) {
						console.log(err);
					}
				});
			},
			send() {
				this.handleSend()
				this.sendQuestion()
			}
		},	
	};
</script>
<style lang="scss" scoped>
	.even {
		// 机器 偶数
		flex-direction: row !important;
	}

	.odd {
		// 用户 奇数
	}

	.question,
	.answer {
		border-radius: 5px;
		margin-right: 10px;
		padding-right: 10px;

		p {
			margin-left: 15px;
			margin-bottom: 10px;
			width: 215px;
			white-space: pre-wrap;
			word-wrap: break-word;
		}

		// background-color: antiquewhite;
		background-color: rgba(190, 240, 206, 0.5);
	}
	.answer{
		background-color: rgba(208, 208, 208, 0.1);
		border: 1px solid rgba(34, 34, 34, 0.1);
	}

	.gpt {
		// border: 2px solid rgba(56, 126, 135, 0.7);
		display: flex;
		margin: 40px 10px;

		image {
			width: 40px;
			height: 40px;
			margin-right: 10px;
		}

		p {
			margin-top: 10px;
		}
	}

	.foo {
		flex-direction: row-reverse;
	}

	.input {
		background-color: #fff;
		position: fixed;
		margin-bottom: 10px;
		bottom: 18px;
		left: 50%;
		transform: translateX(-50%);
		border: 2px solid rgba(56, 126, 135, 0.7);
		border-radius: 5px;
		box-shadow: 5px 5px 5px rgba(0, 0, 0, .5);
		width: 80%;
		height: 35px;

		image {
			position: absolute;
			right: 10px;
			top: 6px;
			height: 75%;
			width: 9%;
		}

		input {
			// border: 2px solid rgba(56, 126, 135, 0.7);
			margin-top: 6px;
			margin-left: 8px;
			width: 82%;
		}
	}

	.charts-box {
		padding-bottom: 50px;
	}
</style>
