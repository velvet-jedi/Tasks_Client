import {  emptyTabPanel_one, emptyTabPanel_two, emptyTabPanel_three } from './tabs.js';
import { lists } from '../logic/list_mgmt.js';


function updateTabPanelOneContent() {
    var tabPanelOne = document.getElementById('tabPanel-1');

    var starredTasks = lists[0].tasks;


    if (starredTasks.length === 0) {
        tabPanelOne.innerHTML = emptyTabPanel_one;
    } else {
        tabPanelOne.innerHTML = '';

        starredTasks.forEach((task) => {
            const dueDateHtml = task.dueDate ? `<p id="dueDateP">${task.dueDate.dateValue} ${task.dueDate.timeValue}</p>` : ''; //optional duedate display
            const rowHtml = `
            <div class="starred_task_row">
                <input type="checkbox" style="height:20px"></input>
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                ${dueDateHtml}
            </div>
            `

            tabPanelOne.innerHTML += rowHtml;
        })
    };
};

function updateTabPanelTwoContent() {
    var tabPanelTwo = document.getElementById('tabPanel-2');

    var myTasks = lists[1].tasks;


    if (myTasks.length === 0) {
        tabPanelTwo.innerHTML = emptyTabPanel_two;
    } else {
        tabPanelTwo.innerHTML = '';

        myTasks.forEach((task) => {
            const dueDateHtml = task.dueDate ? `<p id="dueDateP">${task.dueDate.dateValue} ${task.dueDate.timeValue}</p>` : ''; //optional duedate display
            const rowHtml = `
            <div class="my_task_row">
                <input type="checkbox" style="height:20px"></input>
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                ${dueDateHtml}
            </div>
            `

            tabPanelTwo.innerHTML += rowHtml;
        })
    };
};

function updateTabPanelThreeContent() {
    var tabPanelThree = document.getElementById('tabPanel-3');

    var completedTasks = lists[2].tasks;


    if (completedTasks.length === 0) {
        tabPanelThree.innerHTML = emptyTabPanel_three;
    } else {
        tabPanelThree.innerHTML = '';

        completedTasks.forEach((task) => {
            const dueDateHtml = task.dueDate ? `<p id="dueDateP">${task.dueDate.dateValue} ${task.dueDate.timeValue}</p>` : ''; //optional duedate display
            const rowHtml = `
            <div class="completed_task_row">
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                ${dueDateHtml}
            </div>
            `

            tabPanelThree.innerHTML += rowHtml;
        })
    };    
}

export { updateTabPanelOneContent, updateTabPanelTwoContent, updateTabPanelThreeContent }