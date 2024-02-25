import "./styles.css";
// UI script 
document.addEventListener("DOMContentLoaded", function () {         // let the DOM be loaded first

    // dynamic import at runtime
    const icons = require.context('./Icons', false, /\.(png|svg|jpg|jpeg|gif)$/);
    const images = require.context('./Images', false, /\.(png|svg|jpg|jpeg|gif)$/);


    const header = document.getElementById('header');
    const footer = document.getElementById('footer');


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
    <div id="tabPanel-1" role="tabpanel" aria-labelledby="tab-1" tabindex="0">
        <img src="./Icons/man-hold-star.png"></img>
        <p>Mark important tasks with a star so you can easily find them here</p>
    </div>

    <div id="tabPanel-2" hidden role="tabpanel" aria-labelledby="tab-2" tabindex="0">
        <img src="./Icons/idle.png" height="500">
        <p>No todos! You're kinda idle</p>
    </div>

    <div id="tabPanel-3" hidden role="tabpanel" aria-labelledby="tab-3" tabindex="0">
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
    footerSortBtn.classList.add('button-effect');
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

    function showNewTaskModal () {

        newTaskModal.classList.add('show');

        const html = `
            <div id="rowrow">
                <input type="text" placeholder="New Task"></input>
                <input type="text" placeholder="Add details"></input>
                <div id="row22">
                    <button>
                        <img src="./Icons/clock.png">
                    </button>
                    
                    <button>
                        <img src="./Icons/star_empty.png">
                    </button>
                </div>
            </div>
        `;

        newTaskModal.innerHTML = html;

        document.body.appendChild(newTaskModal);
    }

    const modals = [listOpsModal, sortOpsModal, viewModal, newTaskModal];


    // if clicked outside the modal closeit
    document.addEventListener('click', function (e) {

        const isModal = modals.some(modal => modal.contains(e.target));

        if(!isModal) {
            modals.forEach(modal => {
                if(modal.classList.contains('show')) {
                    closeModal(modal);
                }
            })
        }
    })

    // close modal function
    function closeModal(modal) {
        if (modal.classList.contains('show')) {
            modal.classList.add('hide');
            resetStyles(modal);
        }
    }

    // reset blur and remove show/hide classes
    function resetStyles(modal) {

        const allElements = document.querySelectorAll("*");
        allElements.forEach(element => {
            element.style.filter = "none";
        })
    
        setTimeout(() => {
            modal.classList.remove('show', 'hide');

            removeModalFromDOM(modal);
        }, 400);
    }

    // remove the modal from DOM
    function removeModalFromDOM(modal) {
        // Remove the modal from its parent node (assuming modal has a parent)
        document.body.removeChild(modal);
    }

    $("button").on("click", function () {
        $(this).addClass("button-click");
    })

    $("button").on("webkitAnimationEnd", function () {
        $(this).removeClass("button-click");
    })










})



