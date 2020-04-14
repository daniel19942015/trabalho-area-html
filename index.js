(async function(){
    carregaMenu();
    selecionaOpcao(escolheOpcao);
})();

function carregaMenu(){
    var btnMenu = document.getElementById('btn-menu');
    var menu = document.getElementsByTagName('nav')[0];
    var count = 0;
    btnMenu.addEventListener('click', function(e){
        if(e.type === "click"){
            count++;
            if(count === 1){
                menu.style.display = 'block';
            }else if(count > 1) {
                count = 0;
                menu.style.display = 'none';
            }
        }
    })
}

function selecionaOpcao(callback){
    var selecao = document.getElementsByTagName('li');
    for(let i = 0; i < selecao.length; i++){
        selecao[i].addEventListener('click', function(e){
            callback(e.target.innerText);
        })
    }
}

function escolheOpcao(opcao){
    console.log(opcao)
}