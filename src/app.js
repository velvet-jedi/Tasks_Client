// TODO                       
// 1) starred or not? if star btn clicked attach a isStarred true prop to object
// 2) reminder  - select date and time for due date and remind a day before
// create factory function for creating tasks objects

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
