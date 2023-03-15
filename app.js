fetch("user.json")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        appendData(data)
    })
    .catch(function (err) {
        console.log("error: " + err)
    })

function appendData(data) {
    
function userTemplate(data) {
    // Template with message Data//
    
    if (data.message) {
    return `
    <div class= "userBox `+data.status+`"> 
    <div class= NotiInsideBox ></div>
        <span class="userPic"><picture><img src= ${data.userPic} alt="userpicture"></picture></span>
        <div class="layoutFlexColumn">
            <div>
                <span class="name">${data.name}</span>
                <span class="activity">${data.activity}</span>
                <span class="event">${data.endObject}</span>
                <span class="reddot `+data.status+`"></span>
                </div>
                    <div class="time">${data.time}</div>
                    <div class="messageBox">${data.message}</div>    
            </div>
        </div>
    `}

    // Template with endObjectPic Data//
    else if (data.endObjectPic) {
        return `
        <div class="userBox `+data.status+`">  
            <div class="NotiInsideBox"></div>
                <span class="userPic"><picture><img src= ${data.userPic} alt="userpicture"></picture></span>
                <div class="layoutFlexColumnImage">
                    <div>
                        <span class="name">${data.name}</span>
                        <span class="activity">${data.activity}</span>
                        <span class="event">${data.endObject}</span>
                        <span class="reddot `+data.status+`"></span> 
                            <div class="time">1 week ago</div>
                    </div>
                </div>
                <div class="eventPicture"><picture><img src=${data.endObjectPic} alt="eventPicture"></picture></div>
            </div>
        </div>    
    `}

    // Template normal//
    else    {
    return `
    <div class= "userBox `+data.status+`"> 
    <div class= NotiInsideBox ></div>
        <span class="userPic"><picture><img src= ${data.userPic} alt="userpicture"></picture></span>
        <div class="layoutFlexColumn">
            <div>
                <span class="name">${data.name}</span>
                <span class="activity">${data.activity}</span>
                <span class="event">${data.endObject}</span>
                <span class="reddot `+data.status+`"></span>
                </div>
                    <div class="time">${data.time}</div>  
            </div>
        </div>
    ` }
}
    document.getElementById("userSection").innerHTML = `
    ${data.map(userTemplate).join(" ")} `

const mark = document.querySelector(".mark");
const notiNum = document.querySelector(".notiNum");
const blueboxControlUnread = document.querySelectorAll(".userBox.unread");
const blueboxControlRead = document.querySelectorAll(".userBox.read");
const messageBox = document.querySelector(".messageBox");
const eventPicture = document.querySelector(".eventPicture img");
const reddotControlUnread = document.querySelectorAll(".reddot.unread")


//**Unread to Read**//
console.log(blueboxControlUnread.length)

blueboxControlUnread.forEach(element => {
    element.addEventListener("click", () => {
      element.classList.replace("unread", "read");
      const reddotSingle = element.querySelector(".reddot.unread");
      reddotSingle.classList.replace("unread", "read");

      
    });
    
    
});


// **Mark all as read Class**//

mark.addEventListener("click", () => {
    blueboxControlUnread.forEach(element => {
      element.classList.replace("unread", "read");
    });
    reddotControlUnread.forEach(element => {
      element.classList.replace("unread", "read");
       
    });
  });


// **messageBox Blue mouseover**//

function mouseover() {
    messageBox.style.backgroundColor = "hsl(211, 68%, 94%)"
    
}

function mouseout() {
    messageBox.style.backgroundColor = "rgba(0,0,0,0.0)"  
}

messageBox.addEventListener("mouseover", mouseover)
messageBox.addEventListener("mouseout", mouseout)


// **eventPicture mouseover**

function mouseoverevent() {
    eventPicture.style.outline = "3px solid hsl(205, 33%, 90%)";
}

function mouseoutevent() { 
    eventPicture.style.outline = "none"
}

eventPicture.addEventListener("mouseover", mouseoverevent)
eventPicture.addEventListener("mouseout", mouseoutevent)


function countUnread() {
    return blueboxControlUnread.length;
  }
  

    const numUnread = countUnread(); {
    notiNum.textContent = numUnread;
  }
  

  
  




}

