
var btnTranslate = document.querySelector('#btn-Translate');
var txtInput = document.querySelector('#text-input');
var outputDiv = document.querySelector('.output');





function clickHandeler(){
  outputDiv.innerText = 'ASDGFGJAFD ' + txtInput.value;
}


btnTranslate.addEventListener("click", clickHandeler)
   

