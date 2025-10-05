import React from "react";
import ReactDOM from "react-dom";
import CardObject from "./card";
import Sidebar from "./drawer";

var rawtarget = document.getElementById("data_target").value
console.log(rawtarget)
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
	  <a class="MuiCard-root" href="https://replit.com/@KenzoStaelens/networking-config-commands" target="_blank">go to replit config panel</a>
      <br/><br/>
    <Sidebar raw={rawtarget}/>
    <CardObject raw={rawtarget}/>
  </React.StrictMode>,
  rootElement
);

var a = document.getElementsByClassName("trashclass");
var b = document.getElementsByClassName("card");

var pres = document.getElementsByTagName("pre")
for (var i = 0; i < a.length; i++) {
  //first element of vlan gets skipped?
  a[i].innerHTML = a[i].innerText;
}

for (var j = 0; j < b.length; j++) {
  try {
    if (b[j].children[1].children[1].innerText === "") {
      //delete code block if no code
      b[j].children[1].children[1].remove();
    }
    if (b[j].children[1].innerText === "") {
      //delete if no notes or code
      b[j].children[1].remove();
    }
  } catch (e) {}
}

var c = document.querySelectorAll(".flag.card");
for(var k=0;k<c.length;k++){
	let dat = eval(c[k].dataset.dataset)
	c[k].children[0].onclick=()=>{
		console.log(dat)
		navigator.clipboard.writeText(dat)
		
	}
}

for(var l=0;l<pres.length;l++){
	pres[l].innerHTML = pres[l].innerText
	//console.log(pres[l].innerText)
}