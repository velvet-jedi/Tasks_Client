// TODO
// 1) reminder  -remind a day before
// 2) isComplete - check if task is completed move to the completed list and function to delete all completed tasks
import {updateTabPanelOneContent} from './index'

function createTask(title, description, isStarred, dueDate ) {
    const taskObj = {
        title,
        description,
        isStarred,
    };

    if(dueDate){        // optional dueDate property
        taskObj.dueDate = dueDate;
    }
    return taskObj;
}

// function to createList
function createList() {
}

// organize into lists
const lists = [
    // default starred tasks list
    {
        name: 'Starred',
        tasks: [],
    },
    // default my tasks list
    {
        name: 'My Tasks',
        tasks: [],
    },
    // other lists
]

function orgList(task) {
    // organise based on isStarred value
    if(task.isStarred){
        lists[0].tasks.push(task);
    }  else {
        lists[1].tasks.push(task);
    }
    updateTabPanelOneContent();
    console.log(lists[0].tasks);
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


export { createTask, createList, orgList, storeTask, reminder, isComplete, lists  };