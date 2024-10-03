// const baseURL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
// const baseURL="https://api.exchangerate.host/latest";
const dropdownS= document.querySelectorAll(".dropdown select");
const button=document.querySelector("button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msgDiv=document.querySelector('.msg');


// import countryList from './Countrycodes.js';
for (let select of dropdownS){
    for ( let codeC in countryList){
        let newoption = document.createElement("option");
        newoption.innerText = codeC  ;    
        newoption.value=codeC  ;    
        if(select.name==="from" && codeC==="USD"){
            newoption.selected="selected";
        }

        else  if(select.name==="to" && codeC==="PKR"){
            newoption.selected="selected";
        }
        select.append(newoption);
    }

    select.addEventListener('change', (evt)=>{
updateflag(evt.target);
    })
}

const updateflag= (element)=>{
let currCode = element.value;
let countryCode = countryList[currCode];
let newsrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
let img= element.parentElement.querySelector('img');
img.src=newsrc;
}

button.addEventListener('click',async (evt)=>{
evt.preventDefault();
let amount = document.querySelector('form input');
let amtV= parseFloat(amount.value);  //for conversion in float points
if(amtV==="" || amtV<=0){
    amtV=1;
    amount.value="1";
}

const fromCurrency = fromCurr.value.toUpperCase();
    const toCurrency = toCurr.value.toUpperCase();

    // Check if both currencies exist in rates
    if (!rates[fromCurrency] || !rates[toCurrency]) {
        msgDiv.innerText = "Selected currencies are not supported.";
        return;
    }

    // Perform the conversion
    // Formula: (Amount / Rate of From Currency) * Rate of To Currency
    const convertedAmount = ((amtV / rates[fromCurrency]) * rates[toCurrency]).toFixed(2);

    // Display the result
    msgDiv.innerText = `${amtV} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
});
// })



// // console.log(amtV) 
// // console.log(fromCurr.value, toCurr.value);
// const URL= `${baseURL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
// // const URL = `${baseURL}?base=${encodeURIComponent(fromCurrency)}&symbols=${encodeURIComponent(toCurrency)}`;

// let responce = await fetch(URL);
// let data=await responce.json();
// console.log(data);

// // const URL = `${baseURL}/${toCurr.value.toLowerCase()}.json`;
// //    let response = await fetch(URL);
// //    let data= await response.json();
// //   console.log(data);

