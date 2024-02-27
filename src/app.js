// create factory function for creating tasks objects


import { taskObject } from "./index.js";

function createTask(title, description, dueDate, isStarred = false) {

    return {
        title,
        description,
        dueDate,
        isStarred
    }
    
}

// function to createList
function createList() {

}

// organize into lists
const lists = [
    {
        name: '',
        tasks: [],
    },
    // other lists
]

function orgList(task) {
    lists.push(task);
    console.log(lists);
}

// function to add tasks to localstorage
function storeTask() {
    localStorage.setItem('lists', JSON.stringify(lists));
}

// reminder function 
const reminder = () => {
    // using date-fns to calculate when to remind of upcoming duedate
}


// to check for completion of tasks
function isComplete(task) {
    return task.completed === true;
}



export { createTask, createList, orgList, storeTask, reminder, isComplete };
