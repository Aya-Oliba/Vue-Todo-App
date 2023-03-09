<script setup>
    import axios from 'axios';
    import { useTodosStore } from '../stores/todos';
    import { ref, watch } from 'vue';

    

    const edittedTodo = ref("");
    const editTask = ref(false);
    const todos = useTodosStore();
    console.log(todos.deleteTask)
    const props = defineProps(['todo','id']);
    // console.log(props.todo);
    const emit = defineEmits(["dalete-task"])

    watch(prop.todo, async (newtask, oldtask) => {
        console.log("newtask",newtask)
    })
    
    const deleteTask = (id)=> {
        // emit("dalete-task",props.index)
        todos.deleteTask(id)
    }
   
    const EditTask = (id)=> {
        if(edittedTodo !== ""){
            editTask = true;
            editTaskRequest(id);
        }
    }
    onMounted(()=>{
        alert("welcome");
    })
</script>

<template>
    <div class="task-wrapper">
        <p>{{ props.todo }}</p>
        <!-- <span @click="edit(props.id)">edit</span> -->
        <button @click="deleteTask(props.id)">x</button>
    </div>
    <!-- <div>
        <input type="text" v-model="edittedTodo" >
    </div> -->
</template>

<style lang="scss" scoped>
    .task-wrapper {
        height: 50px;
        width: 500px;
        display: flex;
        justify-content: center;
        align-items: center;  
        margin: auto;
        margin-bottom: 1rem;    
        background-color: #c9475d;
        color: white;

        p {
            padding: 2rem;
            width: 80%;
        }
        button {
            border: none;
            background-color:#c9475d;
            cursor: pointer;
            color: white;
        }
    }
</style>