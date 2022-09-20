const generate =  document.querySelector('#generate');
const errorText = document.querySelector('#error');


function getPassword(){
    const password = document.querySelector('#enterPass');
    console.log(password.value);
    return password.value;
}

function encode(data){
    let dataLength = data.length;
    let fullData =[];
    for(let i=0; i<dataLength; i++){
        let charEncode = data.charCodeAt(i);
        console.log(charEncode);
        fullData.push(charEncode);
    }
    let newFullData = fullData.map(data => (data / 2) + 9);
    let recoverFullData = newFullData.map(data => (data * 2) - 18);

    let output = String.fromCharCode(newFullData);
    // console.log('data =>',fullData );
    // console.log('new data =>',newFullData );
    // console.log('recover data =>',recoverFullData );
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
