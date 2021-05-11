<template>
  <div class="about">
    <todo-list></todo-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoList from "@/components/TodoList.vue"

export default defineComponent({
  name:"About",
  components: {
    TodoList,
  },
})
</script>
