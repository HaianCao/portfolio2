function detailChoose(moreDetails, moreDetailsContent){
    let p = document.querySelectorAll(`.more-details p`);
    let c = document.querySelectorAll(`.more-details-content div ul`);
    for(let i = 0; i < p.length; i++){
        p[i].classList.remove("more-details-chosen");
        c[i].classList.remove("more-details-content-chosen");
    }
    document.getElementsByClassName(moreDetails)[0].classList.add("more-details-chosen");
    document.getElementsByClassName(moreDetailsContent)[0].classList.add("more-details-content-chosen");
}