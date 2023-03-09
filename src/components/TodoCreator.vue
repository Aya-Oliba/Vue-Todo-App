<script setup>
    import { reactive, defineEmits } from "vue";
    import { useTodosStore } from '@/stores/todos'

    const todos = useTodosStore();
    const todoState = reactive({
        newTodo: "",
        invalid: null,
        errorMsg: ""
    });
    // const emit = defineEmits(["create-todo-task"]);
   
    const createTodoTask = () => {
        todoState.invalid = null;
        if(todoState.newTodo !== ""){
            // emit("create-todo-task", todoState.newTodo);
            todos.addNewTask(todoState.newTodo)
            todoState.newTodo = "";
            return
        }
        todoState.invalid = true;
        todoState.errorMsg = "Please enter a todo task first!"
    }
</script>

<template>
    <div class="todo-creator-wrapper">
        <input type="text" v-model="todoState.newTodo">
        <button @click="createTodoTask">Create</button>
        <p v-show="todoState.invalid"> {{ todoState.errorMsg }}</p>
    </div>
</template>
  

<style lang="scss" scoped>
    .todo-creator-wrapper {
        text-align: center;
        height: 21px;
        input {
            border-right: none;
            outline: none;
            :focus {
                outline: none;
            }
        }
        button {
            border: none;
            background-color: purple;
            height: 100%;
            color: white;
            cursor: pointer;
        }
        p {
            color: red;
        }
    }
</style>
  