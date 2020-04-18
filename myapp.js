
let element = document.getElementById('set');
let divele = document.getElementById('modify');
let optionsarray = document.getElementsByName('cssProperty');
let alertobj={};

element.addEventListener('click', userClickedSet);


function userClickedSet() {


  for (let i = 0; i < optionsarray.length; i++) {

    let value = optionsarray[i].value;
    let property = optionsarray[i].getAttribute('id');
    console.log(property, value);

    alertobj[property]=value;

    divele.style[property] = value;

  }

alert("You selected background: "+alertobj.background+",width: "+alertobj.width+ ",height: "+alertobj.height);

}
