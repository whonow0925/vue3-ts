import { reactive, ref } from "vue";
function addTodoList() {
    let todoItem = ref("");
    let todoList = reactive([]);
    function add(e) {
        e.preventDefault();
        if (!todoItem.value) {
            return;
        }
        todoList.unshift({
            id: todoList.length + 1,
            content: todoItem.value,
            status: false,
        });
        todoItem.value = "";
    }
    return { todoItem, todoList, add };
}
export default addTodoList;
//# sourceMappingURL=add.js.map