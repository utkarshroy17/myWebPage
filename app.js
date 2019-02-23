
//Side navigation bar
// function openNav() {
//     document.getElementById("mySidenav").style.width = "200px";
//   }
  
// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
// }

// $('body').click(function(e) {
//   if ($('.sidenav').hasClass('bar')) {
//     $(".sidenav").toggleClass('bar')
//   }
// })

// $(document).click(function(e) {
//     $('.sidenav').animate({right: "-285px"}, 200);
//   }
// );

$('#nav-toggle').click(function(e) {
  e.stopPropagation();
  $(".menu").toggleClass('bar')
});
$('body').click(function(e) {
  if ($('.menu').hasClass('bar')) {
    $(".menu").toggleClass('bar')
  }
})

//master page layout
$(document).ready(function(){
    $("#master-placeholder").load("https://raw.githubusercontent.com/utkarshroy17/myWebPage/master/master.html")
});


//project table
document.addEventListener('DOMContentLoaded', function() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
    }
}, false);
