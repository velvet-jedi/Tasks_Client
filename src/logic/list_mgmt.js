
import {updateTabPanelOneContent, updateTabPanelTwoContent} from '../UI/index'

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
    // completed tasks
    {
        name: 'Completed Tasks',
        tasks: [],
    },
]

function orgList(task) {
    // organise based on isStarred value
    if(task.isStarred){
        lists[0].tasks.push(task);
        updateTabPanelOneContent();
    }  else {
        lists[1].tasks.push(task);
        updateTabPanelTwoContent();
    }   
}

export { lists, orgList }