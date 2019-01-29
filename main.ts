enum GPIOs {
    //% block="P0"
    P0,
    //% block="P1"
    P1,

}
/*
 * Provides access to BitMaker micro: bit functionality.
 */
//% color=190 icon="\uf126" block="BitMaker"

namespace sample {
    //% block="test and test $pin| and test onemore time"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=60
    //% pin.fieldOptions.columns=1
    //% pin.fieldOptions.tooltips="false"
    export function onGesture(pin: GPIOs) {
    }
}