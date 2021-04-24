  
function ev(){
     
    var pre1=parseInt(document.getElementById("pri").value); 
    var res1=0;
      
    var pre2=parseInt(document.getElementById("seg").value); 
    var res2=0;
    
    var pre3=parseInt(document.getElementById("ter").value); 
    var res3=0;

    var pre4=parseInt(document.getElementById("cuar").value); 
    var res4=0;

    var pre5=parseInt(document.getElementById("quin").value); 
    var res5=0; 

    var pre6=parseInt(document.getElementById("ses").value); 
    var res6=0;

    var pre7=parseInt(document.getElementById("set").value); 
    var res7=0;

    
    var pre8=parseInt(document.getElementById("octa").value); 
    var res8=0;

    var pre9=parseInt(document.getElementById("nov").value); 
    var res9=0;

    var pre10=parseInt(document.getElementById("deci").value); 
    var res10=0;

    
       if(pre1==3){   
        res1=1;
       }else{
        res1=0      
       }
       if(pre2==2){   
        res2=1;
       }else{
        res2=0      
       }
       if(pre3==2){   
        res3=1;
       }else{
        res3=0      
       }
       if(pre4==2){   
        res4=1;
       }else{
        res4=0      
       }
       if(pre5==1){   
        res5=1;
       }else{
        res5=0      
       }
       if(pre6==2){   
        res6=1;
       }else{
        res6=0      
       }
       if(pre7==1){   
        res7=1;
       }else{
        res7=0      
       }
       if(pre8==3){   
        res8=1;
       }else{
        res8=0      
       }
       if(pre9==2){   
        res9=1;
       }else{
        res9=0      
       }
       if(pre10==1){   
        res10=1;
       }else{
        res10=0      
       }  

    var total=res1+res2+res3+res4+res5+res6+res7+res8+res9+res10;
    document.getElementById('aqui').innerText=total
}

function color(){
    var pre1=parseInt(document.getElementById("pri").value); 
    var pre2=parseInt(document.getElementById("seg").value); 
    var pre3=parseInt(document.getElementById("ter").value); 
   var pre4=parseInt(document.getElementById("cuar").value); 
   var pre5=parseInt(document.getElementById("quin").value);
   var pre6=parseInt(document.getElementById("ses").value);  
   var pre7=parseInt(document.getElementById("set").value); 
   var pre8=parseInt(document.getElementById("octa").value); 
   var pre9=parseInt(document.getElementById("nov").value); 
   var pre10=parseInt(document.getElementById("deci").value); 
  
    if(pre1==3){   
        document.getElementById("btn").style.backgroundColor= "green";
       }else{
        document.getElementById("btn").style.backgroundColor= "red";
       }
       
       if(pre2==2){   
        document.getElementById("btn2").style.backgroundColor= "green";
    }else{
     document.getElementById("btn2").style.backgroundColor= "red"; 
       }
       if(pre3==2){   
        document.getElementById("btn3").style.backgroundColor= "green";
    }else{
     document.getElementById("btn3").style.backgroundColor= "red";     
       }
       if(pre4==2){   
        document.getElementById("btn4").style.backgroundColor= "green";
    }else{
     document.getElementById("btn4").style.backgroundColor= "red";
       }
       if(pre5==1){   
        document.getElementById("btn5").style.backgroundColor= "green";
    }else{
     document.getElementById("btn5").style.backgroundColor= "red";
       }
       if(pre6==2){   
        document.getElementById("btn6").style.backgroundColor= "green";
    }else{
     document.getElementById("btn6").style.backgroundColor= "red";
       }
       if(pre7==1){   
        document.getElementById("btn7").style.backgroundColor= "green";
    }else{
     document.getElementById("btn7").style.backgroundColor= "red";     
       }
       if(pre8==3){   
        document.getElementById("btn8").style.backgroundColor= "green";
    }else{
     document.getElementById("btn8").style.backgroundColor= "red";
       }
       if(pre9==2){   
        document.getElementById("btn9").style.backgroundColor= "green";
       }else{
        document.getElementById("btn9").style.backgroundColor= "red"; 
       }
       if(pre10==1){   
        document.getElementById("btn10").style.backgroundColor= "green";
       }else{
        document.getElementById("btn10").style.backgroundColor= "red";
       }  
}

function entrar(){
  
  var usu=document.getElementById("usu").value; 
  var con=document.getElementById("con").value; 
if(usu=="admin" && con==1234){
alert("adelnte");
window.location="/index.html"


}else{
  alert("datos incorrectos");
}


}