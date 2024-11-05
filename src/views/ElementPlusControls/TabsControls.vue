<template>
  <div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <!-- <el-tab-pane v-for="(tab, index) in tabs" :label="tab.label" :name="tab.name" :key="index"> -->
        <el-tab-pane v-for="(tab, index) in tabs" :name="tab.name" :key="index">
            <!-- 使用动态组件展示循环的子组件 -->
            <!-- <component :is="currentComponent" /> -->
              <!-- 使用插槽自定义标签内容 -->
            <template #label>
                <div class="custom-tab-label" :style="[
                    { width: '142px', height: '31px', 'line-height': '31px', background: `url(${require('@/assets/imgs/title.png')}) no-repeat center / cover`}
                ]">
                    {{ tab.label + ' ' + tab.name }}
                </div>
            </template>
            <component :is="tab.component" />
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, onMounted, watch, onUnmounted, getCurrentInstance, defineEmits, toRaw, resolveComponent  } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import UserComp from '@/components/tabs/user'
import RoleComp from '@/components/tabs/role'
import OptionComp from '@/components/tabs/option'
import TaskComp from '@/components/tabs/task'
// import.meta.globEager('@/components/tabs/*.vue'); // 预加载tabs下的所有的组件

const currentComponent = ref(null);
// const UserComp = currentComponent.value.UserComp;

// function switchComponent(name) {
//   currentComponent.value = resolveComponent(`@/components/tabs/${name}.vue`);
// }
// switchComponent('user');

const router = useRouter();
const route = useRoute();

let store = useStore();

const props = defineProps({
    // msg: { type: String },
});
// 得到当前实例
const instance = getCurrentInstance();
const activeName = ref('user')

// 定义一个数组，用来循环生成tab标签
const tabs = ref([
    { label: '用户', name: 'user', component: UserComp, style: { backgroundImage: 'url(../../../assets/imgs/title.png)' } },
    { label: '配置', name: 'option', component: OptionComp, style: { backgroundImage: 'url(../../../assets/imgs/title.png)' } },
    { label: '角色', name: 'role', component: RoleComp, style: { backgroundImage: 'url(../../../assets/imgs/title.png)' } },
    { label: '任务', name: 'task', component: TaskComp, style: { backgroundImage: 'url(../../../assets/imgs/title.png)' } }
])

const handleClick = (tab, event) => {
    console.log('handleClick => tab', toRaw(tab))
    // switchComponent(tab.name)
}
// 方法返回标签样式
function getLabelStyle(tab) {
  return {
    background: tab.style.backgroundImage, // 设置背景图片
    border: '1px solid #ccc', // 设置边框样式
    // 添加其他样式...
  };
}
// 生命周期
onMounted(() => {
    console.log('mounted');
    
});
// 卸载组件后执行的生命周期
onUnmounted(() => {
    console.log('unmounted');
});




</script>
<style lang="scss">
.demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>