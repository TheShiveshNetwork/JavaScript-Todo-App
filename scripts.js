const taskBtn = document.getElementById("taskBtn");
const task = document.querySelector(".task");
const taskDate = document.getElementById("task_date");
const taskTitle = document.getElementById("task_title");
const taskContent = document.getElementById("task_content");
const taskTime = document.getElementById("task_time");

taskBtn.addEventListener("click", () => {
    document.getElementById("taskForm").style.display = "block"
})

function addTask() {
    // ========= basic date/time stuff ========== //
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    let inputTaskDate = today;

    // ========= main stuff ========== //
    let inputTaskTitle = document.getElementById("taskTitle").value;
    let inputTaskContent = document.getElementById("taskContent").value;
    let inputTaskTime = document.getElementById("taskTime").value;
    // console.log(taskDate)
    // console.log(taskTitle)
    // console.log(taskContent)
    // console.log(taskTime)

    const myTask = {
        taskDate: inputTaskDate,
        taskTitle: inputTaskTitle,
        taskContent: inputTaskContent,
        taskTime: inputTaskTime
    }
    tasksList = [myTask,]

    if (window.localStorage.getItem("myTasks") === null) {      // Check if tasks array in localstorage is empty?
        window.localStorage.setItem("myTasks", JSON.stringify(tasksList))
    }
    else {
        const ToDo = JSON.parse(window.localStorage.getItem("myTasks"))
        ToDo.push(myTask)
        console.log(ToDo);
        window.localStorage.setItem("myTasks", JSON.stringify(ToDo))
    }

    // ========= hide the window at end ========== //
    document.getElementById("taskForm").style.display = "none"
}

const myTasks = JSON.parse(localStorage.getItem("myTasks"))
console.log(myTasks)




if (window.localStorage.getItem("myTasks") === null) {
    console.log("Empty tasks!");
    task.style.display = "none";
} else {
    // for (let i = 0; i < myTasks.length; i++) {
    //     const myTasksList = Object.assign({}, myTasks[i]);
    //     console.log(myTasksList)
    //     taskDate.innerHTML = myTasksList.taskDate;
    //     taskTitle.innerHTML = myTasksList.taskTitle;
    //     taskContent.innerHTML = myTasksList.taskContent;
    //     taskTime.innerHTML = myTasksList.taskTime;
    // }

    // Object.entries(myTasks).forEach(([key, value]) => {
    //     // console.log(myTasks[0])
    // });


    // myTasks.forEach((object, index) => {

    //     // object is giving the one by one object
    //     console.log(index, object.taskDate, object.taskTitle, object.taskContent, object.taskTime);

    //     // some logic based on your requirement
    //     taskDate.innerHTML = object.taskDate;
    //     taskTitle.innerHTML = object.taskTitle;
    //     taskContent.innerHTML = object.taskContent;
    //     taskTime.innerHTML = object.taskTime;
    // });
    for (let i = 0; i < myTasks.length; i++) {
        const myTasksList = Object.assign({}, myTasks[i]);
        var div = document.createElement("div");
        div.innerHTML = `<div class="task"><div class="task_date" id="task_date">${myTasksList.taskDate}</div><div class="task_title" id="task_title">${myTasksList.taskTitle}</div><div class="task_content" id="task_content">${myTasksList.taskContent}</div><div class="task_time" id="task_time">${myTasksList.taskTime}</div></div>`;
        document.querySelector(".tasks-container").appendChild(div)
    }
}