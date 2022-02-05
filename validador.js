/*
VALIDADOR DE TELEFONES.
___________________________________
Possibilidades

FIXO
se começar com 0 corta 3, sobra 8
se não começar com 0 corta 2, sobra 8


CEL
com 9
se começar com 0, corta 3, sobra 9
se não começar com 0, corta 2, sobra 9


sem 9
se começar com 0, corta 3, sobra 8 (começa com 6, 7, 8 ou 9)
se não começar com 0, corta 2, sobra 8 começa com (começa com 6, 7, 8 ou 9)


celulares podem começar com:
6,7,8,9
qualquer coisa diferente disso é fixo:
1,2,3,4,5
______________________________________
*/

function VALIDADOR(telefone) {
    //seta nosso objeto de informações
    let DADOS = {}
    //seta lista de DDD.
    let DDDBrasil = [11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99]

    //trata variável removendo qualquer caráctere ou letras
    //assim pode chegar variavel com () com letras, que vai extrari somente os numeros em sequencia para validação.
    DADOS["NUMERO"] = telefone.toString();
    DADOS["NUMERO"] = DADOS["NUMERO"].replace(/[^0-9]/g, '');

    //Função que analiza se o telefone Inicia com 0 ou não e se em ambas situações o ddd é existente na lista de ddd Brasileira.
    //Padroniza o numero sem o 0 a frente
    //retorna True ou False
    function retornoDDD(telefone, DDDBrasil) {
        if (telefone.slice(0, 1) == 0) {
            DADOS["NUMERO"] = DADOS["NUMERO"].slice(1,DADOS["NUMERO"].length)
            return DDDBrasil.some(DDD => DDD == telefone.slice(0, 3))
        } else {
            return DDDBrasil.some(DDD => DDD == telefone.slice(0, 2))
        }
    }

    //inicio da validação (se o retorno da função for true ele cai na primeira condição senão ele cai apos o else)
    if (retornoDDD(DADOS["NUMERO"], DDDBrasil)) {
        console.log("retorno true " + DADOS["NUMERO"])
    } else {
        console.log("retorno false " + DADOS["NUMERO"])
    }


    return DADOS
}

console.log(VALIDADOR("oi nicolas 0034996302403"))