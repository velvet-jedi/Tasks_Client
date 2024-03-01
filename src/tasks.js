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


export {  createTask  }