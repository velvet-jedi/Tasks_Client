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

    updatePanel_and_tab_UI(newListObject);
}

function updatePanel_and_tab_UI(newListObject) {

    const newTab = document.createElement('button')
    // newTab.classList.add('tab'); // Add the same CSS class as existing tabs
    newTab.setAttribute('role', 'tab');

    // logic to create the tabPanel-{num} num should be 
    // equal to the existing number of tabs + 1 or use as it is the name property
    newTab.setAttribute('aria-controls', `tabPanel-${newListObject.name}`); // Dynamic panel ID
    newTab.setAttribute('aria-selected', 'false'); // Initially not selected
    newTab.setAttribute('tabindex', '-1'); // Initially not accessible

    newTab.innerHTML = `
    ${newListObject.name}
  `;



    const newPanel = document.createElement('div'); // creating new panel
    newPanel.classList.add('panel');
    newPanel.innerHTML = `
        <img src="./Icons/idle.png" height="500">
        <p>Add tasks to your newly created list</p>
    `

    // logic to create the tabPanel-{num} num should be 
    // equal to the existing number of tabs + 1 or use as it is the name property
    newPanel.setAttribute('id', `tabPanel-${newListObject.name}`); // Dynamic panel ID
    newPanel.setAttribute('role', 'tabpanel');
    newPanel.setAttribute('hidden', true); // Initially hidden

    // add logic to populate the panel 
    // add logic for activePanel and switching etc....
    const tabsContainer = document.querySelector("[role=tablist]");
    tabsContainer.appendChild(newTab);

    const panelsContainer = document.querySelector(".tab-panels");
    panelsContainer.appendChild(newPanel);
}


// function to add tasks to localstorage
function storeTask() {
    localStorage.setItem('lists', JSON.stringify(lists));
}


export { createList, storeTask };