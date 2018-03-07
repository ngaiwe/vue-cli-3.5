<template>
  <div class="hello">
    <v-header/>
    <p>Home</p>
    <p>{{count}}</p>
    <p>{{rootCount}}</p>
    <ul v-for="(item,key) in this.data.list" :key="key">
      <li>{{item}}</li>
    </ul>
    <button @click="decreaseAction"></button>
  </div>
</template>

<script>
import VHeader from '@/components/Header/Header'
import { mapActions, mapState } from 'vuex'
import { AjaxDb } from '@/api/Home/ajaxDb'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: {}
    }
  },
  created () {
    // 第一种请求方法
    AjaxDb().then(res => {
      this.data = res
      console.log(res)
    }).catch(error => {
      console.log(error)
    })

    // 第二种
    this.$get('/api/projects').then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  },
  components: {
    VHeader
  },
  computed: {
    ...mapState({
      count: state => state.home.count,
      rootCount: state => state.count
    })
  },
  methods: {
    ...mapActions([
      'incrementAction',
      'decreaseAction'
    ]),
    addCount () {
      this.$store.dispatch('incrementAction')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  :root{
    --mainColor: red;
  }
  .hello{
    button {
        width: 20px;
        height: 20px;
        display: block;
        background: var(--mainColor);
        outline: none;
    }
  }
</style>
