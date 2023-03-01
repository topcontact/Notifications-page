const mark = document.querySelector(".mark");
const reddot = document.querySelectorAll(".reddot");
const notiNum = document.querySelector(".notiNum");
const unread = document.querySelectorAll(".unread");
const messageBox = document.querySelector(".messageBox");
const eventPicture = document.querySelector(".eventPicture img");
const eventUnclick = document.querySelectorAll(".eventUnclick");


// **Mark all as read**

function allAsRead() {
    for (let i = 0; i < reddot.length; i++) {
    reddot[i].style.backgroundColor = "rgba(0,0,0,0.0)";
    unread[i].style.backgroundColor = "rgba(0,0,0,0.0)";
    }
    notiNum.innerHTML = "0";
}

mark.addEventListener("click", allAsRead);

// **messageBox**

function mouseover() {
    messageBox.style.backgroundColor = "hsl(211, 68%, 94%)"
    
}

function mouseout() {
    messageBox.style.backgroundColor = "rgba(0,0,0,0.0)"  
}

messageBox.addEventListener("mouseover", mouseover)
messageBox.addEventListener("mouseout", mouseout)


// **eventPicture**

function mouseoverevent() {
    eventPicture.style.outline = "3px solid hsl(205, 33%, 90%)";
}

function mouseoutevent() { 
    eventPicture.style.outline = "none"
}

eventPicture.addEventListener("mouseover", mouseoverevent)
eventPicture.addEventListener("mouseout", mouseoutevent)

// **userevent**


function eventUnclick1() { 
    eventUnclick[0].style.color = " hsl(219, 12%, 42%)";   
}

function eventUnclick2() { 
    eventUnclick[1].style.color = " hsl(219, 12%, 42%)";   
}

eventUnclick[0].addEventListener("click", eventUnclick1);
eventUnclick[1].addEventListener("click", eventUnclick2);

console.log(eventUnclick);



