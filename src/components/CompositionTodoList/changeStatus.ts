function changeStatus(todoList: any) {
  function finish(id: number) {
    todoList[id].status = true;
  }
  return { finish };
}

export default changeStatus;
