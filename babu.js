"use strict"

var button=document.getElementById("BTN");
var namelist=document.getElementById("name-list")


button.addEventListener("click",()=>{
    var li = document.createElement("li");
    
    var li1=document.createElement("li");
    // namelist.cloneNode()
    
    var input1=document.getElementById("inpt1");
    var input2=document.getElementById("inpt2");
    var t=document.createTextNode(input1.value);
    var t1=document.createTextNode(input2.value);
     

    
    var invalid=document.getElementById("invalid")
    var invalid2=document.getElementById("invalid2")

    if(input1.value == ""){
         invalid.style.display="block";
         
        }
     else{
         invalid.style.display="none";}
               
    if(input2.value == ""){
        invalid2.style.display="block";
    }
     else{
        invalid2.style.display="none";}  
        
        input1.value=""
        input2.value=""


      namelist.append(li,li1)
      li.appendChild(t);
      li1.appendChild(t1)

    
  
     var span = document.createElement("SPAN");
      span.id="span"
      li1.append(span)
     var icon=document.createElement("img")
    

    //  var txt = document.createTextNode("");
    //         span.className = "close";
    //             span.appendChild(txt);
    //             li.appendChild(span);           









})

















// button.addEventListener("click",()=>{
//     if(input1.value==""){
//         invalid.style.display="block";

//     }
//     else{
//         invalid.style.display="none";
//     }
//     if(input2.value==""){
//         invalid2.style.display="block";

//     }
//     else{
//         invalid.style.display="none";
//     }
// })