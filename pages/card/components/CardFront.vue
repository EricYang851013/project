<template>
	<view class="card_front" :style="{
		backgroundImage: `url(${card.coverUrl})`,
		...style1
    }">

	</view>
</template>

<script module="remder" lang="renderjs">
	export default {
		data() {
			return {
				coverSize: `${window.innerWidth}px auto`
			}
		},
		props: {
			card: {
				type: Object
			},
			style1: {
				type: Object,
				default: () => ({})
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.card_front {
  position: absolute;
  left: 15px;
  right: 15px;
  top: 8px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 350px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, .3);
  overflow: hidden;
  background-color: #333;
  background-position: center;
  transition: all 0.6s ease;
  will-change: transform, left, right;
  background-repeat: no-repeat;
}
</style>
