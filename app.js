const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal() {
    const enteredValue = inputEl.value;
    const listItemEl = document.createElement('li');
    listItemEl.textContent = enteredValue;
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('align-right');
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', function() {
        // 'this' refers to the button element itself
        // 'parentNode' accesses the immediate parent element (the <li>)
        // 'remove()' removes the element from the DOM
        this.parentNode.remove();
    });
    listItemEl.appendChild(deleteButton);
    listEl.appendChild(listItemEl);
}

buttonEl.addEventListener('click', addGoal);

inputEl.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent default form submission if applicable
        buttonEl.click(); // Simulate a click on the button
    }
});