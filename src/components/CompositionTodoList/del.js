function delTodoList(todoList) {
    //   let todoList:Array<any> = reactive([]);
    function del(id) {
        todoList.splice(id, 1);
    }
    return { del };
}
export default delTodoList;
//# sourceMappingURL=del.js.map