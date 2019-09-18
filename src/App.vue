<template>
  <div id="app">
    <transition name="van-fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.van-fade {
  &-enter-active {
    animation: .5s van-fade-in;
  }

  &-leave-active {
    animation: 0s van-fade-out;
  }
}
</style>
