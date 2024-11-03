<template>
  <div class="home">
    <nav-header></nav-header>
    <nav-main></nav-main>
    <!-- <test :num="num" :name="name" :country="country" :city="city"></test> -->
    <nav-footer></nav-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent, reactive, ref, toRefs } from 'vue';
import NavHeader from '@/components/navHeader'
import NavMain from '@/components/navMain'
import NavFooter from '@/components/navFooter'
import Test from '@/components/test'

export default defineComponent({
  name: 'HomeView',
  components: {
    NavHeader,
    NavMain,
    NavFooter,
    Test
  },
  // 接收父组件数据
  props: {

  },
  setup(props, ctx) {
    let num = ref(10)
    let name = ref('Jack')
    let obj = reactive({
      country: 'China',
      city: 'Beijing'
    })
    return {
      num,
      name,
      ...toRefs(obj)
    }
  }
})
</script>
