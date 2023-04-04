<template>
<view>
	<view class="content" @wheel="trigger($event)">
	  <view class="charts-box">
	    <qiun-data-charts class="map" :class="{scale:isScale,original:isOriginal}" 
		type="map" :opts="{extra:{map:{mercator:true}}}" @getIndex="fn" 
		:chartData="chartsDataMap1"/>
		  <view class="title">
		  	<view class="decoration"></view>
			<span class="text">中国药材分布</span>
		  </view>
		  <view class="btn" @click="navigator">
		  	<p>查看详情</p>
		  </view>
		  <view class="alert">
		  	<p>*地图来源于<br>高德开放平台</p>
		  </view>
		</view>
	</view>
	<view class="words" >
			<p class="foo" v-show="!showWords">点击地图查看各省份中药材</p>
		   <qiun-data-charts v-show="showWords" type="word":opts="opts":chartData="chartsWords"/>
	</view>
</view>
</template>

<script>
import wordsdata from '@/mockdata/words.json'	
import mapdata from '@/mockdata/mapdata.json'


export default {
  data() {
    return {
      chartsDataMap1:{},
	  chartsWords:{},
	  isScale:false,
	  isOriginal:true,
	  showWords:false,
	  chartData: {},
	  opts: {
	    color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
	    padding: undefined,
	    enableScroll: false,
	    extra: {
	      word: {
	        type: "normal",
	        autoColors: false
	      }
	    }
		}
	  };
	},
  onReady() {
    //模拟从服务器获取数据
    this.getServerData()
	this.getWordsData()
  },
  methods: {
    getServerData() {
      setTimeout(() => {
      	this.chartsDataMap1={series:mapdata.features}
      }, 300);
    },
	getWordsData(){
	  setTimeout(() => {
		this.chartsWords={series:wordsdata.init}
		// console.log(this.chartsWords)
		      }, 500);
	},
	fn(e) {
			this.showWords = true
			this.chartsWords={series:wordsdata[`${e.currentIndex}`]}		
			if(e.currentIndex === -1){
				this.showWords = false
			}
	},
	navigator(){
		setTimeout(()=>{
			uni.navigateTo({
				url:'./hubei'
			})
		},300)
	},
	trigger($event){
		if(event.deltaY < 0){
			this.isScale = true
		}else{
			this.isScale = false
		}
		
	},
  },
};
</script>

<style scoped>
.foo{
	font-size: 18px;
	color: rgb(52, 104, 104);
	letter-spacing: 1px;
	font-weight: 600;
}	
.btn{
	position: absolute;
	bottom: 40px;
	right: 5px;
	width: 70px;
	height: 30px;
	border-radius: 5px;
	color: white;
	font-size: 12px;
	letter-spacing: 0.9px;
	text-align: center;
	background-color: rgba(59, 168, 122, 1.0);
	display: flex;
	justify-content: center;
	align-items: center;
}
.words{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 90%;
	height: 140px;
	border: 3px solid rgba(56, 126, 135, 0.7);
	box-shadow: 8px 7px 10px rgba(0,0,0,.5);
	border-radius: 8px;
	position: absolute;
	left: 50%;
	top: 80%;
	transform: translate(-50%,-50%);
	overflow: hidden;
}
.original{
	transform: scale(1);
	transition: all .3s;
}
.alert{
	position: absolute;
	bottom: 0;
	right: 3px;
	font-size: 5px;
	color: #000000;
}
.scale{
	  transform: scale(1.5);
	  transition: all .3s;
}
.map{
	height: 340px;
}
.charts-box {
  width:90%;
  height: 310px;
  overflow: auto;
  padding: 5px 10px 30px;
  border: 3px solid rgba(56, 126, 135, 0.7);
  border-radius: 8px;
  box-shadow: 8px 7px 10px rgba(0,0,0,.5);
  position: absolute;
  left: 50%;
  top: 32%;
  transform: translate(-50%,-50%);
  overflow: hidden;
}
.title{
	position: absolute;
	left: 30%;
	bottom: 20px;
	transform: translateX(-50%);
	display: flex;
	align-items: center;
}
.decoration{
	display: inline-block;
	height: 30px;
	width: 5px;
	border: 1px solid rgb(52, 104, 104);
	border-radius: 10px;
	background-color: rgb(52, 104, 104);
}
.text{
	margin-left: 8px;
	color: rgb(52, 104, 104);
	letter-spacing: 1px;
	font-weight: 600;
}
</style>
