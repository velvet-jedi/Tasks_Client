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
        <img src="./Icons/star_filled.png"></img>   
    </button>
    <button id="tab-2" role="tab" aria-controls="tabPanel-2" aria-selected="false" tabindex="-1">
        My Tasks
    </button>
    <button id="tab-3" role="tab" aria-controls="tabPanel-3" aria-selected="false" tabindex="-1">
    <img src="./Icons/add.png">New List
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
        <img src="./Icons/idle.png" height="500">
        <p>No todos! You're kinda idle</p>
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
    newTab.focus();
    moveIndicator(oldTab, newTab);
}

function moveIndicator(oldTab, newTab) {
    const newTabPosition = oldTab.compareDocumentPosition(newTab);  // get the direction of movement
    //offsetWidth read-only property returns the layout width of an element as an integer.
    const newTabWidth = newTab.offsetWidth / tabsContainer.offsetWidth;
    // console.log(tabsContainer.offsetWidth);
    // console.log(newTab.offsetWidth);
    // console.log(newTabWidth);
    let transitionWidth;
    // stretchy
    if(newTabPosition === 4) {
        transitionWidth = newTab.offsetLeft + newTab.offsetWidth - oldTab.offsetLeft;
    }   else {
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

$("img").mousedown(function(){
    return false;
});



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


