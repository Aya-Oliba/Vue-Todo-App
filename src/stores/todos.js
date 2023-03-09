import { ref } from 'vue'
import { defineStore } from 'pinia'
import { newTaskRequest, deleteTaskRequest, getTodos } from '../APIS/todo.api'

export const useTodosStore = defineStore('todos', () => {
  const todos = ref([]);

  // function to add new task
  const addNewTask = function(task) {
    newTaskRequest(task);  //add task to api
    console.log(todos.value)
    // todos.value.push(task);
  }

  // function to delete task
  const deleteTask = function(i) {
    deleteTaskRequest(i); //delete task from api
    todos.value = todos.value.filter((el)=>{
      return el.id !== i
    })
  }

  const listTodos = async function() {
    if (todos.value.length === 0) {
      let result = await getTodos();
      todos.value = result.data;
      // console.log("data",data)
    }
  }
  return { todos, addNewTask, deleteTask, listTodos}
})
