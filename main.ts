input.onGesture(Gesture.TiltRight, function () {
    setCharacter("D")
})
input.onGesture(Gesture.TiltLeft, function () {
    setCharacter("C")
})
input.onGesture(Gesture.ScreenUp, function () {
    setCharacter("A")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString(string)
})
input.onButtonPressed(Button.B, function () {
    string = ""
    basic.showIcon(IconNames.Diamond)
})
function setCharacter (char: string) {
    string = char
    basic.showString(char)
}
input.onGesture(Gesture.ScreenDown, function () {
    setCharacter("B")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString(string)
})
let string = ""
radio.setGroup(20)
radio.setGroup(1)
string = ""
basic.showIcon(IconNames.Diamond)
radio.sendString("START")
