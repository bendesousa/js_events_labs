const enterBtn = document.getElementById("enter");
const list = document.querySelector(".list")

enterBtn.addEventListener("click", ()=> {
    const listItem1 = document.createElement("li");
    listItem1.innerText = document.getElementById("new-todo");
    list.appendChild(listItem1);
});