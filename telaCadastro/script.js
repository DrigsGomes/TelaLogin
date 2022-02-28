let btn = document.querySelector("#verSenha");

verSenha.addEventListener('click', () => {
    let inputSenha = document.querySelector("#senha");

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type' , 'password');

    }


});

let btn = document.querySelector("#confirmeSenha");

confirmeSenha.addEventListener('click', () => {
    let inputSenha = document.querySelector("#senha");

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type' , 'password');

    }


});