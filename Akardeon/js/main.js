window.addEventListener("load",initListener,false);
 function initListener()
 {
    var accordion = document.getElementsByClassName("accordion");
    var i;
    for(i=0;i<accordion.length;i++)
        accordion[i].addEventListener("click",showPanel,false);
 }
 function showPanel()
 {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
 }
