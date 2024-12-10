<template>
  <div>
    <!-- 默认插槽子组件 -->
    <slot-def>
        <template v-slot:default>
            <div>
            我是默认插槽中的插值：{{ msg }}
            </div>
        </template>
    </slot-def>
    <el-divider />
    <!-- 具名插槽子组件 -->
    <slot-name>
        <!-- <template v-slot:content> -->
        <template #content>
            <div>
            我是具名插槽中的插值：{{ msg }}
            </div>
        </template>
    </slot-name>
    <el-divider />
    <!-- 作用域插槽子组件-默认(默认插槽就用#default引用) -->
    <slot-scoped>
        <template #default="slotProps">
            <div>
                我是默认作用域插槽中的插值：{{ slotProps.item.id }} - {{ slotProps.item.defaultText }}
            </div>
        </template>
    </slot-scoped>
    <el-divider />
    <!-- 作用域插槽子组件-具名 -->
    <slot-scoped-name>
        <template #circle="slotProps">
            <div>
                我是具名作用域插槽中的插值：{{ slotProps.item.id }} - {{ slotProps.item.defaultText }}
            </div>
        </template>
    </slot-scoped-name>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, onMounted, watch, onUnmounted, getCurrentInstance, defineEmits, toRaw, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import SlotDef from './component/SlotDef';
import SlotName from './component/SlotName';
import SlotScoped from './component/SlotScoped';
import SlotScopedName from './component/SlotScopedName';

defineComponent({
  components: { SlotDef, SlotName, SlotScoped, SlotScopedName }
});
const router = useRouter();
const route = useRoute();

let store = useStore();

const props = defineProps({
    msg: { type: String, default: '我是插值消息' },
});
// 得到当前实例
const instance = getCurrentInstance();


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