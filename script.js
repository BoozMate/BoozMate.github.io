document.getElementById("html").style.display = "block";
document.getElementsByClassName("tab-btn")[0].className += " active";

function clicktoggle() {
  document.getElementById('keuzeformulier').style.display = 'block';
  document.getElementById('togglebutton').style.display = 'none';
  document.getElementById('container1').style.display = 'none';
}

function Dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function toggleDropdown() {
var icon = document.querySelector('.dropdown-icon');
icon.classList.toggle('flipped');
}

