var refresh;
var i=0;
var j=0;
var k=0;


// start
function myFunction(){
   refresh=setInterval(function(){
       if(i<100){
        document.getElementById("ms").innerHTML=i;
        i++;
       }
       else{
            i=0;
            j++;
            if(j<60){
                document.getElementById("s").innerHTML=j;
            }
            else{
                j=0;
                k++;
                document.getElementById("m").innerHTML=k;
            }

    }
   }, 100);

   document.getElementById("time-color").style.color="blue";
}
function reset(){
   
    document.getElementById("m").innerHTML=00;
    document.getElementById("s").innerHTML=00;
    document.getElementById("ms").innerHTML=00;
    clearInterval(refresh);
    document.getElementById("time-color").style.color="black";
    
}
function pause(){
    clearInterval(refresh);
    document.getElementById("time-color").style.color="red";
}
