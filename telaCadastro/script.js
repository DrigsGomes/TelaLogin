let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');

let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');

let confirmSenha = document.querySelector('#confirmSenha');
let labelConfirmSenha = document.querySelector('#labelConfirmSenha');

let verSenha = document.querySelector("#verSenha");
let btnConfirm = document.querySelector("#verConfirmSenha");


nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){
        
        labelNome.setAttribute('style', 'color:red')
        labelNome.innerHTML = 'Nome *Insirano no minimo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        

    } else{
        labelNome.setAttribute('style', 'color:green')
        labelNome.innerHTML= ('Nome')
        nome.setAttribute('style', 'border-color:green')
        

    }

})

usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 4){
        
        labelUsuario.setAttribute('style', 'color:red')
        labelUsuario.innerHTML = 'Usuario *Insirano no minimo 5 caracteres'
        usuario.setAttribute('style', 'border-color: red')
        

    } else{
        labelUsuario.setAttribute('style', 'color:green')
        labelUsuario.innerHTML= ('Usuario')
        usuario.setAttribute('style', 'border-color:green')
        

    }

})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5){
        
        labelSenha.setAttribute('style', 'color:red')
        labelSenha.innerHTML = 'Senha *Insirano no minimo 6 caracteres'
        senha.setAttribute('style', 'border-color: red')
        

    } else{
        labelSenha.setAttribute('style', 'color:green')
        labelSenha.innerHTML= ('Senha')
        senha.setAttribute('style', 'border-color:green')
        

    }

})

confirmSenha.addEventListener('keyup', () => {
    if(senha.value != confirmSenha.value){
        
        labelConfirmSenha.setAttribute('style', 'color:red')
        lablabelConfirmSenhaelSenha.innerHTML = 'Confirmar senha *As senhas não conferem'
        confirmSenha.setAttribute('style', 'border-color: red')
        

    } else{
        labelConfirmSenha.setAttribute('style', 'color:green')
        labelConfirmSenha.innerHTML= ('Confirmar senha')
        confirmSenha.setAttribute('style', 'border-color:green')
        

    }

})



function cadastrar (){

};


verSenha.addEventListener('click', () => {
    let inputSenha = document.querySelector("#senha");

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type' , 'password');

    }


});


btnConfirm.addEventListener('click', () => {
    let inputConfirmeSenha = document.querySelector("#confirmSenha");

    if(inputConfirmeSenha.getAttribute('type') == 'password'){
        inputConfirmeSenha.setAttribute('type', 'text')
    }else{
        inputConfirmeSenha.setAttribute('type' , 'password');

    }

});