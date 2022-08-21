let todoListDOM = document.querySelector("#list")
let inputDOM = document.querySelector("#getInput")
let buttonDOM = document.querySelector("#btn")
let successAlertDOM = document.querySelector("#success")
let dangerAlertDOM = document.querySelector("#danger")

buttonDOM.addEventListener('click', addItem)
todoListDOM.addEventListener('click', check)
document.addEventListener('DOMContentLoaded', getLocalStorage)

function addItem() {
    let isNotEmpty = text => text.trim().length > 0 
    console.log(isNotEmpty(inputDOM.value))
    if (isNotEmpty(inputDOM.value)) {
        saveLocalStorage(inputDOM.value)

        const li = document.createElement('li')
        li.innerHTML = inputDOM.value
        todoListDOM.append(li)

        inputDOM.value = ''

        const removeButton = document.createElement('r')
        removeButton.classList.add('bi', 'bi-trash3-fill', 'float-right', 'mr-4')
        li.append(removeButton)

        ToastAlertSuccess();
    }else{
        ToastAlertDanger();
    }
}

function check(e){
    const item = e.target;
    if(item.classList[0] == 'bi'){
        const el = item.parentElement;
        deleteLocalStorage(el.innerText) 
        el.classList.add('animation')
        el.addEventListener("transitionend",function(){
            el.remove()
        })
    }else{
        item.classList.toggle('checked')
    }
}

function saveLocalStorage(i){
    let item;
    if(localStorage.getItem('listItem') == null){
        item = []
    }else{
        item = JSON.parse(localStorage.getItem('listItem'))
    }
    item.push(i);
    localStorage.setItem('listItem',JSON.stringify(item))
}

function deleteLocalStorage(i){
    let item;
    if(localStorage.getItem('listItem') == null){
        item = []
    }else{
        item = JSON.parse(localStorage.getItem('listItem'))
    }
    item.splice(item.indexOf(i),1)
    localStorage.setItem('listItem', JSON.stringify(item))
}

function getLocalStorage(){
    let item;
    if(localStorage.getItem('listItem') == null){
        item = []
    }else{
        item = JSON.parse(localStorage.getItem('listItem'))
    }
    item.forEach((i)=>{
        const li = document.createElement('li')
        li.innerHTML = i
        todoListDOM.append(li)

        inputDOM.value = ''

        const todoRemoveButton = document.createElement('i')
        todoRemoveButton.classList.add('bi', 'bi-trash3-fill', 'float-right', 'mr-4')
        li.append(todoRemoveButton)
    })
}

function ToastAlertSuccess(){
    let successToast = new bootstrap.Toast(successAlertDOM, alertOptions)
    successToast.show();
}

function ToastAlertDanger(){
    let dangerToast = new bootstrap.Toast(dangerAlertDOM, alertOptions)
    dangerToast.show();
}

let alertOptions = {
    animation: true,
    delay: 3000,
}