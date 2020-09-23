let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/cartola.png') {
        minhaImagem.setAttribute ('src','imagens/cartola2.png');
    } else {
        minhaImagem.setAttribute ('src','imagens/cartola.png');
    }
}
let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');
function defimeNomedeUsuario(){
    let meuNome = prompt('Por favor, digite seu nome.');
    if(!meuNome || meuNome === null){
        defimeNomedeUsuario();
    }else {
    localStorage.setItem('nome',meuNome);
    meuCabecalho.textContent = 'Use uma cartola ' +meuNome;
    }
}
if(!localStorage.getItem('nome')){
    defimeNomedeUsuario();
} else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Use uma cartola ' + nomeGuardado;
}
meuBotao.onclick = function(){ defimeNomedeUsuario();
}