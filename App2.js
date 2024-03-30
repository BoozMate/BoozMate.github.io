document.addEventListener("DOMContentLoaded", function() {

  var nulInput = document.getElementById('keuze0');

  if (localStorage.getItem('nul')) {
    nulInput.value = localStorage.getItem('nul');
  }
  var eenInput = document.getElementById('keuze1');

  if (localStorage.getItem('een')) {
    eenInput.value = localStorage.getItem('een');
  }
  
  var tweeInput = document.getElementById('keuze2');

  if (localStorage.getItem('twee')) {
    tweeInput.value = localStorage.getItem('twee');
  }

  var drieInput = document.getElementById('keuze3');

  if (localStorage.getItem('drie')) {
    drieInput.value = localStorage.getItem('drie');
  }

  var vierInput = document.getElementById('keuze4');

  if (localStorage.getItem('vier')) {
    vierInput.value = localStorage.getItem('vier');
  }

  var vijfInput = document.getElementById('keuze5');

  if (localStorage.getItem('vijf')) {
    vijfInput.value = localStorage.getItem('vijf');
  }

  var zesInput = document.getElementById('keuze6');

  if (localStorage.getItem('zes')) {
    zesInput.value = localStorage.getItem('zes');
  }

  var zevenInput = document.getElementById('keuze7');

  if (localStorage.getItem('zeven')) {
    zevenInput.value = localStorage.getItem('zeven');
  }

  var achtInput = document.getElementById('keuze8');

  if (localStorage.getItem('acht')) {
    achtInput.value = localStorage.getItem('acht');
  }

  var negenInput = document.getElementById('keuze9');

  if (localStorage.getItem('negen')) {
    negenInput.value = localStorage.getItem('negen');
  }

  var tienInput = document.getElementById('keuze10');

  if (localStorage.getItem('tien')) {
    tienInput.value = localStorage.getItem('tien');
  }

  var elfInput = document.getElementById('keuze11');

  if (localStorage.getItem('elf')) {
    elfInput.value = localStorage.getItem('elf');
  }

  var twaalfInput = document.getElementById('keuze12');

  if (localStorage.getItem('twaalf')) {
    twaalfInput.value = localStorage.getItem('twaalf');
  }

  var dertienInput = document.getElementById('keuze13');

  if (localStorage.getItem('dertien')) {
    dertienInput.value = localStorage.getItem('dertien');
  }

  document.getElementById('mijnFormulier').addEventListener('submit', function() {
   
    localStorage.setItem('nul', nulInput.value);
    localStorage.setItem('een', eenInput.value);
    localStorage.setItem('twee', tweeInput.value);
    localStorage.setItem('drie', drieInput.value);
    localStorage.setItem('vier', vierInput.value);
    localStorage.setItem('vijf', vijfInput.value);
    localStorage.setItem('zes', zesInput.value);
    localStorage.setItem('zeven', zevenInput.value);
    localStorage.setItem('acht', achtInput.value);
    localStorage.setItem('negen', negenInput.value);
    localStorage.setItem('tien', tienInput.value);
    localStorage.setItem('elf', elfInput.value);
    localStorage.setItem('twaalf', twaalfInput.value);
    localStorage.setItem('dertien', dertienInput.value);
  });
});

function geeks(msg, gfg) {
			var confirmBox = $("#container");
      var result = getRandomNumber(); 
  
       confirmBox.find(".message #uitkomst").html(result); 

			
			confirmBox.find(".message").text(msg);

			
			confirmBox.find(".yes").unbind().click(function()
			{
			confirmBox.hide();
			});
			confirmBox.find(".yes").click(gfg);
			confirmBox.show();

			confirmBox.find(".no").unbind().click(function()
			{
			confirmBox.hide();
			});
			confirmBox.find(".no").click(gfg);
			
}
    function getRandomNumber() {
      var number = Math.floor(Math.random() * 35  + 1);
      var result = '';
   
     

      var img = document.createElement('img');
      img.src = 'bom.png';
      img.classList.add('bomresult');
      
      if (number >= 1 && number < 3) {
        var input12 = document.getElementById("keuze12").value;
          if (input12.trim() === "") {
          result = 'Geef een slok weg.';
          }
             else {  result = input12;} 
       }
        
       else if (number >= 3 && number < 5) {
        var input11 = document.getElementById("keuze11").value;
          if (input11.trim() === "") {
          result = 'Neem een slok.';
        }
          else{ result = input11;} 
      }
         
      else if (number >= 5 && number < 13) {
        var input10 = document.getElementById("keuze10").value;
          if (input10.trim() === "") {result= document.body.appendChild(img);
            setTimeout(function() {
            window.location.href = 'pagina3.html'; }
            , 2500); 
              }
            else{  result = input10;} 
       }
      else if (number >= 13 && number < 15) {
        var input9 = document.getElementById("keuze9").value;
          if (input9.trim() === "") {
            result = 'Veilig';
              }
             else{ result = input9;} 
       }
      else if (number >= 15 && number < 17) {
        var input8 = document.getElementById("keuze8").value;
           if (input8.trim() === "") {
              result = 'Doe een korte imitatie van een vriend in de groep: Als het niet wordt herkend, neem je een slok.';
                } 
                else{ result = input8;} 
       }
      else if (number >= 17 && number < 19) {
        var input7 = document.getElementById("keuze7").value;
            if (input7.trim() === "") {
                result = 'Een medespeler zet een lied op die jij moet raden, fout is atje';
                } 
                  else {
                   result = input7;} 
       }
      else if (number >= 19 && number < 21) {
        var input6 = document.getElementById("keuze6").value;
                  if (input6.trim() === "") {
                  result = 'Zoek in whatsapp een woord op een laat het aan de rest van de groep zien: de rest mag bepalen welk woord';
                } 
                  else {
                   result = input6;} 
                 }
      else if (number >= 21 && number < 23) {
        var input5 = document.getElementById("keuze5").value;
          if (input5.trim() === "") {
            result = 'Speel een rondje Ik heb nog nooit...: Iedereen die het wel heeft gedaan, moet drinken.';
               } 
               else {
                 result = input5;} 
       }
      else if (number >= 23 && number < 25) {
        var input4 = document.getElementById("keuze4").value;
           if (input4.trim() === "") {
             result = 'Laat degene die rechts van je zit, een bericht naar iemand sturen op jouw telefoon';
                } 
                 else {
                   result = input4;} 
        }
      else if (number >= 25 && number < 27) {
        var input3 = document.getElementById("keuze3").value;
          if (input3.trim() === "") {
             result = 'Doe een wedstrijdje wie als eerste een glas leeg heeft met iemand van jouw keuze';
                } 
                  else { result = input3;} 
        }
      else if (number >= 27 && number < 29) {
         var input2 = document.getElementById("keuze2").value;
           if (input2.trim() === "") {
             result = 'Potje vingeren, verliezer moet een shotje nemen';
                } 
                  else { result = input2;} 
        }
      else if (number >= 29 && number < 31) {
        var input1 = document.getElementById("keuze1").value;
          if (input1.trim() === "") {
            result = 'Wat is het meest wanhopige ding dat je ooit gedaan hebt om te scoren?';
                } 
                 else { result = input1;}
        } 
      else if (number >= 31 && number < 33) {
         var input1 = document.getElementById("keuze13").value;
            if (input1.trim() === "") {
               result = 'Wissel van shirts met de medespeler tegenover je. ';
                  } 
                else {result = input1;} 
        }
       else {
         var input0 = document.getElementById("keuze0").value;
           if (input0.trim() === "") {
               result = 'Deel een atje uit';
                 } 
               else { result = input0;} 
       }
      
return result; }

function vervangKnop(element) {

    var nieuweKnop = document.createElement("button");
    nieuweKnop.className = "mijnenknop2"; 

  nieuweKnop.innerHTML = 'X';


    nieuweKnop.onclick = function() {

    };


    element.parentNode.replaceChild(nieuweKnop, element);
}
