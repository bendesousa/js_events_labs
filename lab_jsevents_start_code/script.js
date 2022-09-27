const enterBtn = document.getElementById("enter");
const list = document.querySelector("#list")

function createItem(){
    const listItem1 = document.createElement("li");
    listItem1.innerText = document.getElementById("new-todo").value;
    list.appendChild(listItem1);
    
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText ="Delete";
    listItem1.appendChild(deleteBtn).addEventListener("click", ()=> {list.removeChild(listItem1)});
    
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    listItem1.appendChild(checkBox).addEventListener("click", completed);
}


enterBtn.addEventListener("click", createItem);

const dateBtn = document.getElementById("date");
dateBtn.addEventListener("click", ()=>{
    dateBtn.innerText = Date();
})

function completed ()




