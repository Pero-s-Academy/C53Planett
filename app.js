const header = document.querySelector('header');

let prevScrollPod = window.scrollY;

window.onscroll = function(){
    let currentScrollPos = window.scrollY;

    if(prevScrollPod > currentScrollPos){
        header.classList.remove("scroll")
    }
    else{
        header.classList.add("scroll")
    }

    prevScrollPod = currentScrollPos;
}
