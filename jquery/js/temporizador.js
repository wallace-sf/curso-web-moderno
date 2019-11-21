(function ($) {
    $.fn.temporizador = function (opcoes) {
        const opcoesFinais = $.extend({
            mensagem: 'Em breve',
            horario: '23:59:59'
        }, opcoes)

        function SpanDigito() {
            return $('<span class="digito">')
        }
        
        function SpanSeparador() {
            return $('<span class="separador">')
        }

        const horaDezena = SpanDigito().html('0')
        const horaUnidade = SpanDigito().html('0')
        const minutoDezena = SpanDigito().html('0')
        const minutoUnidade = SpanDigito().html('0')
        const segundoDezena = SpanDigito().html('0')
        const segundoUnidade = SpanDigito().html('0')

        const separadorHora = SpanSeparador().html(':')
        const separadorMinuto = SpanSeparador().html(':')

        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

        $(this).addClass('temporizador')
        $(this).append(horaDezena, horaUnidade, separadorHora, 
            minutoDezena, minutoUnidade, separadorMinuto, 
            segundoDezena, segundoUnidade, mensagem)

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
        const horarioAlvo = regex.exec(opcoesFinais.horario)
        // const testeDate = new Date()
        // testeDate.setHours('18')
        // console.log(testeDate)
        
        let temporizador = setInterval(() => {
            const agora = new Date()
            const alvo = new Date()
            alvo.setHours(horarioAlvo[1])
            alvo.setMinutes(horarioAlvo[2])
            alvo.setSeconds(horarioAlvo[3])

            const diferencaEmMili = alvo.getTime() - agora.getTime()

            if (diferencaEmMili >= 0) {
                const diferenca = regex.exec(new Date(diferencaEmMili).toISOString())

                horaDezena.html(diferenca[1][0])
                horaUnidade.html(diferenca[1][1])
                minutoDezena.html(diferenca[2][0])
                minutoUnidade.html(diferenca[2][1])
                segundoDezena.html(diferenca[3][0])
                segundoUnidade.html(diferenca[3][1])
            } else {
                clearInterval(temporizador)
            }
        }, 1000)

        return this
    }
})(jQuery)