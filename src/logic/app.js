

// function to create custom Lists
function createList() {
    // create the list and add it to the lists array get name from user input form
    console.log('creating list')
}


// function to add tasks to localstorage
function storeTask() {
    localStorage.setItem('lists', JSON.stringify(lists));
}


export { createList, storeTask };