// Q.32. Create a 'to-do list' array of objects where each object has properties task and 
// completed (a boolean). Write a function to log only the tasks that are not yet completed.

// to-do list array of objects
let todoList = [
    {task:"Complete project", completed:true },
    {task:"Buy groceries", completed: false },
    {task:"Call mom", completed:false },
    {task:"Exercise", completed:true },
    {task:"Read a book", completed: false }
]
// Function to log tasks that are not yet completed
function logIncompleteTasks( todoList : any ) {
    console.log("Incomplete tasks:") ;
    todoList.forEach( function ( item : any ){
        if(!item.completed){
            console.log("- " + item.task)
        }
    })
}

logIncompleteTasks(todoList);
