import "./styles.css";
document.addEventListener("DOMContentLoaded", function() {

// dynamic import at runtime
const icons = require.context('./Icons', false, /\.(png|svg|jpg|jpeg|gif)$/);
const images = require.context('./Images', false, /\.(png|svg|jpg|jpeg|gif)$/);


const header = document.getElementById('header');
// const content = document.getElementById('content');
const footer = document.getElementById('footer');



// header part initial DOM
const heading = document.createElement('h1');
heading.textContent = 'Tasks';
header.appendChild(heading);

// --------------------------------------------------------
const tabs = `
<div role="tablist" aria-labelledby="channel-name">
    <button id="tab-1" role="tab" aria-controls="tabPanel-1" aria-selected="true" tabindex="0">
        <img src="./Icons/star_filled.png">
    </button>
    <button id="tab-2" role="tab" aria-controls="tabPanel-2" aria-selected="false" tabindex="-1">
        My Tasks
    </button>
    <button id="tab-3" role="tab" aria-controls="tabPanel-3" aria-selected="false" tabindex="-1">
    <img src="./Icons/add.png">New Item
    </button>
</div>
`
const panels = `
<div class="tab-panels">
    <div id="tabPanel-1" role="tabpanel" aria-labelled-by="tab-1" tabindex="0">
        <img src="./Icons/man-hold-star.png"></img>
        <p>Mark important tasks with a star so you can easily find them here</p>
    </div>

    <div id="tabPanel-2" hidden role="tabpanel" aria-labelled-by="tab-2" tabindex="0">
        <p>Keep trying</p>
    </div>

    <div id="tabPanel-3" hidden role="tabpanel" aria-labelled-by="tab-3" tabindex="0">
        <p>Make it better</p>
    </div>
</div>
`

header.insertAdjacentHTML('beforeend', tabs);
header.insertAdjacentHTML('beforeend', panels);

const tabsContainer = document.querySelector("[role=tablist]");
const tabButtons = document.querySelectorAll("[role=tab]");
const tabPanels = document.querySelectorAll("[role=tabpanel]");

tabsContainer.addEventListener("click", (e) => {

    const clickedTab = e.target.closest("button");
    const currentTab = tabsContainer.querySelector('[aria-selected="true"]');

    if(!clickedTab || clickedTab === currentTab) return;

    switchTab(clickedTab);
});


function switchTab (newTab) {
    
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
    newTab.focus();
}

// const tabs = document.createElement('div');
// tabs.classList.add('tabs');

// const favBtn = document.createElement('button');
// favBtn.setAttribute('id', "favBtn");
// favBtn.innerHTML = `<img class="icon" src="./Icons/star_filled.png"></img>`;
// tabs.appendChild(favBtn);

// const myTasksBtn = document.createElement('button');
// myTasksBtn.textContent = 'My Tasks';
// myTasksBtn.setAttribute('id', "myTasksBtn");
// tabs.appendChild(myTasksBtn);

// const headerNewTaskBtn = document.createElement('button');
// headerNewTaskBtn.setAttribute('id', "headerNewTask");
// headerNewTaskBtn.innerHTML = `<img src="./Icons/add.png">New list</img>`;
// tabs.appendChild(headerNewTaskBtn);

// header.appendChild(tabs);

// --------------------------------------------------------




// footer inital DOM
const group1 = document.createElement('div');
group1.classList.add('group1');



// footer buttons group1 on the left side
const footerViewBtn = document.createElement('button');
footerViewBtn.innerHTML = '<img class="icon" src="./Icons/list.png" class="icon"></img>';

const footerSortBtn = document.createElement('button');
footerSortBtn.innerHTML = '<img class="icon" src="./Icons/sort.png"></img>';


const footerListOptionsBtn = document.createElement('button');
footerListOptionsBtn.innerHTML = '<img class="icon" src="./Icons/footer_options.png"></img>';

group1.append(footerViewBtn, footerSortBtn, footerListOptionsBtn);


const footerNewTaskBtn = document.createElement('button');
footerNewTaskBtn.classList.add('new-task');
footerNewTaskBtn.innerHTML = `<p id="add-task">+</p>`;

footer.append(group1);
footer.appendChild(footerNewTaskBtn);

})


