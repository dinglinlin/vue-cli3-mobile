<template>
  <div class="the-layout">
    <van-nav-bar
      title="移动端项目"
      fixed
    />
    <transition name="van-fade">
      <router-view class="router-views" />
    </transition>
  </div>
</template>

<script>
import { NavBar } from 'vant'
export default {
  name: 'home',
  components: {
    [NavBar.name]: NavBar
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.the-layout {
  .router-views {
    margin-top: 112.5px;
  }
}
</style>
