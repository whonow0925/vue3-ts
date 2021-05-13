import { reactive, ref } from "vue";

function addTodoList() {
  let todoItem:any= ref("");
  let todoList:Array<any> = reactive([]);

  function add(e:any) {
    e.preventDefault();
    if (!todoItem.value) {
      return;
    }
    todoList.unshift({
      id:todoList.length + 1,
      content: todoItem.value,
      status: false,
    });
    todoItem.value = ""
  }
  return {todoItem,todoList,add}
}

export default addTodoList;
