<template>
	<view class="card_back">
		<view class="card_info">
			<p class="card_short">{{ card.short_one }}</p>
			<p class="card_short">{{ card.short_two }}</p>
			<p class="card_short">{{ card.short_three }}</p>
		</view>
		<view class="card_body">
			<Content :card="card.mainArr"></Content>
		</view>
	</view>
</template>

<script>
	import Content from './Content.vue'
	export default {
		data() {
			return {
				btom:0,
			}
		},
		components: {
			Content
		},
		props: {
			card: {
				type: Object
			}
		},
		mounted() {
			// this.btom = uni.getWindowInfo().windowHeight+"px"
		}
	}
</script>

<style lang="scss">
.card_back {
  position: relative;
  top: 20px;
  padding-top: 250px;
  padding-bottom: 150px;
  // padding-left: 50px;
  // padding-right: 50px;
  height: 100%;
  overflow: auto;
  border-radius: 5px;
  color: #000000;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  font-size: 15px;
  line-height: 200%;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.6s ease;

  .card_info{
	  margin: 0 5%;
	  .card_short{
		  margin: 5px auto;
	  }
  }
}
</style>
