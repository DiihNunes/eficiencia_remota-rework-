function openNav() {
    var x = document.getElementById("navigation");

    if (x.className === "navbar") {
        x.className += " menujs";
        document.getElementById("threeline_menu").innerHTML = "&Cross;";
    }

    else {
        x.className = "navbar"
        document.getElementById("threeline_menu").innerHTML = "&#9776;";
    }
}

  let mybutton = document.getElementById("myBtn");
  
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 430 || document.documentElement.scrollTop > 430) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }