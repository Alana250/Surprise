basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        led.enable(true)
        basic.clearScreen()
        basic.showNumber(input.temperature())
        basic.showString("DEGRES")
        basic.showString("T=")
    } else {
        led.enable(true)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        led.enable(false)
    }
})
