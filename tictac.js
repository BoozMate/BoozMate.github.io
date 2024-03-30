var flag = "X"
var pressed1 = false;
var pressed2 = false;
var pressed3 = false;
var pressed4 = false;
var pressed5 = false;
var pressed6 = false;
var pressed7 = false;
var pressed8 = false;
var pressed9 = false;
var xwin = false;
var owin = false;
var countx = "0";
var counto = "0";



function tttb1(){
  document.getElementById("p1").style.color = "black";
  document.getElementById("p1").style.textShadow = "0 0 2px #fff, " +
       "0 0 4px #fff, " +
       "0 0 6px #fff, " +
       "0 0 10px #ff0095, " +
       "0 0 45px #ff0095, " +
       "0 0 55px #ff0095, " +
       "0 0 70px #ff0095, " +
       "0 0 80px #ff0095";
  
  if(flag.trim() === "X"){
    if(pressed1===false){
      document.querySelector(".ttt-cel #p1").innerText = "X";
    flag = "O";
    pressed1 = true
    }
  }
  else{
    if(pressed1===false){
    document.querySelector('.ttt-cel #p1').innerText = "O";
    flag = "X";
    pressed1 = true
    }
  }
}

function tttb2(){
  document.getElementById("p2").style.color = "black";
  document.getElementById("p2").style.textShadow = "0 0 2px #fff, " +
       "0 0 4px #fff, " +
       "0 0 6px #fff, " +
       "0 0 10px #ff0095, " +
       "0 0 45px #ff0095, " +
       "0 0 55px #ff0095, " +
       "0 0 70px #ff0095, " +
       "0 0 80px #ff0095";
  if(flag.trim() === "X"){
    if(pressed2===false){
      document.querySelector(".ttt-cel #p2").innerText = "X";
    flag = "O";
    pressed2 = true
    }
  }
  else{
    if(pressed2===false){
       document.querySelector('.ttt-cel #p2').innerText = "O";
    flag = "X";
    pressed2 = true
    }
  }
}

function tttb3(){
  document.getElementById("p3").style.color = "black";
  document.getElementById("p3").style.textShadow = "0 0 2px #fff, " +
       "0 0 4px #fff, " +
       "0 0 6px #fff, " +
       "0 0 10px #ff0095, " +
       "0 0 45px #ff0095, " +
       "0 0 55px #ff0095, " +
       "0 0 70px #ff0095, " +
       "0 0 80px #ff0095";
  if(flag.trim() === "X"){
    if(pressed3===false){
      document.querySelector(".ttt-cel #p3").innerText = "X";
    flag = "O";
    pressed3 = true
    }
  }
  else{
    if(pressed3===false){
    document.querySelector('.ttt-cel #p3').innerText = "O";
    flag = "X";
    pressed3 = true
    }
  }
}

function tttb4(){
  document.getElementById("p4").style.color = "black";
  document.getElementById("p4").style.textShadow = "0 0 2px #fff, " +
       "0 0 4px #fff, " +
       "0 0 6px #fff, " +
       "0 0 10px #ff0095, " +
       "0 0 45px #ff0095, " +
       "0 0 55px #ff0095, " +
       "0 0 70px #ff0095, " +
       "0 0 80px #ff0095";
  if(flag.trim() === "X"){
    if(pressed4===false){
       document.querySelector('.ttt-cel #p4').innerText = "X";
    flag = "O";
    pressed4 = true
    }
  }
  else{
    if(pressed4===false){
       document.querySelector('.ttt-cel #p4').innerText = "O";
    flag = "X";
    pressed4 = true
    }
  }
}

function tttb5(){
  document.getElementById("p5").style.color = "black";
  document.getElementById("p5").style.textShadow = "0 0 2px #fff, " +
       "0 0 4px #fff, " +
       "0 0 6px #fff, " +
       "0 0 10px #ff0095, " +
       "0 0 45px #ff0095, " +
       "0 0 55px #ff0095, " +
       "0 0 70px #ff0095, " +
       "0 0 80px #ff0095";
  if(flag.trim() === "X"){
    if(pressed5===false){
       document.querySelector('.ttt-cel #p5').innerText = "X";
    flag = "O";
    pressed5 = true
    }
  }
  else{
    if(pressed5===false){
       document.querySelector('.ttt-cel #p5').innerText = "O";
    flag = "X";
    pressed5 = true
    }
  }
}

function tttb6(){
  document.getElementById("p6").style.color = "black";
  document.getElementById("p6").style.textShadow = "0 0 2px #fff, " +
       "0 0 4px #fff, " +
       "0 0 6px #fff, " +
       "0 0 10px #ff0095, " +
       "0 0 45px #ff0095, " +
       "0 0 55px #ff0095, " +
       "0 0 70px #ff0095, " +
       "0 0 80px #ff0095";
  if(flag.trim() === "X"){
    if(pressed6===false){
       document.querySelector('.ttt-cel #p6').innerText = "X";
    flag = "O";
    pressed6 = true
    }
  }
  else{
    if(pressed6===false){
       document.querySelector('.ttt-cel #p6').innerText = "O";
    flag = "X";
    pressed6 = true
    }
  }
}

function tttb7(){
  document.getElementById("p7").style.color = "black";
  document.getElementById("p7").style.textShadow = "0 0 2px #fff, " +
       "0 0 4px #fff, " +
       "0 0 6px #fff, " +
       "0 0 10px #ff0095, " +
       "0 0 45px #ff0095, " +
       "0 0 55px #ff0095, " +
       "0 0 70px #ff0095, " +
       "0 0 80px #ff0095";
  if(flag.trim() === "X"){
    if(pressed7===false){
       document.querySelector('.ttt-cel #p7').innerText = "X";
    flag = "O";
    pressed7 = true
    }
  }
  else{
    if(pressed7===false){
       document.querySelector('.ttt-cel #p7').innerText = "O";
    flag = "X";
    pressed7 = true
    }
  }
}

function tttb8(){
  document.getElementById("p8").style.color = "black";
  document.getElementById("p8").style.textShadow = "0 0 2px #fff, " +
       "0 0 4px #fff, " +
       "0 0 6px #fff, " +
       "0 0 10px #ff0095, " +
       "0 0 45px #ff0095, " +
       "0 0 55px #ff0095, " +
       "0 0 70px #ff0095, " +
       "0 0 80px #ff0095";
  if(flag.trim() === "X"){
    if(pressed8===false){
       document.querySelector('.ttt-cel #p8').innerText = "X";
    flag = "O";
    pressed8 = true
    }
  }
  else{
    if(pressed8===false){
       document.querySelector('.ttt-cel #p8').innerText = "O";
    flag = "X";
    pressed8 = true
    }
  }
}

function tttb9(){

  document.getElementById("p9").style.color = "black";
  document.getElementById("p9").style.textShadow = "0 0 2px #fff, " +
       "0 0 4px #fff, " +
       "0 0 6px #fff, " +
       "0 0 10px #ff0095, " +
       "0 0 45px #ff0095, " +
       "0 0 55px #ff0095, " +
       "0 0 70px #ff0095, " +
       "0 0 80px #ff0095";
  if(flag.trim() === "X"){
    if(pressed9===false){
       document.querySelector('.ttt-cel #p9').innerText = "X";
    flag = "O";
    pressed9 = true
    }
  }
  else{
    if(pressed9===false){
       document.querySelector('.ttt-cel #p9').innerText = "O";
    flag = "X";
    pressed9 = true
    }
  }
}


function reset(){
   document.querySelector('#wintext').innerHTML = ""
  document.querySelector('.ttt-cel #p1').innerText = "-"
  document.querySelector('.ttt-cel #p2').innerText = "-"
  document.querySelector('.ttt-cel #p3').innerText = "-"
  document.querySelector('.ttt-cel #p4').innerText = "-"
  document.querySelector('.ttt-cel #p5').innerText = "-"
  document.querySelector('.ttt-cel #p6').innerText = "-"
  document.querySelector('.ttt-cel #p7').innerText = "-"
  document.querySelector('.ttt-cel #p8').innerText = "-"
  document.querySelector('.ttt-cel #p9').innerText = "-"

  document.getElementById("p1").style.color = "transparent";
  document.getElementById("p2").style.color = "transparent";
  document.getElementById("p3").style.color = "transparent";
  document.getElementById("p4").style.color = "transparent";
  document.getElementById("p5").style.color = "transparent";
  document.getElementById("p6").style.color = "transparent";
  document.getElementById("p7").style.color = "transparent";
  document.getElementById("p8").style.color = "transparent";
  document.getElementById("p9").style.color = "transparent";

  document.getElementById("p1").style.textShadow = "none";
  document.getElementById("p2").style.textShadow = "none";
  document.getElementById("p3").style.textShadow = "none";
  document.getElementById("p4").style.textShadow = "none";
  document.getElementById("p5").style.textShadow = "none";
  document.getElementById("p6").style.textShadow = "none";
  document.getElementById("p7").style.textShadow = "none";
  document.getElementById("p8").style.textShadow = "none";
  document.getElementById("p9").style.textShadow = "none";

  pressed1 = false
  pressed2 = false
  pressed3 = false
  pressed4 = false
  pressed5 = false
  pressed6 = false
  pressed7 = false
  pressed8 = false
  pressed9 = false
  xwin = false
  owin = false

  tttb1 = function() {
      document.getElementById("p1").style.color = "black";
      document.getElementById("p1").style.textShadow = "0 0 2px #fff, " +
           "0 0 4px #fff, " +
           "0 0 6px #fff, " +
           "0 0 10px #ff0095, " +
           "0 0 45px #ff0095, " +
           "0 0 55px #ff0095, " +
           "0 0 70px #ff0095, " +
           "0 0 80px #ff0095";

      if(flag.trim() === "X"){
        if(pressed1===false){
          document.querySelector(".ttt-cel #p1").innerText = "X";
        flag = "O";
        pressed1 = true
        }
      }
      else{
        if(pressed1===false){
        document.querySelector('.ttt-cel #p1').innerText = "O";
        flag = "X";
        pressed1 = true
        }
      }
  };

  tttb2 = function() {
      document.getElementById("p2").style.color = "black";
      document.getElementById("p2").style.textShadow = "0 0 2px #fff, " +
           "0 0 4px #fff, " +
           "0 0 6px #fff, " +
           "0 0 10px #ff0095, " +
           "0 0 45px #ff0095, " +
           "0 0 55px #ff0095, " +
           "0 0 70px #ff0095, " +
           "0 0 80px #ff0095";

      if(flag.trim() === "X"){
        if(pressed2===false){
          document.querySelector(".ttt-cel #p2").innerText = "X";
        flag = "O";
        pressed2 = true
        }
      }
      else{
        if(pressed2===false){
        document.querySelector('.ttt-cel #p2').innerText = "O";
        flag = "X";
        pressed2 = true
        }
      }
  };

  tttb3 = function() {
      document.getElementById("p3").style.color = "black";
      document.getElementById("p3").style.textShadow = "0 0 2px #fff, " +
           "0 0 4px #fff, " +
           "0 0 6px #fff, " +
           "0 0 10px #ff0095, " +
           "0 0 45px #ff0095, " +
           "0 0 55px #ff0095, " +
           "0 0 70px #ff0095, " +
           "0 0 80px #ff0095";

      if(flag.trim() === "X"){
        if(pressed3===false){
          document.querySelector(".ttt-cel #p3").innerText = "X";
        flag = "O";
        pressed3 = true
        }
      }
      else{
        if(pressed3===false){
        document.querySelector('.ttt-cel #p3').innerText = "O";
        flag = "X";
        pressed3 = true
        }
      }
  };

  tttb4 = function() {
      document.getElementById("p4").style.color = "black";
      document.getElementById("p4").style.textShadow = "0 0 2px #fff, " +
           "0 0 4px #fff, " +
           "0 0 6px #fff, " +
           "0 0 10px #ff0095, " +
           "0 0 45px #ff0095, " +
           "0 0 55px #ff0095, " +
           "0 0 70px #ff0095, " +
           "0 0 80px #ff0095";

      if(flag.trim() === "X"){
        if(pressed4===false){
          document.querySelector(".ttt-cel #p4").innerText = "X";
        flag = "O";
        pressed4 = true
        }
      }
      else{
        if(pressed4===false){
        document.querySelector('.ttt-cel #p4').innerText = "O";
        flag = "X";
        pressed4 = true
        }
      }
  };

  tttb5 = function() {
      document.getElementById("p5").style.color = "black";
      document.getElementById("p5").style.textShadow = "0 0 2px #fff, " +
           "0 0 4px #fff, " +
           "0 0 6px #fff, " +
           "0 0 10px #ff0095, " +
           "0 0 45px #ff0095, " +
           "0 0 55px #ff0095, " +
           "0 0 70px #ff0095, " +
           "0 0 80px #ff0095";

      if(flag.trim() === "X"){
        if(pressed5===false){
          document.querySelector(".ttt-cel #p5").innerText = "X";
        flag = "O";
        pressed5 = true
        }
      }
      else{
        if(pressed5===false){
        document.querySelector('.ttt-cel #p5').innerText = "O";
        flag = "X";
        pressed5 = true
        }
      }
  };

  tttb6 = function() {
      document.getElementById("p6").style.color = "black";
      document.getElementById("p6").style.textShadow = "0 0 2px #fff, " +
           "0 0 4px #fff, " +
           "0 0 6px #fff, " +
           "0 0 10px #ff0095, " +
           "0 0 45px #ff0095, " +
           "0 0 55px #ff0095, " +
           "0 0 70px #ff0095, " +
           "0 0 80px #ff0095";

      if(flag.trim() === "X"){
        if(pressed6===false){
          document.querySelector(".ttt-cel #p6").innerText = "X";
        flag = "O";
        pressed6 = true
        }
      }
      else{
        if(pressed6===false){
        document.querySelector('.ttt-cel #p6').innerText = "O";
        flag = "X";
        pressed6 = true
        }
      }
  };

  tttb7 = function() {
      document.getElementById("p7").style.color = "black";
      document.getElementById("p7").style.textShadow = "0 0 2px #fff, " +
           "0 0 4px #fff, " +
           "0 0 6px #fff, " +
           "0 0 10px #ff0095, " +
           "0 0 45px #ff0095, " +
           "0 0 55px #ff0095, " +
           "0 0 70px #ff0095, " +
           "0 0 80px #ff0095";

      if(flag.trim() === "X"){
        if(pressed7===false){
          document.querySelector(".ttt-cel #p7").innerText = "X";
        flag = "O";
        pressed7 = true
        }
      }
      else{
        if(pressed7===false){
        document.querySelector('.ttt-cel #p7').innerText = "O";
        flag = "X";
        pressed7 = true
        }
      }
  };

  tttb8 = function() {
      document.getElementById("p8").style.color = "black";
      document.getElementById("p8").style.textShadow = "0 0 2px #fff, " +
           "0 0 4px #fff, " +
           "0 0 6px #fff, " +
           "0 0 10px #ff0095, " +
           "0 0 45px #ff0095, " +
           "0 0 55px #ff0095, " +
           "0 0 70px #ff0095, " +
           "0 0 80px #ff0095";

      if(flag.trim() === "X"){
        if(pressed8===false){
          document.querySelector(".ttt-cel #p8").innerText = "X";
        flag = "O";
        pressed8 = true
        }
      }
      else{
        if(pressed8===false){
        document.querySelector('.ttt-cel #p8').innerText = "O";
        flag = "X";
        pressed8 = true
        }
      }
  };

  tttb9 = function() {
      document.getElementById("p9").style.color = "black";
      document.getElementById("p9").style.textShadow = "0 0 2px #fff, " +
           "0 0 4px #fff, " +
           "0 0 6px #fff, " +
           "0 0 10px #ff0095, " +
           "0 0 45px #ff0095, " +
           "0 0 55px #ff0095, " +
           "0 0 70px #ff0095, " +
           "0 0 80px #ff0095";

      if(flag.trim() === "X"){
        if(pressed9===false){
          document.querySelector(".ttt-cel #p9").innerText = "X";
        flag = "O";
        pressed9 = true
        }
      }
      else{
        if(pressed9===false){
        document.querySelector('.ttt-cel #p9').innerText = "O";
        flag = "X";
        pressed9 = true
        }
      }
  };

  
}




function checkwin(){
if ( document.querySelector('.ttt-cel #p1').innerText === "X" &&
  document.querySelector('.ttt-cel #p2').innerText === "X" &&
  document.querySelector('.ttt-cel #p3').innerText === "X"){
  xwin = true
  
  document.querySelector('.ttt-cel #p1').style.color = "red"
  document.querySelector('.ttt-cel #p2').style.color = "red"
  document.querySelector('.ttt-cel #p3').style.color = "red"

  
}
else if (
    document.querySelector('.ttt-cel #p4').innerText === "X" &&
    document.querySelector('.ttt-cel #p5').innerText === "X" &&
    document.querySelector('.ttt-cel #p6').innerText === "X"
  ){
    xwin = true

  document.querySelector('.ttt-cel #p4').style.color = "red"
  document.querySelector('.ttt-cel #p5').style.color = "red"
  document.querySelector('.ttt-cel #p6').style.color = "red"


  }

  else if(
    document.querySelector('.ttt-cel #p7').innerText === "X" &&
    document.querySelector('.ttt-cel #p8').innerText === "X" &&
    document.querySelector('.ttt-cel #p9').innerText === "X"
  ){
    xwin = true

    document.querySelector('.ttt-cel #p7').style.color = "red"
    document.querySelector('.ttt-cel #p8').style.color = "red"
    document.querySelector('.ttt-cel #p9').style.color = "red"


  }

  else if(
    document.querySelector('.ttt-cel #p1').innerText === "X" &&
    document.querySelector('.ttt-cel #p5').innerText === "X" &&
    document.querySelector('.ttt-cel #p9').innerText === "X"
  ){
    xwin = true

    document.querySelector('.ttt-cel #p1').style.color = "red"
    document.querySelector('.ttt-cel #p5').style.color = "red"
    document.querySelector('.ttt-cel #p9').style.color = "red"


  }

  else if(
    document.querySelector('.ttt-cel #p3').innerText === "X" &&
    document.querySelector('.ttt-cel #p5').innerText === "X" &&
    document.querySelector('.ttt-cel #p7').innerText === "X"
  ){
    xwin = true

    document.querySelector('.ttt-cel #p3').style.color = "red"
    document.querySelector('.ttt-cel #p5').style.color = "red"
    document.querySelector('.ttt-cel #p7').style.color = "red"


  }

  else if(
    document.querySelector('.ttt-cel #p1').innerText === "X" &&
    document.querySelector('.ttt-cel #p4').innerText === "X" &&
    document.querySelector('.ttt-cel #p7').innerText === "X"
  ){
    xwin = true

    document.querySelector('.ttt-cel #p1').style.color = "red"
    document.querySelector('.ttt-cel #p4').style.color = "red"
    document.querySelector('.ttt-cel #p7').style.color = "red"


  }
    
  else if(
    document.querySelector('.ttt-cel #p2').innerText === "X" &&
    document.querySelector('.ttt-cel #p5').innerText === "X" &&
    document.querySelector('.ttt-cel #p8').innerText === "X"
  ){
    xwin = true

    document.querySelector('.ttt-cel #p2').style.color = "red"
    document.querySelector('.ttt-cel #p5').style.color = "red"
    document.querySelector('.ttt-cel #p8').style.color = "red"


  }
    
  else if(
    document.querySelector('.ttt-cel #p3').innerText === "X" &&
    document.querySelector('.ttt-cel #p6').innerText === "X" &&
    document.querySelector('.ttt-cel #p9').innerText === "X"
  ){
    xwin = true

    document.querySelector('.ttt-cel #p3').style.color = "red"
    document.querySelector('.ttt-cel #p6').style.color = "red"
    document.querySelector('.ttt-cel #p9').style.color = "red"


  }

  else if ( document.querySelector('.ttt-cel #p1').innerText === "O" &&
    document.querySelector('.ttt-cel #p2').innerText === "O" &&
    document.querySelector('.ttt-cel #p3').innerText === "O"){
    owin = true

    document.querySelector('.ttt-cel #p1').style.color = "red"
    document.querySelector('.ttt-cel #p2').style.color = "red"
    document.querySelector('.ttt-cel #p3').style.color = "red"


  }
  else if (
      document.querySelector('.ttt-cel #p4').innerText === "O" &&
      document.querySelector('.ttt-cel #p5').innerText === "O" &&
      document.querySelector('.ttt-cel #p6').innerText === "O"
    ){
      owin = true

    document.querySelector('.ttt-cel #p4').style.color = "red"
    document.querySelector('.ttt-cel #p5').style.color = "red"
    document.querySelector('.ttt-cel #p6').style.color = "red"


    }

    else if(
      document.querySelector('.ttt-cel #p7').innerText === "O" &&
      document.querySelector('.ttt-cel #p8').innerText === "O" &&
      document.querySelector('.ttt-cel #p9').innerText === "O"
    ){
      owin = true

      document.querySelector('.ttt-cel #p7').style.color = "red"
      document.querySelector('.ttt-cel #p8').style.color = "red"
      document.querySelector('.ttt-cel #p9').style.color = "red"


    }

    else if(
      document.querySelector('.ttt-cel #p1').innerText === "O" &&
      document.querySelector('.ttt-cel #p5').innerText === "O" &&
      document.querySelector('.ttt-cel #p9').innerText === "O"
    ){
      owin = true

      document.querySelector('.ttt-cel #p1').style.color = "red"
      document.querySelector('.ttt-cel #p5').style.color = "red"
      document.querySelector('.ttt-cel #p9').style.color = "red"


    }

    else if(
      document.querySelector('.ttt-cel #p3').innerText === "O" &&
      document.querySelector('.ttt-cel #p5').innerText === "O" &&
      document.querySelector('.ttt-cel #p7').innerText === "O"
    ){
      owin = true

      document.querySelector('.ttt-cel #p3').style.color = "red"
      document.querySelector('.ttt-cel #p5').style.color = "red"
      document.querySelector('.ttt-cel #p7').style.color = "red"


    }

    else if(
      document.querySelector('.ttt-cel #p1').innerText === "O" &&
      document.querySelector('.ttt-cel #p4').innerText === "O" &&
      document.querySelector('.ttt-cel #p7').innerText === "O"
    ){
      owin = true

      document.querySelector('.ttt-cel #p1').style.color = "red"
      document.querySelector('.ttt-cel #p4').style.color = "red"
      document.querySelector('.ttt-cel #p7').style.color = "red"


    }

    else if(
      document.querySelector('.ttt-cel #p2').innerText === "O" &&
      document.querySelector('.ttt-cel #p5').innerText === "O" &&
      document.querySelector('.ttt-cel #p8').innerText === "O"
    ){
      owin = true

      document.querySelector('.ttt-cel #p2').style.color = "red"
      document.querySelector('.ttt-cel #p5').style.color = "red"
      document.querySelector('.ttt-cel #p8').style.color = "red"


    }

    else if(
      document.querySelector('.ttt-cel #p3').innerText === "O" &&
      document.querySelector('.ttt-cel #p6').innerText === "O" &&
      document.querySelector('.ttt-cel #p9').innerText === "O"
    ){
      owin = true

      document.querySelector('.ttt-cel #p3').style.color = "red"
      document.querySelector('.ttt-cel #p6').style.color = "red"
      document.querySelector('.ttt-cel #p9').style.color = "red"


    }
  


  
  if(xwin === true || owin === true){
    tttb1 = null
    tttb2 = null
    tttb3 = null
    tttb4 = null
    tttb5 = null
    tttb6 = null
    tttb7 = null
    tttb8 = null
    tttb9 = null
  }
}



  function checkwintext(){
 if (xwin === false && owin === false 
     && pressed1 === true
    && pressed2 === true
  && pressed3 === true
  && pressed4 === true
  && pressed5 === true
  && pressed6 === true
  && pressed7 === true
  && pressed8 === true
  && pressed9 === true){
     document.querySelector('#wintext').innerHTML = "Gelijkspel!"
 } 
   else if (xwin === true){
     document.querySelector('#wintext').innerHTML = "X wint!"
   }
    else if (owin === true){
       document.querySelector('#wintext').innerHTML = "O wint!"
     }
}

function tttcounter(){
  if (xwin === true)
    countx++
  else if (owin === true)
    counto++

  document.getElementById("xwinvalue").textContent = countx;
  document.getElementById("owinvalue").textContent = counto;

if(countx > counto){
  document.getElementById("counterdivo").style.background = "red";
    document.getElementById("counterdivo").style.boxShadow = "0 0 2px #fff, " +
     "0 0 4px #fff, " +
     "0 0 6px #fff, " +
     "0 0 10px red, " +
     "0 0 45px red, " +
     "0 0 55px red, " +
     "0 0 70px red, " +
     "0 0 80px red";
  document.getElementById("counterdivx").style.background = "green";
  document.getElementById("counterdivx").style.boxShadow = "0 0 2px #fff, " +
   "0 0 4px #fff, " +
   "0 0 6px #fff, " +
   "0 0 10px green, " +
   "0 0 45px green, " +
   "0 0 55px green, " +
   "0 0 70px green, " +
   "0 0 80px green";
}

  else if(counto > countx){
      document.getElementById("counterdivx").style.background = "red";
      document.getElementById("counterdivx").style.boxShadow = "0 0 2px #fff, " +
       "0 0 4px #fff, " +
       "0 0 6px #fff, " +
       "0 0 10px red, " +
       "0 0 45px red, " +
       "0 0 55px red, " +
       "0 0 70px red, " +
       "0 0 80px red";
    document.getElementById("counterdivo").style.background = "green";
    document.getElementById("counterdivo").style.boxShadow = "0 0 2px #fff, " +
     "0 0 4px #fff, " +
     "0 0 6px #fff, " +
     "0 0 10px green, " +
     "0 0 45px green, " +
     "0 0 55px green, " +
     "0 0 70px green, " +
     "0 0 80px green";
  }

  else if(countx === counto){
    document.getElementById("counterdivo").style.background = "#ff0095";
     document.getElementById("counterdivo").style.boxShadow = "0 0 2px #fff, " +
       "0 0 4px #fff, " +
       "0 0 6px #fff, " +
       "0 0 10px #ff0095, " +
       "0 0 45px #ff0095, " +
       "0 0 55px #ff0095, " +
       "0 0 70px #ff0095, " +
       "0 0 80px #ff0095";

    document.getElementById("counterdivx").style.background = "#ff0095";
     document.getElementById("counterdivx").style.boxShadow = "0 0 2px #fff, " +
       "0 0 4px #fff, " +
       "0 0 6px #fff, " +
       "0 0 10px #ff0095, " +
       "0 0 45px #ff0095, " +
       "0 0 55px #ff0095, " +
       "0 0 70px #ff0095, " +
       "0 0 80px #ff0095";
  }
  
}