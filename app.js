
//Side navigation bar
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
  }
  
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$(document).mouseup(function (e) {
  // alert("click");
   if(document.getElementById("mySidenav").style.width !== "0") {
      closeNav();
   }    
 });

//master page layout
$(document).ready(function(){
    $("#master-placeholder").load("https://raw.githubusercontent.com/utkarshroy17/myWebPage/master/master.html")
});

//document.getElementById("project-table").addEventListener("click", alterHeight);

var tableHeight = 0, prevHeight;

function alterHeight(acc, panel) {
  //alert("changing height");    
  if(!panel.style.maxHeight)
    tableHeight += panel.scrollHeight;
  else
    tableHeight -= panel.scrollHeight;
  document.getElementById("proj").style.height = tableHeight + 40 + 'px';
}
//project table
document.addEventListener('DOMContentLoaded', function() {
    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      tableHeight += acc[i].offsetHeight;
    }

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          alterHeight(acc, panel);
          if (panel.style.maxHeight){
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }          
      });      
    }
    
}, false);
