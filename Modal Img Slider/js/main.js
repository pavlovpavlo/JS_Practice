var slideIndex=1;
var imgMass=["https://static.wikia.nocookie.net/2463f8e7-7b71-4f18-84cc-7a6d605f5d95","https://as00.epimg.net/meristation/imagenes/2018/11/30/noticias/1543568771_992044_1543568858_noticia_normal.jpg","https://images5.alphacoders.com/901/901095.jpg"];


window.addEventListener("load",initListener,false);
 function initListener()
 {       
     var next = document.getElementById("nxt-btn");
     var prev = document.getElementById("prev-btn");
     var dots = document.getElementsByClassName("dot");
     next.addEventListener("click",nextSlide,false);
     prev.addEventListener("click",prevSlide,false);
     for (i=0;i< dots.length;i++) dots[i].addEventListener("click",currentSlide,false);
     showSlides(slideIndex);
     document.getElementById('myBtn').addEventListener("click", showModal,false);
     document.getElementsByClassName("close")[0].addEventListener("click",hideModal,false);
     window.addEventListener("click", hideWindowModal, false);

 }
 function showModal()
 {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
 }
 function hideModal(event)
 {
     var modal = document.getElementById("myModal");
        modal.style.display = "none";
 }
 function hideWindowModal(event)
 {
    var modal = document.getElementById("myModal");
    if(event.target == modal)
        modal.style.display = "none";
 }
function nextSlide()
 {
    showSlides(slideIndex += 1);
 } 
 function prevSlide()
 {
    showSlides(slideIndex -= 1);
 }
 function currentSlide()
 {
    showSlides(slideIndex = parseInt(this.getAttribute("value")));
 }   
 function showSlides(n) 
 {
    var i;
    var slide = document.getElementById("my-slide");
    var dots = document.getElementsByClassName("dot");
    if(n > 3) 
        slideIndex = 1;
    if(n < 1) 
        slideIndex = 3;
    for (i=0;i< dots.length;i++) 
        dots[i].className = dots[i].className.replace("active","");
    var img = new Image();
    /*img.onload = function() {
        slide.style.width= this.width + "px";
        slide.style.height = this.height + "px"
    alert(this.width + 'x' + this.height);
    }*/
    img.src = imgMass[slideIndex-1];
    slide.setAttribute("src", imgMass[slideIndex-1]);
    dots[slideIndex-1].className += " active";
 }