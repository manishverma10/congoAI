$(document).ready(function() {
    for (let i = 1; i <= 9; i++) {
      setTimeout( () =>{
        document.getElementById("ele"+i).style.display="block";
      }, i * 1300)
    }
  });


 