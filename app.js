/**
 * Simulador dos operadores logicos AND - OR - NOT
 * @author Luiz Damas Amorim  
 */

let recive //Armazena o parâmetro(valor) recebido do HTML

//  As variáveis abaixo são usadas para idêntificar se o interruptor esta ligado ou desligado (false = desligado | true = ligado)
let sw1 = false
let sw2 = false

// A Váriavel abaixo e usada para identificar de a lâmpada está quebrada 
let broken = false

function sw(recive) {
    // console.log(recive) // Apoio a lógica 

    // Logica para os interruptores
    if (recive === 1 && sw1 === false) {
        document.getElementById('sw1').src = "img/swon.png"
        sw1 = true
    }

    else if (recive === 1 && sw1 === true) {
        document.getElementById('sw1').src = "img/swoff.png"
        sw1 = false
    }
    else if (recive === 2 && sw2 === false) {
        document.getElementById('sw2').src = "img/swon.png"
        sw2 = true
    }
    else if (recive === 2 && sw2 === true) {
        document.getElementById('sw2').src = "img/swoff.png"
        sw2 = false
    }

    // Lógica para qubrar a lâmpada
    if (recive === 3) {
        // A linha abaixo cria um objeto usando a classe Audio
        let som = new Audio()
        console.log(typeof (som))
        som.src = "sound/glassbreaking.wav"
        som.play()

        // trocar a imagem (manipulação do DOM)
        document.getElementById('lamp').src = "img/broken.jpg"
        broken = true
    }

    // Lógica para o operador AND
    if (broken !== true) {
        if (sw1 === true && sw2 === true) {
            document.getElementById('lamp').src = "img/on.jpg"
        } 
        else {
            document.getElementById('lamp').src = "img/off.jpg"
        }
    } 
}