// create factory function for creating tasks objects
function createTask(title, description, dueDate, isStarred=false) {
    return {
        title,
        description,
        dueDate,
        isStarred
    }
}


// let task1 = createTask("task 1", "task 1 description", "2022-01-01", false); 
// let task2 = createTask("task 2", "task 2 description"); 
// console.log(task1);
// console.log(task2);


// function to createList
function createList () {

}

// organize into lists 

const lists = [
    {
        name: '',
        tasks: [],
    },
    // other lists
]

function orgList (list) {
    lists.push(list);

}

// function to add tasks to localstorage
function storeTask () {
    localStorage.setItem('lists', JSON.stringify(lists));
}

// reminder function 
const reminder = () => {
    // using date-fns to calculate when to remind of upcoming duedate
}


// to check for completion of tasks
function isComplete (task) {
    return task.completed === true;
}