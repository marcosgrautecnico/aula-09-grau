function somar() {
        var num1 = document.getElementById("n1").value;
        var num2 = document.getElementById("n2").value;
        var resultado = document.getElementById("res");
        num1 = Number(num1)
        num2 = Number(num2)
        resu = num1 + num2
        resultado.innerHTML = (`o resultado da soma entre ${num1} + ${mum2} é igual a: ${resu}`)
// Divisão do codigo AULA 09 REVISÃO
        var nome = window.prompt(`qual seu nome ?`)
        document.write(`ola $(nome)). Seu nome tem ${nome.length} letras <br> `)

        document.write(`seu nome maiusculo é ${nome.toUpperCase()}<br>`)
        document.write(`seu nome minusculo é ${nome.toUpperCase()}<br>`)
        // organizar numeros
        var n1 = 21.98563
        window.alert(n1.toFixed(2)).replace(`.`,`,`)
        n1.toLocaleString(`pt-br`, {style: `currency`, currency: BLR})
    }
