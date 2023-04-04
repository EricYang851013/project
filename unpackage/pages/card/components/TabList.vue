<template>
	 <view class="tab-list">
	    <ul>
	      <li class="tab-list_active">草本 Herb</li>
	      <li>树生</li>
	      <li>nature</li>
	    </ul>
	  </view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.tab-list {
  // margin: 0 20px;
  font-size: 12px;
  color: #388463;
  &::after {
    content: '';
    display: block;
    height: 2px;
    background-image: linear-gradient(
      to left,
      #cfd7dd,
      #d7dde2 30%,
      #d7dde2 70%,
      #cfd7dd
    );
  }
  ul {
    display: flex;
	padding: 0 28px;
  }
  li {
    padding: 16px 10px;
    flex: 1;
    text-align: center;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    opacity: 0.6;
	list-style-type: none;
  }
  .tab-list_active {
    opacity: 1;
	font-weight: bold;
  }
}
</style>
