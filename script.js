//A Função abaixo ela reivindica um parametro que vai ser os dados a serem clicados, e por meio deste, obtemos
//comandos de inserção de dados que é feita pela innerhtml através da reivindicaçaõ do result
function insertData(number){
    var SavedNumber = document.getElementById('result').innerHTML;
    SavedNumber = document.getElementById('result').innerHTML = SavedNumber + number;
}