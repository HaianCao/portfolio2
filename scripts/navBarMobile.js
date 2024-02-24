function menu(){
    let x = document.getElementsByClassName("menu-items-mobile");
    for(let i = 0; i < x.length; i++){
        if(window.getComputedStyle(x[i]).display==="none"){
            x[i].style.display="block";
        }
        else{
            x[i].style.display="none";
        }
    }
}