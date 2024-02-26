import "date-fns";

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


// reminder function 
const reminder = () => {

    // using date-fns to calculate when to remind of upcoming duedate

}

// organize into lists 
function orgList () {

}

// to check for completion of tasks
function isComplete () {
    
}