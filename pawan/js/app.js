const BASE_URL="https://open.er-api.com/v6/latest/";
const URLGP="https://api.geoapify.com/v1/geocode/reverse?lat=";
const URLGPEND="&format=json&apiKey=1dd9a6f93ed84e23b31ded3aad85e7c1";
//const URLGP="https://api.geoapify.com/v1/geocode/reverse?lat=52.51894887928074&lon=13.409808180753316&format=json&apiKey=YOUR_API_KEY";

const dropdown=document.querySelectorAll(".dropdown select");

const  btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");
const time=document.querySelector(".container-weather h1");
const  btn1=document.querySelector(".container-weather button");

function  myFunction() {
const now = new Date();

// Display the time in the #time element
document.getElementById("time").innerHTML = `Time : ${now.toLocaleTimeString()}`;

// Display the date in the #date element
document.getElementById("date").innerHTML =`Date : ${now.toLocaleDateString()}`;

// Display the time zone in the #zone element
 
  }
  
  


for(let select of dropdown){
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name=="from" && currCode=="USD"){
            newOption.selected="selected";
        } else if(select.name=="to" && currCode=="INR"){
            newOption.selected="selected";
        }

        select.append(newOption);
    }

    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}

const updateFlag=(element)=>{
    let currCode=element.value;
    let countyCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countyCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
}

btn.addEventListener("click", async(evt) => {
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amtval=amount.value;
    if(amtval == 0 || amtval<0){
        amount.value =1;
    }

    const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}`;
    // ${toCurr.value.toLowerCase()}.json`; 
    let response=await fetch(URL);
  
    let data=await response.json();
    let rate=data.rates[toCurr.value.toUpperCase()];
 
    let finalAmount=amtval * rate;
    msg.innerText=`${amtval} ${fromCurr.value} =  ${finalAmount} ${toCurr.value}`;
});


// fetch(`https://open.er-api.com/v6/latest/${from}`)
//     .then(response => response.json())
//     .then((data) => {
//         const amountX = amount.value;
//         const to = toCurrency.value;
//         const rate = data.rates[to];
let lat;
let lon;
navigator.geolocation.getCurrentPosition(function(position) {
    // The location is successfully detected.
    lat=position.coords.latitude; // the latitude
    lon=position.coords.longitude; // the longitude

    console.log(lat);
    console.log(lon);
    // the accuracy
  }, function(error) {
    // An error occurred while detecting the location.
    console.log(error);
  });

btn1.addEventListener("click", async (evt) =>{
    evt.preventDefault();
    const URL_GEO=`${URLGP}${lat}&lon=${lon}${URLGPEND}`;
    
    let response= await fetch(URL_GEO);
    let data= await response.json();
    
    const detailsArr = data.results[0];
    document.getElementById("state").innerHTML =`State : ${detailsArr.state}`;
    document.getElementById("country").innerHTML =`Country : ${detailsArr.country}`;
    document.getElementById("city").innerHTML =`City : ${detailsArr.city}`;
    document.getElementById("postcode").innerHTML =`Postal Code : ${detailsArr.postcode}`;
    document.getElementById("street").innerHTML =`Street : ${detailsArr.street}`;
    document.getElementById("state_district").innerHTML =`District State : ${detailsArr.state_district}`;
  });
  

  setInterval(myFunction, 500);
//   setInterval(getGeoData, 5000);

// fetch("https://api.geoapify.com/v1/geocode/reverse?lat=52.51894887928074&lon=13.409808180753316&format=json&apiKey=YOUR_API_KEY")
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

 

 

            