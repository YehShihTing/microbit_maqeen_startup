input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
        if (Math.randomBoolean()) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        } else {
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
        }
        basic.pause(500)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
basic.pause(1000)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
basic.pause(1000)
maqueen.motorStop(maqueen.Motors.All)
basic.forever(function () {
    basic.showIcon(IconNames.Sad)
    basic.pause(500)
    basic.showIcon(IconNames.Happy)
    basic.pause(500)
})
