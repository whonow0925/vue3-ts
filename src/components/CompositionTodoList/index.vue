<template>
  <div class="compositionTodoList">
    <span class="title">todolist</span>
    <el-input placeholder="请输入待办事项" v-model="todoItem">
      <template #append class="commit">
        <el-button @click="add" type="primary">添加</el-button>
      </template>
    </el-input>
    <div class="itemList" v-for="(k, index) in todoList" :key="index">
      <div class="todoListItem">
        <div class="ItemTag">
          <span>{{ k.content }}</span>
          <el-tag type="success" v-if="todoList[index].status">已完成</el-tag>
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
    <div v-if="todoList.length <= 0">
      <el-empty :image-size="150" description="暂无数据"></el-empty>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import addTodoList from "./add";
import delTodoList from "./del";
import changeStatus from "./changeStatus";

export default defineComponent({
  name: "CompositionTodoList",
  setup() {
    let { todoItem, todoList, add } = addTodoList();
    let { del } = delTodoList(todoList);
    let { finish } = changeStatus(todoList);
    return { todoItem, todoList, add, del, finish };
  },
});
</script>

<style scoped>
.compositionTodoList >>> .el-input-group__append,
.el-input-group__prepend {
  background-color: rgb(0, 138, 218);
  color: white;
  font-weight: bold;
}
.compositionTodoList {
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
