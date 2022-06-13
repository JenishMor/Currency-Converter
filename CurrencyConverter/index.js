console.log("This is js file of currency converter project");

let currency = document.querySelectorAll('.currency');
// console.log(unit);
let btn = document.getElementById('btn');
let num = document.getElementById('num');
let ans = document.getElementById('ans');

let url = 'https://api.frankfurter.app/currencies';

fetch(url).then((response) => {
    return response.json();
}).then((data) => {
    // console.log(data);
    show(data);
})

function show(data) {
    const obj = Object.entries(data);       //This is method to convert object in an array
    // console.log(obj);
    // console.log(obj.length);
    // console.log(obj[0][1]);
    for (const key in obj) {
        const element = obj[key];
        // console.log(element[1]);
        currency[0].innerHTML += `<option value="${element[0]}">${element[0]}</option>`;
        currency[1].innerHTML += `<option value="${element[0]}">${element[0]}</option>`;
    }
}

btn.addEventListener('click', ()=>{
    let curr1 = currency[0].value;
    let curr2 = currency[1].value;
    let value = num.value;
    if (curr1 == curr2) {
        alert('Please choose different currency');
    }
    else{
        convert(curr1, curr2, value);
    }
})

function convert(curr1, curr2, value){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${value}&from=${curr1}&to=${curr2}`).then((responce)=>{
        return responce.json();
    }).then((data)=>{
        let obj2 = Object.values(data.rates);
        // console.log(obj2[0]);
        ans.value = `${obj2[0]}`;
    })
}