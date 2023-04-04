import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
		//公共的变量，这里的变量不能随便修改，只能通过触发mutations的方法才能改变
		currentIndex: 0,
		cards: [
		  {
			id: 1,
			title: '党参',
			coverUrl: require('../static/caoyao_card/dangshen.jpg'),
			short_one: "【中药名】党参 dangshen",
			short_two: "【别名】条党、单枝党、板桥党、防党参。",
			short_three: "【药用部位】桔梗科植物党参Codonopsis pilosula(Franch.)Nannf",
			main:"【植物形态】草质藤本。除叶片两面密被柔毛外，全体几近无毛。根常肥大肉质，呈纺锤状或纺锤状圆柱形，少分枝或中部以下略有分枝，表面灰黄色。茎缠绕多分枝。叶在主茎及侧枝上的互生，在小枝上的近于对生。",
			mainArr:{
					chandifenbu: "党参主要分布于甘肃、陕西、青海及四川西北部",
					zhiwuxiangtai: "草质藤本。除叶片两面密被柔毛外，全体几近无毛。根常肥大肉质，呈纺锤状或纺锤状圆柱形，少分枝或中部以下略有分枝，表面灰黄色。茎缠绕多分枝。叶在主茎及侧枝上的互生，在小枝上的近于对生。",
					gongxiao: "补中益气、健脾益肺。属补虚药下属分类的补气药。",
					jinji: "实证、热证禁服；正虚邪实证，不宜单独应用，不宜与黎芦同用。",
					yanjiu: "增强机体应激能力、免疫功能，延缓衰老，抗溃疡，能使离体豚鼠和兔肠紧张性升高，收缩加强，并能拮抗5-羟色胺引起的肠挛缩，但对乙酰胆碱引起的无明显作用；能显著减少小鼠自发活动，延长戊巴比妥钠或环己巴比妥的睡眠时间；能增进或改善小鼠记忆的获得、记忆巩固和樟柳碱引起的记忆获得障碍；可使家兔红细胞数及血红蛋白量增加，白细胞总数减少。还有抗肿瘤、升高血糖和抑菌作用等。党参水煎液灌胃，使小鼠对钴-γ射线有一定保护作用。多糖对实验动物应激性溃疡等多种溃疡均有明显的对抗作用。党参注射液有抗心肌缺血、缺氧的功效与作用"
			},
			active: false
		  },
		  {
			id: 2,
			title: '当归',
			coverUrl: require('../static/caoyao_card/danggui.jpg'),
			short_one: "【中药名】当归 danggui",
			short_two: "【别名】秦归、云归、西当归、干归、马尾归、岷当归。",
			short_three: "【来源】伞形科植物当归Angelica sinensis (Oliv.) Diels.的根",
			main:"多年生草本。茎直立，带紫色，有明显的纵直槽纹，无毛。叶为2～3回奇数羽状复叶，叶鞘膨大；叶片卵形，小叶3对，近顶端的一对无柄，呈1～2回分裂，裂片边缘有缺刻。复伞形花序，顶生，伞梗10～14，长短不等，基部有2个线形总苞片或缺",
			mainArr:{
					zhiwuxiangtai: "【植物形态】草质藤本。除叶片两面密被柔毛外，全体几近无毛。根常肥大肉质，呈纺锤状或纺锤状圆柱形，少分枝或中部以下略有分枝，表面灰黄色。茎缠绕多分枝。叶在主茎及侧枝上的互生，在小枝上的近于对生。",
					gongxiao: "【功效与作用】补中益气、健脾益肺。属补虚药下属分类的补气药。",
					jinji: "【使用禁忌】实证、热证禁服；正虚邪实证，不宜单独应用，不宜与黎芦同用。"
			},
			active: false
		  },
		  {
			id: 3,
			title: '丁香',
			coverUrl: require('../static/caoyao_card/dingxiang.jpg'),
			short_one: "【中药名】当归 danggui",
			short_two: "【别名】秦归、云归、西当归、干归、马尾归、岷当归。",
			short_three: "【来源】伞形科植物当归Angelica sinensis (Oliv.) Diels.的根",
			main:"多年生草本。茎直立，带紫色，有明显的纵直槽纹，无毛。叶为2～3回奇数羽状复叶，叶鞘膨大；叶片卵形，小叶3对，近顶端的一对无柄，呈1～2回分裂，裂片边缘有缺刻。复伞形花序，顶生，伞梗10～14，长短不等，基部有2个线形总苞片或缺",
			mainArr:{
					zhiwuxiangtai: "【植物形态】草质藤本。除叶片两面密被柔毛外，全体几近无毛。根常肥大肉质，呈纺锤状或纺锤状圆柱形，少分枝或中部以下略有分枝，表面灰黄色。茎缠绕多分枝。叶在主茎及侧枝上的互生，在小枝上的近于对生。",
					gongxiao: "【功效与作用】补中益气、健脾益肺。属补虚药下属分类的补气药。",
					jinji: "【使用禁忌】实证、热证禁服；正虚邪实证，不宜单独应用，不宜与黎芦同用。"
			},
			active: false
		  },
		  {
			id: 4,
			title: 'D',
			coverUrl: require('../static/caoyao_card/chenpi.jpg'),
			short_one: "【中药名】当归 danggui",
			short_two: "【别名】秦归、云归、西当归、干归、马尾归、岷当归。",
			short_three: "【来源】伞形科植物当归Angelica sinensis (Oliv.) Diels.的根",
			main:"多年生草本。茎直立，带紫色，有明显的纵直槽纹，无毛。叶为2～3回奇数羽状复叶，叶鞘膨大；叶片卵形，小叶3对，近顶端的一对无柄，呈1～2回分裂，裂片边缘有缺刻。复伞形花序，顶生，伞梗10～14，长短不等，基部有2个线形总苞片或缺",
			mainArr:{
					zhiwuxiangtai: "【植物形态】草质藤本。除叶片两面密被柔毛外，全体几近无毛。根常肥大肉质，呈纺锤状或纺锤状圆柱形，少分枝或中部以下略有分枝，表面灰黄色。茎缠绕多分枝。叶在主茎及侧枝上的互生，在小枝上的近于对生。",
					gongxiao: "【功效与作用】补中益气、健脾益肺。属补虚药下属分类的补气药。",
					jinji: "【使用禁忌】实证、热证禁服；正虚邪实证，不宜单独应用，不宜与黎芦同用。"
			},
			active: false
		  }
		],
		selected: null,
		unselect: null,
		islogin: false
	},
    mutations: {
		//相当于同步的操作
		toggleCard (state, { card }) {
			if (state.selected && state.selected.card === card) {
				return
			}
			card.active = !card.active
		},
		nextCard (state) {
		  if (state.selected) {
			return
		  }
		  state.cards.forEach(card => {
			card.active = false
		  })
		  state.currentIndex++
		},
		prevCard (state) {
		  if (state.selected) {
			return
		  }
		  state.cards.forEach(card => {
			card.active = false
		  })
		  state.currentIndex--
		},
		selectCard (state, selected) {
		  state.unselect = null
		  state.selected = selected
		},
		unselectCard (state) {
		  state.unselect = state.selected
		  state.selected = null
		}
	},
    actions: {
		//相当于异步的操作,不能直接改变state的值，只能通过触发mutations的方法才能改变
	}
})
export default store
