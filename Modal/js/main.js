window.addEventListener("load",initListener,false);
 function initListener()
 {       
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
