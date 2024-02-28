// TODO                       
// 1) starred or not? if star btn clicked attach a isStarred true prop to object
//    if it is starred move it in a starred list array of objects
// 2) reminder  - select date and time for due date and remind a day before
// create factory function for creating tasks objects

import {updateTabPanelOneContent} from './index'
function createTask(title, description, /*dueDate,*/ isStarred) {

    return {
        title,
        description,
        // dueDate,
        isStarred
    }
    
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
    // console.log(lists);
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
