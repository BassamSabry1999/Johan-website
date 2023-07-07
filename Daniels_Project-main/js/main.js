document.addEventListener('scroll',()=>{
    const nav =document.querySelector('nav');
    if(window.scrollY>500){
        nav.classList.add('scrolled')
    }else{
        nav.classList.remove
    }
})