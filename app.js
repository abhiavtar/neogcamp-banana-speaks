
var btnTranslate = document.querySelector('#btn-Translate');
var txtInput = document.querySelector('#text-input')





function clickHandeler(){
    console.log("clicked");
    console.log('input', txtInput.value)

}


btnTranslate.addEventListener("click", clickHandeler)
   