// selector
const todoNameInput = document.querySelector('.todo-name-input')
const todoMobileInput = document.querySelector('.todo-mobile-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const selectBox = document.querySelector('.type-todo')

// event listener
todoButton.addEventListener('click', addItem)
todoList.addEventListener('click', deletItem)

// function
//-----------function addItem begin------------------//
function addItem(event) {
    event.preventDefault();
    // create <div>
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create <div>/<li>
    const newItem = document.createElement('li')
    newItem.classList.add('todo-Item')
    // create <div>/<li>/<span>
    const namespan = document.createElement('span')
    const mobilespan = document.createElement('span')
    const typespan = document.createElement('span')

    namespan.innerText = todoNameInput.value
    mobilespan.innerText = todoMobileInput.value
    typespan.innerText = selectBox.options[selectBox.selectedIndex].innerText

    newItem.appendChild(namespan)
    newItem.appendChild(mobilespan)
    newItem.appendChild(typespan)

    const trashbutton = document.createElement('button')
    trashbutton.innerHTML = '<i class="fa fa-trash"></i>';
    trashbutton.classList.add('trash-button');
    todoDiv.appendChild(trashbutton)

    //append div to ul
    todoDiv.appendChild(newItem)
    todoList.appendChild(todoDiv);

    todoMobileInput.value = ''
    todoNameInput.value = ''
}
//-----------function addItem End------------------//
function deletItem(event) {
    const item = event.target;
    if (item.classList[0] === 'trash-button') {
        const contact = item.parentElement;
        contact.remove();
    }



}