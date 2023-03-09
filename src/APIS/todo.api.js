import  axios  from 'axios';


export const newTaskRequest = async function (task) {
    let result = await axios.post("http://localhost:3000/todos",{
        todo : task
    });    
    if (result.status === 201){
      console.log("task added successfully");
    }else {
      console.log(" Error in adding new task");
    }
}

export const getTodos =  function() {

    return axios.get("http://localhost:3000/todos");
    // todos.todos = result.data;
}

export const editTaskRequest = async function(id) {
    let result = await axios.patch("`http://localhost:3000/todos/${id}`",{
        todo : edittedTodo.value
    })
}

export const deleteTaskRequest = async function(id) {
    let result = await axios.delete(`http://localhost:3000/todos/${id}`)
}