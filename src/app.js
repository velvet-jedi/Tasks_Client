

// function to create custom Lists
function createList() {
}


// function to add tasks to localstorage
function storeTask() {
    localStorage.setItem('lists', JSON.stringify(lists));
}


export { createList, storeTask };