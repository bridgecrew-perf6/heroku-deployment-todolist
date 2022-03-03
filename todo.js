const msg = document.querySelector('#msg')
const input = document.querySelector('input')
const addbtn = document.querySelector('.add-btn')
const done = document.querySelector('.done')
const notodo = document.querySelector('.notodo')
const undoes = document.querySelector('.undoes')

let todos = JSON.parse(localStorage.getItem('todo')) || []
let complete = JSON.parse(localStorage.getItem('complete')) || []

function addtotodo(todo) {
    todos.push(todo)
    localStorage.setItem('todo', JSON.stringify(todos))
    printtodos()
}

function addtocomplete1(completedata) {
    complete.push(completedata)
    localStorage.setItem('complete', JSON.stringify(complete))
    printtodos()
}

function printtodos() {
    undoes.innerHTML = ""
    todos.forEach(todo => {
        reloadData(todo);
    })
    done.innerHTML = ''
    complete.forEach(todo => {
        reloadcompleteData(todo)
    })
}

function addData() {
    let text = input.value;
    input.value = ""
    if (text) {
        notodo.innerHTML = ""
        addtotodo(text)
    }
    else {
        msg.classList = "msgshow";
        setTimeout(() => {
            msg.classList = '';
        }, 1500);
    }
}

function removedata(text) {
    let i;
    for (i = 0; i < todos.length; i++) {
        if (todos[i] === text) {
            break;
        }
    }
    todos.splice(i, 1)
    localStorage.setItem('todo', JSON.stringify(todos))
    if (todos == '' & complete == '') {
        notodo.textContent = 'No Todos'
    }
    printtodos()
}

function removefromcomplete(text) {
    let i;
    for (i = 0; i < complete.length; i++) {
        if (complete[i] === text) {
            break;
        }
    }
    complete.splice(i, 1)
    localStorage.setItem('complete', JSON.stringify(complete))
    if (todos == '' & complete == '') {
        notodo.textContent = 'No Todos'
    }
    printtodos()
}

function addtocomplete(text) {
    let index = -1
    for (let i = 0; i < todos.length; i++) {
        if (todos[i] === text) {
            index = i
            break
        }
    }
    todos.splice(index, 1)
    localStorage.setItem('todo', JSON.stringify(todos))
    addtocomplete1(text)
}

function movetouncomplete(text) {
    let index = -1
    for (let i = 0; i < complete.length; i++) {
        if (complete[i] === text) {
            index = i
            break
        }
    }
    complete.splice(index, 1)
    localStorage.setItem('complete', JSON.stringify(complete))
    addtouncomplete(text)
}

function addtouncomplete(uncompletedata) {
    todos.push(uncompletedata)
    localStorage.setItem('todo', JSON.stringify(todos))
    printtodos()
}

function reloadData(todo) {
    if (todo) {
        notodo.innerHTML = ""
        var li = document.createElement('li')
        var div1 = document.createElement('div')
        div1.className = 'text'
        div1.textContent = todo
        var div2 = document.createElement('div')
        div2.className = 'buttons'
        var btn1 = document.createElement('button')
        btn1.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>'
        btn1.className = 'btn1'
        var btn2 = document.createElement('button')
        btn2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg>'
        btn2.className = 'btn2'
        div2.appendChild(btn1)
        div2.appendChild(btn2)
        li.appendChild(div1)
        li.appendChild(div2)
        undoes.appendChild(li)
        undoes.insertBefore(li, undoes.childNodes[0]);
        btn1.addEventListener('click', dltfromlist)
        function dltfromlist() {
            removedata(todo)
        }
        btn2.addEventListener('click', addtodone)
        function addtodone() {
            addtocomplete(todo)
        }

    }
    else {
        msg.classList = "msgshow";
        setTimeout(() => {
            msg.classList = '';
        }, 1500);
    }
}

function reloadcompleteData(text) {
    notodo.innerHTML = ""
    var li = document.createElement('li')
    var div1 = document.createElement('div')
    div1.className = 'text'
    div1.textContent = text
    var div2 = document.createElement('div')
    div2.className = 'buttons'
    var btn1 = document.createElement('button')
    btn1.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>'
    btn1.className = 'btn1'
    var btn2 = document.createElement('button')
    btn2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg>'
    btn2.className = 'btn2'
    div2.appendChild(btn1)
    div2.appendChild(btn2)
    li.appendChild(div1)
    li.appendChild(div2)
    done.appendChild(li)
    done.insertBefore(li, done.childNodes[0]);
    btn1.addEventListener('click', dltfromlist)
    function dltfromlist() {
        removefromcomplete(text)
    }
    btn2.addEventListener('click', addtoundone)
    function addtoundone() {
        movetouncomplete(text)
    }
}
addbtn.addEventListener('click', addData)
printtodos()















