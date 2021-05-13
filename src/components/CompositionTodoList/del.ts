import { ref, reactive } from "vue";

function delTodoList(todoList: any) {
  //   let todoList:Array<any> = reactive([]);
  function del(id: number) {
    todoList.splice(id, 1);
  }
  return { del };
}

export default delTodoList;
