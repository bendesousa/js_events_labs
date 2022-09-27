const enterBtn = document.getElementById("enter");
const list = document.querySelector("#list")

enterBtn.addEventListener("click", ()=> {
    const listItem1 = document.createElement("li");
    listItem1.innerText = document.getElementById("new-todo");
    list.appendChild(listItem1);
});

// const listItem1 = document.createElement("li");
// listItem1.innerText = "Hello";
// // listItem1.innerText = document.getElementById("new-todo");
// list.appendChild(listItem1);