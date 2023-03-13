
var val = 0;
document.getElementById("tbox").innerText = val;

function inc(){
   val+=1;
   document.getElementById("tbox").innerText = val;
}
function dec(){
    if(val > 0){
       val-=1;
       document.getElementById("tbox").innerText = val;
    }else{
        alert("Can't subtract below 0")
    }
}