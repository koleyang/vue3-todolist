<template>
  <div>
    <!-- 创建一个输入框控件，用于添加任务 -->
    <input type="text" v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
// 响应式状态
const newTask = ref(''); // 用于绑定输入框的值
let store = useStore(); // 获取store实例

// 方法
function addTask() {
  console.log('addTask');
  if (!newTask.value.trim()) return; // 输入框为空时，不添加任务
  // list.value.push({ id: Date.now(), title: newTask.value, completed: false }); // 添加任务
  // 使用mutations方法addTodo添加任务
  store.commit('addTodo', { id: Date.now(), title: newTask.value, completed: false });
  newTask.value = ''; // 清空输入框
}
</script>
  