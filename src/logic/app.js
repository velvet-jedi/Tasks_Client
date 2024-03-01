import lists from './list_mgmt'

// function to create custom Lists
function createList(new_list_name, lists) {
    // create the list and add it to the lists array get name from user input form
    
    const newListObject = 
    {
        name: new_list_name,
        tasks: [],
    }
    lists.push(newListObject);
    console.log(lists);
}


// function to add tasks to localstorage
function storeTask() {
    localStorage.setItem('lists', JSON.stringify(lists));
}


export { createList, storeTask };