
const tabs = `
<div role="tablist" aria-labelledby="channel-name">
    <button id="tab-1" role="tab" aria-controls="tabPanel-1" aria-selected="true" tabindex="0">
        <img src="./Icons/star_filled.png"></img>   
    </button>
    <button id="tab-2" role="tab" aria-controls="tabPanel-2" aria-selected="false" tabindex="-1">
        My Tasks
    </button>

    <button id="tab-3" role="tab" aria-controls="tabPanel-3" aria-selected="false" tabindex="-1">
    Completed Tasks
    </button>

    <button id="tab-4" role="tab" aria-controls="tabPanel-4" aria-selected="false" tabindex="-1">
    <img src="./Icons/add.png">New List
    </button>
</div>
`


const emptyTabPanel_one = `
    <img src="./Icons/man-hold-star.png"></img>
    <p>Mark important tasks with a star so you can easily find them here</p>`

const emptyTabPanel_two = `
    <img src="./Icons/idle.png" height="500">
    <p>No todos! You're kinda idle</p>
`

const emptyTabPanel_three = `
    <img src="./Icons/work.png" height="400">
    <p>Get to work and complete some tasks</p>
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
        <img src="./Icons/work.png" height="400">
        <p>Get to work and complete some tasks</p>
    </div>

    <div id="tabPanel-4" hidden role="tabpanel" aria-labelledby="tab-4" tabindex="0">
        <p>Add a new list</p>
    </div>
</div>
`




export {tabs, emptyTabPanel_one, emptyTabPanel_two, emptyTabPanel_three, panels}