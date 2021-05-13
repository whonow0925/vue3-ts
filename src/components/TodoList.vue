<template>
  <div class="todoList">
    <span class="title">todolist</span>
    <el-input placeholder="请输入待办事项" v-model="item">
      <template #append class="commit">
        <el-button @click="commit" type="primary">添加</el-button>
      </template>
    </el-input>
    <div class="itemList" v-for="(k, index) in itemList" :key="index">
      <div class="todoListItem">
        <div class="ItemTag">
          <span>{{ k.text }}</span>
          <el-tag type="success" v-if="itemList[index].status">已完成</el-tag>
          <el-tag type="danger" v-else>未完成</el-tag>
        </div>
      </div>
      <div class="itemBtn">
        <el-button
          type="success"
          icon="el-icon-check"
          circle
          @click="finish(index)"
          v-show="!k.status"
        ></el-button>
        <el-button
          type="danger"
          icon="el-icon-delete"
          circle
          @click="del(index)"
        ></el-button>
      </div>
    </div>
    <div v-if="itemList.length <= 0">
      <el-empty :image-size="150" description="暂无数据"></el-empty>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  name: "TodoList",
  //组合API的入口函数
  setup() {
    // 定义了一个名叫item变量，这个变量的初始值是“”
    // （ref 的作用）这个变量发生变化后，Vue会自动更新UI
    // 使用 reactive 监听数字和对象
    const item = ref("");
    const itemList: Ref = ref([]);
    const commit = (e:any) => {
      //取消事件的默认动作
      e.preventDefault();
      if (item.value !== "") {
        // vue3 setup()中没有this
        // itemList.value.unshift(item.value.trim());
        itemList.value.unshift({
          id: itemList.value.length + 1,
          text: item.value,
          status: false,
        });
        // vue3 xxx.value 才是获取的那个属性值
        item.value = "";
      }
    };
    // const del = (index: number) => {
    //   itemList.value.splice(index, 1);
    // };
    function del(index: number){
      itemList.value.splice(index, 1);
    }
    const finish = (index: number) => {
      itemList.value[index].status = true;
    };
    return {
      item,
      itemList,
      commit,
      del,
      finish,
    };
    //注意点：
    // （1） 组合API 定义的变量、方法，想要在外界使用，必须通过return 暴露出去
  },
});
</script>

<style scoped>
.todoList >>> .el-input-group__append,
.el-input-group__prepend {
  background-color: rgb(0, 138, 218);
  color: white;
  font-weight: bold;
}
.todoList {
  width: 30%;
  margin: auto;
}
.title {
  display: flex;
  font-weight: bold;
  margin-bottom: 10px;
}
.commit {
  color: steelblue;
}
.itemList {
  height: 100px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
}
.todoListItem {
  display: inline-block;
  padding: 15px 20px;
  font-weight: bold;
  margin: auto 0;
}
.ItemTag {
  display: flex;
  flex-direction: column;
}
.itemBtn {
  display: inline-block;
  padding: 15px 20px;
  margin: auto 0;
}
</style>
