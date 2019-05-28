<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import * as types from '@/store/mutations-types'
import { mapMutations } from 'vuex'
// import { createNamespacedHelpers } from 'vuex'

// const { mapMutations } = createNamespacedHelpers('user')
export default {
  data () {
    return {}
  },
  methods: {
    ...mapMutations('user', {
      changeUserInfo: types.USER_MODULE_USER_INFO_MUTATIONS
    }),
    ...mapMutations({
      changeLeftBar: types.GLOBAL_LEFT_BAR_MUTATIONS
    })
  },
  mounted () {
    this.$store.commit(`user/${types.USER_MODULE_USER_INFO_MUTATIONS}`, {
      userInfo: { ...this.$store.state.user.userInfo, sex: 2 }
    })
    this.changeUserInfo({
      userInfo: {
        ...this.$store.state.user.userInfo,
        newData: 1
      }
    })
    this.changeLeftBar(666)
  }
}
</script>
