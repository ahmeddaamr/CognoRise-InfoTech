//HTML elements to be used
const currencyFrom = document.getElementById('currencyFrom');
const amountFrom = document.getElementById('amountFrom');
const currencyTo = document.getElementById('currencyTo');
const amountTo = document.getElementById('amountTo');

//filling 'from' select
currencies.forEach(element => {
    const option = document.createElement("option");
    option.value = element;
    option.text = ` ${element}  | ${currency_country[element]}`;
    currencyFrom.add(option);
});
//filling 'to' select
currencies.forEach(element => {
    const option = document.createElement("option");
    option.value = element;
    option.text = `${element}  | ${currency_country[element]}`;
    currencyTo.add(option);
});
//default values
currencyFrom.value = "USD";
currencyTo.value = "EGP";

//converting currency function
let convertCurrency = () =>{
    event.preventDefault(); // Prevent form from submitting
    const amountFrom = document.querySelector("#amountFrom").value;
    let from = currencyFrom.value; 
    let to = currencyTo.value;
    const exchangerate_api = `https://v6.exchangerate-api.com/v6/${apikey}/pair/${from}/${to}/${amountFrom}`

    if( amountFrom != 0)
    {
        fetch(exchangerate_api)
        .then(res => res.json())
        .then(
            data => {
            const amountToValue = data.conversion_result;
            amountTo.value = amountToValue;
        });
    }
    else    {
        alert("Please, Enter a valid amount!");
    }
    document.querySelector("#convert-button").addEventListener("click",convertCurrency)
    window.addEventListener("load",convertCurrency)  
}
//swapping 'from' with 'to'
const handleClick = ()=>{
    let tempAmount = amountFrom.value;
    let tempCurrency = currencyFrom.value;

    amountFrom.value = amountTo.value;
    currencyFrom.value = currencyTo.value;

    amountTo.value = tempAmount;
    currencyTo.value = tempCurrency;
}