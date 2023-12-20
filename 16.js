function count(number,callback){
  var element = document.getElementById('output');
if(number>=1){
  element.innerHTML=number;
  setTimeout(function(){count(number-1,callback);},1000);
}else{
  callback();
}

}
function display(){
  var element=document.getElementById("output");
  element.innerHTML="Happy Independence Day!";

}
count(10,display);









  


