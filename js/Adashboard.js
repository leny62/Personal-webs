let asideNav= document.getElementById('main-left');
let topnav= document.getElementById('nav-container');
let dashParts= document.getElementsByClassName('dash-part');
let tabs= document.getElementsByClassName('tab');
dashParts[2].style.display='block';
function displayAside(){
    asideNav.classList.add('responsive');
    asideNav.style.display='flex';
    topnav.style.display='none';

}

function dashPart(n){
    for(let i=0; i<dashParts.length; i++){
        dashParts[i].style.display='none';
        tabs[i].classList.remove('active');

    }

    tabs[n].classList.add('active');
    dashParts[n].style.display='block';

}

$(document).mouseup(function(e) 
{
    if( asideNav.classList.contains('responsive')){
          // if the target of the click isn't the container nor a descendant of the container
          if ($(e.target).closest(".main-left").length === 0) 
    {
        asideNav.style.display='none';
        topnav.style.display='flex';
    }
    }
  
});