const generate =  document.querySelector('#generate');
const errorText = document.querySelector('#error');


function getPassword(){
    const password = document.querySelector('#enterPass');
    console.log(password.value);
    return password.value;
}

function encode(data){
    let fullData =[];
    // let output = [];
    for(let i=0; i<data.length; i++){
        let charEncode = data.charCodeAt(i);
        console.log(charEncode);
        fullData.push(charEncode);
    }
    let newFullData = fullData.map(data => (data / 2) + 3 +(data / 3) * 1.5);
    let recoverFullData = newFullData.map(data => (data * 2) - 18);
    let numToString = newFullData.map(data => String.fromCharCode(data));
    let output = numToString.join('')

    
    // output.push(String.fromCharCode(newFullData));
    console.log(fullData)
    console.log(newFullData)
    console.log(output)
    return output;
}

function encodeResult(data){
    const result =  document.querySelector('#result');
    result.value = data;
}

function decodeResult(data){
    String.fromCharCode(data);
    console.log(data);
}

function finalData(){
    let password = getPassword();
    let encodedData = encode(password);
    encodeResult(encodedData);
}

let text = String.fromCharCode(68, 61, 66, 61, 57, 63);
console.log(text);




generate.addEventListener('click', finalData);
