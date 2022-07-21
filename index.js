       /* used for resize the side-bar */

let menubtn= document.querySelector(".menu-btn");
let sidebar= document.querySelector(".side-bar");
let videocontainer= document.querySelector(".video-container");

menubtn.onclick =function(){
    sidebar.classList.toggle("resize-sidebar");//classlist return css class && Toggle for show and hide
    videocontainer.classList.toggle("wide-video-container");
}


