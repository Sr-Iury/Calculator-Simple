//A Função abaixo ela reivindica um parametro que vai ser os dados a serem clicados, e por meio deste, obtemos
//comandos de inserção de dados que é feita pela innerhtml através da reivindicaçaõ do result
function insertData(number){
    let SavedNumber = document.getElementById('result').innerHTML;
    SavedNumber = document.getElementById('result').innerHTML = SavedNumber + number;
}

function clearField(){
    document.getElementById('result').innerHTML = ""
}

function deletedata() {
    let resultfinish = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultfinish.substring(0, resultfinish.length - 1);
}

function calculate (){
    let result = document.getElementById('result').innerHTML;
    if(result)
    {
        document.getElementById('result').innerHTML = eval(result);
    }
    else{
        alert("Insira um número válido para ser calculado, o campo está vazio.");
    }
}

