<template>
  <div>
    <ul>
        <li v-for="item in items" :key="item.id">
          <slot :item="item">{{ item.defaultText }}</slot>
        </li>
      </ul>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, onMounted, watch, onUnmounted, getCurrentInstance, defineEmits, toRaw, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

let store = useStore();

const props = defineProps({
    msg: { type: String },
});
// 得到当前实例
const instance = getCurrentInstance();

let items = ref([{ id: 1, defaultText: '默认文本1' }, { id: 2, defaultText: '默认文本2' }])
// 生命周期
onMounted(() => {
    console.log('mounted');
    
});
// 卸载组件后执行的生命周期
onUnmounted(() => {
    console.log('unmounted');
});




</script>
<style lang="scss"></style>