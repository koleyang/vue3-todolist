<template>
  <div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane v-for="(tab, index) in tabs" :label="tab.label" :name="tab.name" :key="index">
            <!-- 使用动态组件展示循环的子组件 -->
            <component :is="tab.component" />
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, onMounted, watch, onUnmounted, getCurrentInstance, defineEmits, toRaw } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import UserComp from '@/components/tabs/user'
import RoleComp from '@/components/tabs/role'
import OptionComp from '@/components/tabs/option'
import TaskComp from '@/components/tabs/task'

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
    { label: '用户', name: 'user', component: UserComp },
    { label: '配置', name: 'option', component: OptionComp },
    { label: '角色', name: 'role', component: RoleComp },
    { label: '任务', name: 'task', component: TaskComp }
])

const handleClick = (tab, event) => {
  console.log(toRaw(tab))
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