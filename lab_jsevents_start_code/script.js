const enterBtn = document.getElementById("enter");
const list = document.querySelector("#list")

enterBtn.addEventListener("click", ()=> {
    const listItem1 = document.createElement("li");
    listItem1.innerText = document.getElementById("new-todo").value;
    list.appendChild(listItem1);
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText ="Delete";
    listItem1.appendChild(deleteBtn).addEventListener("click", ()=> {list.removeChild(listItem1)});
});




