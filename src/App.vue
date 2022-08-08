<template>
  <div id="app">
    <router-view></router-view>
    <!-- <hello-world></hello-world>
    {{getFile}}-----{{get_some}}
    <input type="button" @click="btn" />-->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    console.log('store:', this.$store.state.file.a)
  },
  computed: {
    ...mapGetters(['getFile', 'get_some']),
    ...mapState(['file'])
  },
  methods: {
    btn() {
      this.$store.commit('test_fun', 2)
      this.$store.commit('SOME_MUTATION', { a: 1231231 })
      //   console.log(this.getFile, this.file)
    }
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
