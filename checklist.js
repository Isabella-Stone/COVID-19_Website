function countChecks() {
   var input = document.getElementsByTagName("input"),
    count = 0;
    for (var i=0; i<input.length; i++) {       
       if (input[i].type == "checkbox" && input[i].checked == true){
          count++;
       }
    }
    alert("You have selected " + count + " symtpoms of COVID-19. Please refer to the resouces page on how to proceed.");
 }