function efeito01 () {
    for (let x = 0; x <= 4; x++) {
        led.plot(x, 0)
        led.plot(0, 4 - x)
        led.plot(4 - x, 4)
        led.plot(4, x)
        basic.pause(50)
        led.unplot(x, 0)
        led.unplot(4 - x, 4)
        led.unplot(0, 4 - x)
        led.unplot(4, x)
    }
}
function efeito02 () {
    for (let externo = 0; externo <= 4; externo++) {
        reverso = 4 - externo
        for (let interno = 0; interno <= 4; interno++) {
            led.plot(externo, reverso)
            basic.pause(velocidade)
            led.plot(reverso, externo)
            basic.pause(velocidade)
            led.plot(reverso - interno, reverso)
            basic.pause(velocidade)
            led.plot(reverso, reverso - interno)
            basic.pause(velocidade)
        }
    }
    for (let externo = 0; externo <= 4; externo++) {
        reverso = 4 - externo
        for (let interno = 0; interno <= 4; interno++) {
            led.unplot(externo, reverso)
            basic.pause(velocidade)
            led.unplot(reverso, externo)
            basic.pause(velocidade)
            led.unplot(reverso - interno, reverso)
            basic.pause(velocidade)
            led.unplot(reverso, reverso - interno)
            basic.pause(velocidade)
        }
    }
}
let reverso = 0
let velocidade = 0
velocidade = 5
basic.forever(function () {
    for (let index = 0; index < 6; index++) {
        efeito01()
    }
    for (let index = 0; index < 2; index++) {
        efeito02()
    }
})
