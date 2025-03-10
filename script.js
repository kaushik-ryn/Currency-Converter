const BASE_URL = "https://v6.exchangerate-api.com/v6/fc9df042cc0c0f84bb2df32e/latest/USD";

const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");

let dropdowns = document.querySelectorAll(".dropdown select");

for(let element of dropdowns){
    for(let code in countryList){
let newoption = document.createElement("option");
newoption.value = code;
newoption.innerText = code;

if(element.name === "to" && code === "INR"){
    newoption.selected = "selected";
}
else if(element.name === "from" && code === "USD"){
    newoption.selected = "selected";
}
element.append(newoption);
   }

}

let selectone = document.getElementById("one");
let option = document.getElementsByTagName("option");
let selectedfrom;
selectone.addEventListener("change", (event) =>{
    selectedfrom = event.target.value;
    let selectedcountry = countryList[selectedfrom];
   let newsrc= `https://flagsapi.com/${selectedcountry}/flat/64.png`;
   let img = document.querySelector(".from img");
   img.src = newsrc;
});

let selecttwo = document.getElementById("two");
let selectedto;
selecttwo.addEventListener("change", (event) =>{
    selectedto = event.target.value;
    let selectedcountry = countryList[selectedto];
    let newsrc= `https://flagsapi.com/${selectedcountry}/flat/64.png`;
   let img = document.querySelector(".to img");
   img.src = newsrc;
});


let btn = document.getElementById("btn");
let res = document.getElementById("result");
btn.addEventListener("click", (event) =>{
  let amt = document.querySelector(".form input");
  let amtval = amt.value;
  if(amtval == "" || amtval<1){
    amtval = 1;
    amt.value = 1;
  }
  getexchange(amtval);
})

const getexchange = async (amt) =>{
  let URL = `https://v6.exchangerate-api.com/v6/fc9df042cc0c0f84bb2df32e/latest/${fromcurr.value}`;
  let response = await fetch(URL);
  let data = await response.json();
  let result = data.conversion_rates[tocurr.value];

  res.innerText = `${amt} ${fromcurr.value} = ${result*amt} ${tocurr.value}`;
  
}


let form = document.querySelector(".form");
let theme = document.querySelector("p i")
let body = document.querySelector("body");
let count = 1;
theme.addEventListener("click", (event) =>{
  if(count%2!=0){
  body.style.backgroundColor = "rgb(54 61 74)";
  btn.style.backgroundColor = "rgb(42 53 74)";
  document.getElementById("heading").style.color = "rgb(42 53 74)";
document.querySelector(".form input").style.outline = "0.5px solid rgb(42 53 74)"
body.style.backgroundImage = "url('https://wallpapers.com/images/featured/pinterest-laptop-6pkn5gdey3vn194a.jpg')";

  }
  else if(count%2==0){
 body.style.backgroundImage = "none"
    body.style.backgroundColor = "rgb(237 108 64)";
    btn.style.backgroundColor = "rgb(190 30 30)";
    document.getElementById("heading").style.color = "rgb(190 30 30)";
    document.querySelector(".form input").style.outline = "0.5px solid rgb(190 30 30)"
  }
  count++;
})



