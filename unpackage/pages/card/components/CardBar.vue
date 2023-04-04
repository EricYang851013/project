<template>
	<view class="card_-bar">
		<span class="card-bar_l" @click="$emit('left')">
			<i :class="['fa', `fa-${left}`]"></i>
		</span>
		<h1>{{ title }}</h1>
		<span class="card-bar_r" @click="$emit('right')">
			<i :class="['fa', `fa-${right}`]"></i>
		</span>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props: {
			title: {
				type: String,
				default: '知识卡片'
			},
			left: {
				type: String,
				default: 'chevron-left'
			},
			right: {
				type: String,
				default: 'ellipsis-v'
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.card_-bar {
  position: relative;
  top: 15px;
  z-index: 20;
  display: flex;
  align-items: center;
  height: 44px;
  padding-bottom: 20px;
  font-size: 15px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
	color: #388463;
  h1 {
    display: flex;
    justify-content: center;
    flex: 1;
  }
  span {
    padding: 0 20px;
  }
}
</style>
