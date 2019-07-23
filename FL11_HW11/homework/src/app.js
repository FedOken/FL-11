let warning = document.getElementById('warning');
let inputNewAction = document.getElementById('inputNewAction');
let iconNewAction = document.getElementById('iconNewAction');
let toDoList = document.getElementById('toDoList');

//DRAG AND DROP BLOCK
let dragSrcEl = null;
function handleDragStart(e) {
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.outerHTML);

    this.classList.add('dragElem');
}
function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    this.classList.add('over');

    e.dataTransfer.dropEffect = 'move';

    return false;
}
function handleDragEnter() {
    return true;
}
function handleDragLeave() {
    this.classList.remove('over');
}
function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }

    if (dragSrcEl !== this) {
        this.parentNode.removeChild(dragSrcEl);
        let dropHTML = e.dataTransfer.getData('text/html');
        this.insertAdjacentHTML('beforebegin',dropHTML);
        let dropElem = this.previousSibling;
        addDnDHandlers(dropElem);

    }
    this.classList.remove('over');
    return false;
}
function handleDragEnd() {
    this.classList.remove('over');
}
function addDnDHandlers(elem) {
    elem.addEventListener('dragstart', handleDragStart, false);
    elem.addEventListener('dragenter', handleDragEnter, false)
    elem.addEventListener('dragover', handleDragOver, false);
    elem.addEventListener('dragleave', handleDragLeave, false);
    elem.addEventListener('drop', handleDrop, false);
    elem.addEventListener('dragend', handleDragEnd, false);

}
let cols = document.querySelectorAll('.toDoTask');
[].forEach.call(cols, addDnDHandlers);



//HERE OTHER FUNCTION
function setHeaderInputBehavior(element) {
    if (element.value.length > 0) {
        iconNewAction.classList.add('enable');
        iconNewAction.style.color = 'lightskyblue';
    } else {
        iconNewAction.classList.remove('enable');
        iconNewAction.style.color = 'grey';
    }
}
function addNewTask() {
    if (iconNewAction.classList.contains('enable')) {
        let toDoTasksCount = document.getElementsByClassName('toDoTask').length;
        if (toDoTasksCount <= 9) {
            warning.style.display = 'none';

            let divToDoTask = document.createElement('div');
            divToDoTask.className = 'toDoTask';
            divToDoTask.setAttribute('draggable','true');

            let divToDoNameStatus = document.createElement('div');
            divToDoNameStatus.className = 'toDoNameStatus';
            divToDoNameStatus.innerHTML = '<i class="material-icons" ' +
                'onclick="changeStatus(this)">check_box_outline_blank</i>' +
                '<span class="toDoName">' + inputNewAction.value + '</span>';

            let divToDoListAction = document.createElement('div');
            divToDoListAction.className = 'toDoListAction';
            divToDoListAction.innerHTML = '<i class="material-icons" onclick="editAndSaveTask(this)">edit</i>' +
                '<i class="material-icons" onclick="deleteTask(this)">delete</i>';

            divToDoTask.appendChild(divToDoNameStatus);
            divToDoTask.appendChild(divToDoListAction);
            toDoList.appendChild(divToDoTask);

            let cols = document.querySelectorAll('.toDoTask');
            [].forEach.call(cols, addDnDHandlers);
        } else {
            warning.style.display = 'block';
            iconNewAction.classList.remove('enable');
            iconNewAction.style.color = 'grey';
        }
    }
}
function deleteTask(element) {
    let parentContainer = element.parentElement.parentElement;
    parentContainer.remove();
}
function changeStatus(element) {
    if (!element.classList.contains('enabled')) {
        element.innerHTML = 'check_box';
    }
}
function editAndSaveTask(element) {
    let parentContainer = element.parentElement.parentElement;
    let firstChild = parentContainer.firstElementChild;

    if (!element.classList.contains('save')) {
        element.classList.add('save');
        element.innerHTML = 'save';

        let text = firstChild.lastElementChild.innerHTML;
        firstChild.innerHTML = '<input type="text" class="newTask" value="' + text + '">';

    } else {
        element.classList.remove('save');
        element.innerHTML = 'edit';

        let text = firstChild.firstElementChild.value;
        firstChild.innerHTML = '<i class="material-icons" onclick="changeStatus(this)">check_box_outline_blank</i>'
            + '<span class="toDoName">' + text + '</span>';
    }
}








