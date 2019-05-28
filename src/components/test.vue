<template>
  <div>
    <!-- <van-button @click="increase" type="default">+</van-button> -->
    <button @click="increase">+</button>
  </div>
</template>

<script>
// import { Button } from 'vant'
export default {
// components: {
//   [Button.name]: Button
// },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      count: 0
    }
  },
  methods: {
    increase () {
      this.count = 28
    }
  }
}
</script>
