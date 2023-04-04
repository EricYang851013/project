<template>
	<view class="content" :style="{height:btom}">
		<CardBar title="" left="search" right="crosshairs"></CardBar>
		<TabList></TabList>
		<card-list></card-list>
		<CardDetails></CardDetails>
	</view>
</template>

<script>
	import CardBar from './components/CardBar.vue'
	import CardList from './components/CardList.vue'
	import CardDetails from './components/CardDetails.vue'
	import TabList from './components/TabList.vue'
	export default {
		data() {
			return {
				title: 'card',
				btom:0
			}
		},
		components:{
			CardBar,
			CardList,
			CardDetails,
			TabList
		},
		onLoad() {

		},
		methods: {

		},
		mounted() {
			this.btom = uni.getWindowInfo().windowHeight+"px"
		}
	}
</script>

<style>
	.content {
		width: 100%;
		overflow: hidden;
		color: white;
		/* background-image: linear-gradient(to top, #99acbe 5%, #a8b3bf 20%, #cfd7dd); */
		background-color: #ecedef;
		background-image: url('../.././static/caoyao_card/brijing1.jpg');
		/* background-position-y: 20px; */
		/* background-size: 100%; */
		background-size: cover;
		background-repeat: no-repeat;
	}

</style>
