
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

function changeToOne() {
  document.getElementById("info-header").textContent = "gCLAS";
  document.getElementById("details").textContent = "The first project was a large scale web application which is used by banks in North America to process their customer credit reports, create cashflows and calculate their expected credit loss every month. This allowed them to comply with financial regulations such as CECL and IFRS9. I worked in a team of 10 developers to develop, scale, manage, automate and deploy this application. We had clients from US, Canada and a few banks in Middle East and South East Asia. It was one of the top earning projects for KPMG."
}

function changeToTwo() {
  document.getElementById("info-header").textContent = "OperationsVault";
  document.getElementById("details").textContent = "The other project was an inhouse project to create an application used by KPMG employees to fill time cards, basically an application where the employees could enter the number of hours they worked on a particular engagement in a week, to keep track of their tasks. This was used by our team’s managers to give monthly reports to the leadership team. This was built from scratch by a small team of 3 developers."
}
// document.getElementById("workBtn").addEventListener("click", openDropdown);

// function openDropdown() {
//   var dropdown = document.getElementsByClassName("dropdown-btn");
//   var i;
  
//   alert("clicked");
//   for (i = 0; i < dropdown.length; i++) {
    
//     dropdown[i].addEventListener("click", function() {
//       this.classList.toggle("active");
//       var dropdownContent = this.nextElementSibling;
//       if (dropdownContent.style.display === "block") {
//         dropdownContent.style.display = "none";
//       } else {
//         dropdownContent.style.display = "block";
//       }
//     });
//   }
// }
