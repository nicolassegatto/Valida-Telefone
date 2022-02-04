//VALIDADOR DE TELEFONES.

function VALIDADOR(telefone){

//trata variável removendo qualquer caráctere ou letras
//assim pode chegar variavel com () com letras, que vai extrari somente os numeros em sequencia para validação.
    telefone = telefone.toString();
    telefone = telefone.replace(/[^0-9]/g, '');
    

    return telefone
}

console.log(VALIDADOR("oi nicolas 996302407"))