
import "./styles.css";

// dynamic import at runtime
const icons = require.context('./Icons', false, /\.(png|svg|jpg|jpeg|gif)$/);


const header = document.getElementById('header');
const content = document.getElementById('main');
const footer = document.getElementById('footer');



// header part initial DOM
const heading = document.createElement('h1');
heading.textContent = 'Tasks';
header.appendChild(heading);

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



