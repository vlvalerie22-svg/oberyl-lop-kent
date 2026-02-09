input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        x = 1
        for (let index = 0; index < 8; index++) {
            basic.showNumber(x)
            x += 1
        }
        for (let index = 0; index < 9; index++) {
            basic.showNumber(x)
            x += -1
        }
    }
})
let x = 0
x = 1
