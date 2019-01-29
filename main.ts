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
    //% block = "make gesture $gesture test"
    //% gesture.fieldEditor="gridpicker"
    //% gesture.fieldOptions.width=60
    //% gesture.fieldOptions.columns=1
    //% gesture.fieldOptions.tooltips="false"
    export function onGesture(gesture: GPIOs) {
    }
}