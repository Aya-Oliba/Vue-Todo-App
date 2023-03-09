<script setup>
  import TodoCreator from './components/TodoCreator.vue';
  import TodoItem from './components/TodoItem.vue';
  import { useTodosStore } from '@/stores/todos';
  import { onMounted, watchEffect } from 'vue';
  import { getTodos } from './APIS/todo.api';
  import { ref, watch } from 'vue';

  let todosList = ref([]);
  // const createTodoTask = (todo)=> {
  //   todosList.value.push(todo)
  // }

  // todos from store
  const todos = useTodosStore();
 
  onMounted(()=> {
    todos.listTodos();

    todos.$subscribe(()=> {
      console.log(this)
      todosList = [...todos.todos];
      console.log(todosList)
    })
  })

  watch(todosList, async (newVal, oldVal) => {
        console.log("newVal",newVal)
    })
 
</script>

<template>
  <h1>TODO APP</h1>
  <TodoCreator @create-todo-task="createTodoTask"/>
  <ul>
    <TodoItem v-for="(todo) in todosList " :key="todo" :todo="todo.todo" :id="todo.id"/>
  </ul>
</template>

<style lang="scss">
  h1 {
    text-align: center;
    margin: auto;
    color:purple;
  }
</style>
