(function(){
    const generate =  document.querySelector('#generate');
    const errorText = document.querySelector('#error');
    const password = document.querySelector('#enterPass');

    function encode(data){
        let fullData =[];
        for(let i=0; i<data.length; i++){
            let charEncode = data.charCodeAt(i);
            fullData.push(charEncode);
        }

        let newFullData = fullData.map(data => (data / 3) + 6);
        let recoverFullData = newFullData.map(data => (data * 2) - 18);
        let numToString = newFullData.map(data => String.fromCharCode(data));
        let output = numToString.join('');
        return output;
    }

    function encodeResult(data){
        const result =  document.querySelector('#result');
        result.value = data;
    }

    function finalData(){
        if(password.value < 1){
            errorText.innerText = 'Type Something ';
        }
        else{
            let encodedData = encode(password.value);
            encodeResult(encodedData);
            errorText.innerText = '';
        }
    }

    generate.addEventListener('click', finalData);
})()
