<template>
  <div>
    <el-table :data="paginatedList" stripe style="width: 100%">
      <el-table-column prop="f_CreateDate" label="日期" width="180" />
      <el-table-column prop="f_ObjectCodeOne" label="流量" width="180" />
      <el-table-column prop="f_Condition" label="预报" />
    </el-table>

    <el-config-provider :locale="customPagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next, total"
        background
        :total="total"
      >
        <!-- 插槽方式不行<template #total="{ total }">
      <span>总共 {{ total }} 条</span>
    </template> -->
      </el-pagination>
    </el-config-provider>
    <!-- <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table> -->
  </div>
</template>

<script setup>
import {
  ref,
  computed,
  defineProps,
  onMounted,
  watch,
  onUnmounted,
  getCurrentInstance,
  defineEmits,
} from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { fetchList } from "@/api/http/list";
// 表格数据
const list = ref([]);
// 分页变量
const total = ref(0);
const currentPage = ref(1);
const pageSize = ref(10);

// 带分页的计算属性
const paginatedList = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return list.value.slice(start, end);
});
const customPagination = {
  el: {
    pagination: {
      pagesize: "条/页",
      total: "共 {total} 条",
      goto: "前往",
      pageClassifier: "页",
    },
  },
};

// 请求列表数据
fetchList()
  .then((response) => {
    list.value = response.data;
    total.value = list.value.length;
    console.log("请求列表数据成功 => response", response);
    console.log("请求列表数据成功 => list.value", list.value); // 打印出来虽然是proxy代理对象，但是在el-table中是可以直接代入使用的
    console.log("fetchList => total.value", total.value);
    const pagination__total = document.querySelector(".el-pagination__total");
    console.log("fetchList => 拿到元素pagination__total", pagination__total);
    pagination__total.innerHTML = `总共 ${total.value} 组数据`;
  })
  .catch((error) => {
    console.error("请求列表数据失败", error);
  });

function handleSizeChange(newSize) {
  pageSize.value = newSize;
  currentPage.value = 1; // Reset to first page when changing page size
}

function handleCurrentChange(newPage) {
  currentPage.value = newPage;
}

const router = useRouter();
const route = useRoute();

let store = useStore();

const props = defineProps({
  // msg: { type: String },
});
// 得到当前实例
const instance = getCurrentInstance();
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];

// 生命周期
onMounted(() => {});
// 卸载组件后执行的生命周期
onUnmounted(() => {
  console.log("unmounted");
});
</script>
<style lang="scss" scoped>
::v-deep .el-pagination {
  justify-content: end;
  margin-top:15px;
  position: fixed;
  bottom: 10px;
  right: 15px;
}
::v-deep .el-pagination .el-pagination__total {
  color: blue; /* 文本颜色 */
  font-weight: bold; /* 文本加粗 */
  font-size: 16px; /* 文本大小 */
  float: right; /* 文本右浮动 */
}
</style>
