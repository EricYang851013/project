<template>
	<transition name="show" @enter="handleEnter" @leave="handleLeave">
		<div  v-if="selected" class="card-detail">
		  <Card :card="selected.card" @select="unselectCard" :card-front-style="cardFrontStyle"/>
		</div>
	</transition>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	import Card from './Card'
	import CardFront from './CardFront.vue'
	import CardBack from './CardBack.vue'
 	export default {
		data() {
			return {
				cardFrontStyle: {
					// width: '100vw',
					left: '0',
					right: '0',
					// transform: 'scale(1.5)',
					transform: 'translateY(-150px)',
					borderRadius: '0px',
					boxShadow: 'none'
				}
			}
		},
		components:{
			Card,
			CardFront,
			CardBack
		},
		computed: {
			...mapState(['selected', 'unselect'])
		},
		methods: {
			...mapMutations(['unselectCard']),
			handleEnter (el) {
				Object.assign(el.style, {
					top: `${this.selected.rect.top}px`,
					left: `${this.selected.rect.left}px`,
					width: `${this.selected.rect.width}px`,
					height: `${this.selected.rect.height}px`,
				})
				setTimeout(() => {
					Object.assign(el.style, {
						top: 0,
						left: 0,
						width: `${this.selected.rect.appWidth}px`,
						height: `${this.selected.rect.appHeight}px`
					})
				}, 0)
			},
			handleLeave (el) {
				Object.assign(el.style, {
					top: 0,
					left: 0,
					width: `${this.unselect.rect.appWidth}px`,
					height: `${this.unselect.rect.appHeight}px`
				})
				setTimeout(() => {
					Object.assign(el.style, {
					  top: `${this.unselect.rect.top}px`,
					  left: `${this.unselect.rect.left}px`,
					  width: `${this.unselect.rect.width}px`,
					  height: `${this.unselect.rect.height}px`
					})
				}, 0)
			}
		}
	}
</script>

<style lang="scss">

.card-detail {
  position: fixed;
  z-index: 10;
  will-change: top, left, width, height;
  .card_back {
    box-shadow: none;
    border-radius: 0;
  }
  .card_front {
    // left: 0;
    // right: 0;
    border-radius: 0;
    box-shadow: none;
  }
}
.show-enter-to,
.show-leave {
  .card_back {
    border-radius: 0;
  }
  .card_front {
    left: 0;
    right: 0;
    border-radius: 0;
    box-shadow: none;
    transform: translate3d(0, -150px, 0);
  }
}
.show-leave-to,
.show-enter {
  .card_back {
    border-radius: 4px;
  }
  .card_front {
    left: 16px;
    right: 16px;
    border-radius: 4px;
    box-shadow: 0 22px 16px -12px rgba(0, 0, 0, 0.2);
    transform: translate3d(0, -100px, 0);
  }
}
.show-enter-active,
.show-leave-active {
	transition: all 0.5s ease;
}
</style>
