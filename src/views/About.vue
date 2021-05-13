<template>
  <div class="about">
    <todo-list></todo-list>
    <composition-todo-list></composition-todo-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoList from "@/components/TodoList.vue"
import CompositionTodoList from "@/components/CompositionTodoList/index.vue"

export default defineComponent({
  name:"About",
  components: {
    TodoList,
    CompositionTodoList
  },
})
</script>
