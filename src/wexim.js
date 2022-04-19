function togglemenu(){
    let sidebar=document.getElementById('sidebar');
    if (sidebar.offsetWidth === 0){
        const width= window.innerWidth< 600 ? 300 : 600
        sidebar.style.width = `${width}px`;
        sidebar.style.display ='block';
    }else {
        sidebar.style.width = `0px`;
        sidebar.style.display ='none';
    }

}

window.onscroll = () => {
    let nav = document.getElementById('header');
    if(this.scrollY <= 300){
        nav.className = 'header';
    }else{
        nav.className = 'nav-scroll';
    }

    if(this.scrollY <=500){
        scrolltopbtn.style.display="none";
    }
    else{
        scrolltopbtn.style.display="block";
    }
}
let scrolltopbtn=document.getElementById("scroll-up");
let rootElement = document.documentElement





function scrolltop(){
    rootElement.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
scrolltopbtn.addEventListener("click",scrolltop);