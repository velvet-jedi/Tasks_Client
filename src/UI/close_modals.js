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


export { closeModal };