window.addEventListener("load",initListener,false);
 function initListener()
 {       
     document.getElementById('nav').addEventListener("mouseover", showSubmenu,false);
     document.addEventListener("mouseover",closeSubmenu, false)
 }
 function showSubmenu(event)
 {
    var target = event.target;
    if(target.className == 'menu-item')
    {
        var s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display = 'block';
    }
 }
 function closeSubmenu(event)
 {
    var target = event.target;
    if(target.className != 'menu-item' && target.className != 'menu-item')
        closeMenu();
 }
 function closeMenu ()
 {
    var menu = document.getElementById('nav');
    var submenu = document.getElementsByClassName('submenu');
    for(var i=0; i<submenu.length; i++)
        submenu[i].style.display = 'none';
 }
