window.addEventListener("load",initListener,false);
 function initListener()
 {       
     document.getElementById('myBtn').addEventListener("click", move,false);
 }
 function move()
 {
    var element = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame,100);
    function frame()
    {
        if(width>=100)
            clearInterval(id);
        else
        {
            width++;
            element.style.width= width + '%';
            document.getElementById("label").innerHTML = width*1 + '%';
        }
    }
 }
