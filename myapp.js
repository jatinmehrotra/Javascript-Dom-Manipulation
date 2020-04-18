
let element=document.getElementById('set');
let divele=document.getElementById('modify');

let optionsarray=document.getElementsByName('cssProperty');
element.addEventListener('click',userClickedSet);


function userClickedSet(){

  alert('you clicked');


console.log(optionsarray);

for(let i=0; i<optionsarray.length;i++){

  let value=optionsarray[i].value;
  let property=optionsarray[i].getAttribute('id');
  console.log(property,value);
  let divele=document.getElementById('modify');
  divele.style[property]=value;
}



}
