import "../styles.css";
import { createList, storeTask } from '../logic/app.js';
const { createTask } = require('../logic/tasks.js');

import { lists, orgList } from '../logic/list_mgmt.js';
import { tabs, panels } from './tabs.js';
import { closeModal } from './close_modals.js';
import { updateTabPanelOneContent, updateTabPanelTwoContent, updateTabPanelThreeContent } from "./update_panels.js";

// UI script 
const header = document.getElementById('header');
const footer = document.getElementById('footer');

const icons = require.context('../Icons', false, /\.(png|svg|jpg|jpeg|gif)$/);       // dynamic loading using webpack
const images = require.context('../Images', false, /\.(png|svg|jpg|jpeg|gif)$/);

const heading = document.createElement('h1');
heading.textContent = 'Tasks';
header.appendChild(heading);

// --------------------------------------------------------


header.insertAdjacentHTML('beforeend', tabs);
header.insertAdjacentHTML('beforeend', panels);


// call the populating function here


document.addEventListener('change', function (event) {
    const checkbox = event.target;

    if (checkbox.matches('input[type="checkbox"]')) {
        const taskId = checkbox.dataset.id;

        if (checkbox.checked) {

            const starredTaskIndex = lists[0].tasks.findIndex(task => task.id === taskId);

            if (starredTaskIndex !== -1) {
                const starredTask = lists[0].tasks.splice(starredTaskIndex, 1)[0];
                starredTask.completed = true;
                lists[2].tasks.push(starredTask); // Move to Completed Tasks list
                updateTabPanelOneContent(); // Update Starred panel
                updateTabPanelThreeContent(); // Update Completed Tasks panel
            } else {
                const myTaskIndex = lists[1].tasks.findIndex(task => task.id === taskId);
                if (myTaskIndex !== -1) {
                    const completedTask = lists[1].tasks.splice(myTaskIndex, 1)[0];
                    completedTask.completed = true;
                    lists[2].tasks.push(completedTask); // Move to Completed Tasks list
                    updateTabPanelTwoContent(); // Update My Tasks panel
                    updateTabPanelThreeContent(); // Update Completed Tasks panel
                }
            }

            console.log("Updated Starred List:", lists[0].tasks);
            console.log("Updated My Tasks List:", lists[1].tasks);
            console.log("Updated Completed Tasks List:", lists[2].tasks);
        }
    }
}
);

const tabsContainer = document.querySelector("[role=tablist]");
const tabButtons = document.querySelectorAll("[role=tab]");
const tabPanels = document.querySelectorAll("[role=tabpanel]");

tabsContainer.addEventListener("click", (e) => {
    const clickedTab = e.target.closest("button");
    const currentTab = tabsContainer.querySelector('[aria-selected="true"]');

    const isModalShown = modals.some(modal => modal.classList.contains('show'));


    if (!clickedTab || clickedTab === currentTab || isModalShown) return;
    switchTab(clickedTab);
});


function switchTab(newTab) {

    const oldTab = tabsContainer.querySelector('[aria-selected="true"]');
    // Get the ID of the panel
    const activePanelId = newTab.getAttribute("aria-controls");
    const activePanel = tabsContainer.nextElementSibling.querySelector(
        "#" + CSS.escape(activePanelId)
    );
    tabButtons.forEach((button) => {
        button.setAttribute("aria-selected", false);
        button.setAttribute("tabindex", "-1");
    });

    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    });

    activePanel.removeAttribute("hidden", false);

    newTab.setAttribute("aria-selected", true);
    newTab.setAttribute("tabindex", "0");
    // newTab.focus();
    moveIndicator(oldTab, newTab);
}

function moveIndicator(oldTab, newTab) {
    const newTabPosition = oldTab.compareDocumentPosition(newTab);  // get the direction of movement
    //offsetWidth read-only property returns the layout width of an element as an integer.
    const newTabWidth = newTab.offsetWidth / tabsContainer.offsetWidth;

    let transitionWidth;
    // stretchy
    if (newTabPosition === 4) {
        transitionWidth = newTab.offsetLeft + newTab.offsetWidth - oldTab.offsetLeft;
    } else {
        transitionWidth = oldTab.offsetLeft + oldTab.offsetWidth - newTab.offsetLeft;
        tabsContainer.style.setProperty("--_left", newTab.offsetLeft + "px");
    }

    tabsContainer.style.setProperty('--_width', transitionWidth / tabsContainer.offsetWidth);

    setTimeout(() => {
        tabsContainer.style.setProperty("--_left", newTab.offsetLeft + "px");
        tabsContainer.style.setProperty('--_width', newTabWidth);
    }, 200);

}
// ---------------------------------------------------------------------------------------------------------------------
// footer inital DOM
const group1 = document.createElement('div');
group1.classList.add('group1');

// disable image drag
$("img").mousedown(function () {
    return false;
});

// footer buttons group1 
const footerViewBtn = document.createElement('button');
footerViewBtn.classList.add('button-effect');
footerViewBtn.innerHTML = '<img class="icon" src="./Icons/list.png" class="icon"></img>';

const footerSortBtn = document.createElement('button');
footerSortBtn.classList.add('buttolistsn-effect');
footerSortBtn.innerHTML = '<img class="icon" src="./Icons/sort.png"></img>';

const footerOptionsBtn = document.createElement('button');
footerOptionsBtn.classList.add('button-effect');
footerOptionsBtn.innerHTML = '<img class="icon" src="./Icons/footer_options.png"></img>';

group1.append(footerViewBtn, footerSortBtn, footerOptionsBtn);


const footerNewTaskBtn = document.createElement('button');
footerNewTaskBtn.classList.add('new-task');
footerNewTaskBtn.classList.add('button-effect');
footerNewTaskBtn.innerHTML = `<p id="add-task">+</p>`;

footer.append(group1);
footer.appendChild(footerNewTaskBtn);



// --------------------------------- // modals events            ---------------------------------

footerNewTaskBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showNewTaskModal();
})

const newTaskModal = document.createElement('div');
newTaskModal.classList.add('newTaskModal');

footerViewBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    showViewModal();
})

const viewModal = document.createElement('div');
viewModal.classList.add('viewModal');


footerSortBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showSortModal();
})
// creating the sortOpsModal
const sortOpsModal = document.createElement('div');
sortOpsModal.classList.add('sortOpsModal');

footerOptionsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showListOptionsModal();
})
// creating the listOpsModal
const listOpsModal = document.createElement('div');
listOpsModal.classList.add('listOpsModal');
//  populating the listOpsModal  
function showListOptionsModal() {
    listOpsModal.classList.add('show');

    const rename = document.createElement('button');
    rename.innerHTML = `<p>Rename list</p>`;
    listOpsModal.appendChild(rename);

    const deleteList = document.createElement('button');
    deleteList.innerHTML = `<p>Delete list</p>`;
    listOpsModal.appendChild(deleteList);

    const deleteCompleted = document.createElement('button');
    deleteCompleted.innerHTML = `<p>Delete all completed tasks</p>`;
    listOpsModal.appendChild(deleteCompleted);

    document.body.appendChild(listOpsModal);

    const allElements = document.querySelectorAll("*:not(body):not(html)");
    allElements.forEach(element => {
        if (!element.classList.contains("show") && !element.closest('.show')) {
            element.style.filter = "blur(0.7px)";
        }
    });
}

//  populating the sortOpsModal
function showSortModal() {
    sortOpsModal.classList.add('show');

    const form = `
        <form>

            <p id="sort-title">Sort By</p>

            <input id="date" class="radio-custom" type="radio" name="sort_by" value="date" checked>
            <label class="radio-custom-label" for="date">Date</label><br>

            <input id="starred" class="radio-custom" type="radio" name="sort_by" value="starred">
            <label class="radio-custom-label" for="starred">Starred recently</label><br>

        </form>
        `;

    sortOpsModal.innerHTML = form;

    document.body.appendChild(sortOpsModal);

    const allElements = document.querySelectorAll("*:not(body):not(html)");
    allElements.forEach(element => {
        if (!element.classList.contains("show") && !element.closest('.show')) {
            element.style.filter = "blur(0.7px)";
        }
    });
}

function showViewModal() {

    viewModal.classList.add('show');

    const rows = `
            <div>
                <button id="row1">
                    <img src="./Icons/star_filled.png">
                    <p>Starred</p>
                </button>
            </div>   

            <div>
                <button id="row2">
                    <p></p>
                    <p> My Tasks</p>
                </button>
            </div>

            <div>
                <button id="row3">
                    <img src="./Icons/add.png">
                    <p>Create new list</p>
                </button>
            </div>
        `;

    viewModal.innerHTML = rows;

    document.body.appendChild(viewModal);

}

var dueDate;
function showDatePicker() {

    const form = `
    <div id="popupForm">
        <form id="dateForm" action="">
            
            <label for="appt"></label>
            <input type="date" id="date" name="date">
    
            <label for="appt"></label>
            <input type="time" id="time" name="time">

            <button type="button" id="submitDateBtn">Submit</button>
        </form>
        <button id="hidePopup">Close</button>
    </div>
    `
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = form;
    const formElement = tempDiv;

    // Append the formElement to the document body
    document.body.appendChild(formElement);

    const dateForm = document.getElementById('dateForm');
    const submitDateBtn = document.getElementById('submitDateBtn');


    submitDateBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const timeValue = document.getElementById('time').value;
        const dateValue = document.getElementById('date').value;

        dueDate = { dateValue, timeValue };
    })


    function hidePopup() {
        document.getElementById('popupForm').style.display = 'none';
    }
    const closeButton = document.getElementById('hidePopup');
    closeButton.addEventListener('click', (e) => {
        hidePopup();
        e.preventDefault();
        e.stopPropagation();
    });
}



function showNewTaskModal() {

    newTaskModal.classList.add('show');

    const html = `
            <form id="taskForm" action="">
                <input type="text" name="newTaskTitle" placeholder="New Task" required></input>
                <input type="text" name="description" placeholder="Add description" required></input>
                <div id="row22">
                    <button type="button" id="dueDateBtn">
                        <img src="./Icons/clock.png">
                    </button>
                    
                    <button type="button" id="star-task">
                        <img id="star-img" src="./Icons/star_empty.png">
                    </button>

                    <button type="submit" id="save-task">
                        Save
                    </button>
                </div>
            </form>
        `;


    newTaskModal.innerHTML = html;
    document.body.appendChild(newTaskModal);

    const dueDateBtn = document.getElementById('dueDateBtn');
    dueDateBtn.addEventListener('click', showDatePicker);

    const closeButton = document.getElementById('hidePopup');

    const taskForm = document.getElementById('taskForm');
    const starTaskBtn = document.getElementById('star-task');

    var isStarred = false; // default value of isStarred is false
    const starImg = document.getElementById('star-img');

    starTaskBtn.addEventListener('click', (e) => {
        e.stopPropagation();    // stop the event bubbling up to the taskform on change of image html
        // Set isStarred to true on click
        isStarred = !isStarred;
        // toggle the star icon visually from empty to filled
        starImg.src = isStarred ? "./Icons/star_filled.png" : "./Icons/star_empty.png";
    });

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskTitle = document.querySelector("input[name='newTaskTitle']").value;
        const taskDescription = document.querySelector("input[name='description']").value;

        var taskObject = createTask(taskTitle, taskDescription, isStarred, dueDate);  // create the object
        // console.log(taskObject)
        orgList(taskObject);

        starImg.src = "./Icons/star_empty.png";     // button image defaults to empty star
        isStarred = false;
        dueDate = null;
        taskForm.reset(); // reset the form 
    });

}

const modals = [listOpsModal, sortOpsModal, viewModal, newTaskModal];


// if clicked outside the modal closeit
document.addEventListener('click', function (e) {

    const isModal = modals.some(modal => modal.contains(e.target));

    if (!isModal && !e.target.matches('#dateForm, #dateForm *, #popupForm')) {
        modals.forEach(modal => {
            if (modal.classList.contains('show')) {
                closeModal(modal);
            }
        })
    }
})


$("button").on("click", function () {
    $(this).addClass("button-click");
})

$("button").on("webkitAnimationEnd", function () {
    $(this).removeClass("button-click");
})



export { updateTabPanelOneContent, updateTabPanelTwoContent };