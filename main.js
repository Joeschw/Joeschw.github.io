document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("mainHeader").onclick = function() {
    this.style.color = 'orange'
  }
})
$( document ).ready(function() {
  $( "#Demolish" ).click(function() {
    $( "Div" ).fadeOut( "slow", function() {
    });
  });
});