const input1 = document.querySelector(".input");
let originText = document.querySelector(".text");
const container = document.querySelector(".container1")
var innertext = originText.value;



class item{
    constructor(itemname){
        // create the new dev
        this.createDiv(itemname);
    }
    createDiv(itemname){
        let input = document.createElement('input');
        input.value = itemname;
        input.type = "checkbox";
        input.className = "checkbox";
        input.name = "gender"
        

        let hr = document.createElement('hr');
        // hr.setAttribute("class","hr");

        let one = document.createElement('div');
        one.classList.add('one');
        // one.setAttribute("ondblclick","remove()");
        // one.setAttribute("onmouseover","show()");
        // one.setAttribute("onmouseout","hide()");
        
        let label = document.createElement('label');
        label.htmlFor = "checkbox";
        label.classList.add('lable');
        label.innerHTML = itemname;
        // creat svg
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "18");
        svg.setAttribute("height", "18");
        svg.setAttribute("class","del");
        svg.setAttribute("onclick","del()");
        // create svg shape
        const cross = document.createElementNS("http://www.w3.org/2000/svg", "path");
        cross.setAttribute("fill","#494C6B");
        cross.setAttribute("fill-rule","evenodd");
        cross.setAttribute("d","M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z");
        // append shape to svg
        svg.appendChild(cross);



        container.appendChild(one);
        one.appendChild(input);
        one.appendChild(label);
        one.appendChild(svg);
        container.appendChild(hr);

    }
}

function handle(e){
    if(e.keyCode === 13){
        e.preventDefault(); // Ensure it is only this code that runs
        let text = originText.value;
        let spacetext = " " + text;
        console.log(text);
        if (originText.value != "") {
            new item(spacetext);
            originText.value = ""; 
        }else {
            alert("the feild is empty");
        }
        
    }
}
document.addEventListener('DOMContentLoaded', function() {
    var checkboxes = document.querySelectorAll('input[type=checkbox][name=gender]');
   
    for (var checkbox of checkboxes) {
      checkbox.addEventListener('change', function(event) {
        if (event.target.checked) {
          alert(`${event.target.value} is checked`);
        } else {
          alert(`${event.target.value} is unchecked`);
        }
      });
    }
  }, false);
  
let moon = document.getElementsByClassName("moon");
let sun = document.getElementsByClassName("sun");
let icon = document.getElementsByClassName("icon");
let img = document.getElementsByClassName("img");
// let container1 = document.getElementsByClassName("container1");
console.log(moon);
console.log(sun);
console.log(icon);
console.log(container);
function toggle(){
  console.log("clicked");
  document.body.classList.toggle("dark-Theme");
  // if (document.body.classList.contains("dark-Theme")){
  //   img.src = "images/bg-desktop-dark.jpg";
  // }
}

let remove = document.querySelectorAll(".del");
console.log(remove);
let elems = document.querySelectorAll("one");
function del(){
  let fun =  remove.forEach(function (element,index,array) {
    console.log("elem "+ index + " in " + array.item(index) + " is " + element);
  });
  return fun;
}
