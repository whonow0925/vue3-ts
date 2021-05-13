function changeStatus(todoList) {
    function finish(id) {
        todoList[id].status = true;
    }
    return { finish };
}
export default changeStatus;
//# sourceMappingURL=changeStatus.js.map