"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

//Disable the send button until connection is established.
document.getElementById("sendButton").disabled = true;


connection.on("ReceiveMessage", function (user, message,time) {
    var usermail = document.getElementById("userInputName").value.split('@');
    var curruser = usermail[0];
    
    var li = document.createElement("li");
    const messageHTML = `
  <div class="message">
    <div class="message-sender position-relative">${user} : 
     <span class="position-absolute top-0 end-0 fw-light">${time}</span></div>
    <div class="message-text">${message} </div>
  </div>
`;
    var x = "outgoing";
    if (curruser == user) {

        x = "outgoing"
    }
    else {
        x = "coming"
    }
   
    var divChat = ` <div class="message ${x}">
        <h5> ${user}</h5>
            <p>${message}</p>
                     </div >
  `;

    //document.getElementById("messagesList").appendChild(li);
    document.getElementById("messagesList").innerHTML += divChat;
 //   li.textContent = `${user} : ${message}`;
});

connection.start().then(function () {
   
    document.getElementById("sendButton").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});



document.getElementById("sendButton").addEventListener("click", function (event) {
    var user = document.getElementById("userInput").value;
    var message = document.getElementById("messageInput").value;
    console.log(user);
    var url1 = window.location.pathname.split('/');
    var nurl = url1[1];
   
    connection.invoke("SendMessage", nurl, message).catch(function (err) {
      return console.error(err.toString());
    });
    event.preventDefault();
});
document.getElementById("closebtn").addEventListener("click", function (event) {
    document.getElementById("messagesList").remove ;
    var x = document.getElementById("messagesList").value;
    console.log(x);
   
    event.preventDefault();
});

const button = document.getElementById('secondbtn');
document.getElementById("showButton").addEventListener("click", function (event) {
    //  document.getElementById("showButton").style.display = 'none';

    document.getElementById("showButton").hidden = true;
    document.getElementById("addbtn").innerHTML += `
        
    <button class="btn btn-primary" id="secondbtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" style="margin-top:4rem !important ; width:10rem; background-color:darkcyan !important;border-color:white;font-weight:500;">المحاثات</button>

    `;
    /*<button class="btn btn-primary" style="margin-top:4rem !important" id="secondbtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" > Live Chat</button>*/
 
    var url1 = window.location.pathname.split('/');
    var nurl = url1[1];

    connection.invoke("ShowChat", nurl).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});
//function showchatonload() {
//    var url1 = window.location.pathname.split('/');
//    var nurl = url1[1];
//    connection.invoke("ShowChat", nurl).catch(function (err) {
//        return console.error(err.toString());
//    });
//}
//window.onload = showchatonload;
//document.addEventListener('DOMContentLoaded', showchatonload);