/**
 * Based on the movement, record a letter but do NOT send it.
 */
input.onGesture(Gesture.TiltRight, function () {
    setCharacter("D")
})
input.onGesture(Gesture.TiltLeft, function () {
    setCharacter("C")
})
input.onGesture(Gesture.ScreenUp, function () {
    setCharacter("A")
})
// When A+B are pressed, show the string
input.onButtonPressed(Button.AB, function () {
    basic.showString(string)
})
// When B is pressed reset the string
input.onButtonPressed(Button.B, function () {
    string = ""
    basic.showIcon(IconNames.Diamond)
})
// This function sets the string to char and shows it
function setCharacter (char: string) {
    string = char
    basic.showString(char)
}
input.onGesture(Gesture.ScreenDown, function () {
    setCharacter("B")
})
// When A is pressed, send the string
input.onButtonPressed(Button.A, function () {
    radio.sendString(string)
})
let string = ""
radio.setGroup(20)
string = ""
basic.showIcon(IconNames.Diamond)
radio.sendString("START")
