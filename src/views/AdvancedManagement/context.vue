<template>
  <div class="container">
    <!-- -->
    我是context参数attrs、slots、emit参数研究页面
    <button @click="handleClick">点击触发emit事件</button>
    <slot name="customSlot"></slot>
  </div>
</template>

<script setup>
import { useSlots, defineEmits, ref, computed, defineProps, onMounted, watch, onUnmounted, getCurrentInstance, toRaw, defineComponent } from 'vue';
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

// 使用 useSlots 函数获取插槽对象
const slots = useSlots();

const emit = defineEmits(['click']);
                  
// 事件处理函数
function handleClick() {
    console.log('[handleClick] => 向上广播', emit);
    console.log('Attrs:', instance.attrs);
    console.log('Slots:', slots);
    emit('click', 'Button clicked');
}

// 使用 attrs 和 slots
console.log('Attrs:', instance.attrs); // 打印组件的 attrs 对象, 包含了所有传入的属性, 包括 class 和 style, instance.attrs这是常规<script>标签中的调用方法等效于vue2中的 this.$attrs
console.log('Slots:', slots);

// 访问特定具名插槽的内容
const customSlotContent = slots.customSlot; // name="customSlot"

// 生命周期
onMounted(() => {
    console.log('mounted');
    
});
// 卸载组件后执行的生命周期
onUnmounted(() => {
    console.log('unmounted');
});
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .div-style {
        width: 600px; 
        height: 200px; 
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: #fff;
        background-color: #409EFF;
    }
}
</style>