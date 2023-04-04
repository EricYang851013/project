<template>
	<view class="card" :class="{
      card__active: card.active,
      card__selected: selected
    }">
		<CardFront :card="card" @click.native="toggleCard({ card })" :style1="cardFrontStyle"></CardFront>
		<CardBack :card="card" @click.native="handleClick" ></CardBack>
	</view>
</template>

<script module="render" lang="renderjs">
	import { mapMutations } from 'vuex'
	import CardFront from './CardFront.vue'
	import CardBack from './CardBack.vue'
	export default {
		components:{
			CardFront,
			CardBack
		},
		props: {
			card: {
				type: Object
			},
			selected: {
				type: Boolean
			},
			cardFrontStyle: {
				type: Object,
				default: () => ({})
			}
		},
		methods: {
			...mapMutations(['toggleCard']),
			handleClick () {
				// 定义一个点击事件，想点击back后拿到位置信息，传递给select自定定义事件，之后在List触发自定义事件绑定的Vuex事件
				// const appRect = document.querySelector('#app').getBoundingClientRect()
				const appRect = uni.getSystemInfoSync().safeArea
				const elRect = this.$el.getBoundingClientRect()
				const card = this.card
				const rect = {}
				rect.top = elRect.top - appRect.top
				rect.left = elRect.left - appRect.left
				rect.width = elRect.width
				rect.height = elRect.height
				rect.appWidth = appRect.width
				rect.appHeight = appRect.height
				this.$emit('select', { rect, card })
				// 向select事件传入参数
			}
		}
	}
</script>

<style lang="scss">
.card {
  position: relative;
  // width: 100%;
  height: 100%;
}
.card__selected {
  visibility: hidden;
}

.card__active {
  .card_back {
    transform: scale(1.04);
    opacity: 1;
  }
  .card_front {
    transform: translateY(-100px);
  }
  // 使用了 CSS 的后代选择器（descendant selector），将子组件的 class 作为父组件 class 的一部分来使用。但实际上，这个样式规则只会作用于拥有这些 class 的元素上，也就是 CardFront 组件和 CardBack 组件中的 .card_front 和 .card_back 元素。所以这里不是父组件的类直接作用于子组件上，而是通过选择器来匹配子组件的元素来设置样式。
}
</style>
