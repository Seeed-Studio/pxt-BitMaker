enum available_pins {
    //% block="P0"
    P0 = 0,
    //% block="P1"
    P1 = 1
}

/*
 * Provides access to BitMaker micro: bit functionality.
 */
//% color=190 icon="\uf126" block= "BitMaker"

namespace sample {
    /**
     * Render a boolean as a high/low toggle
     */
    //% block="digital pin $pin| is %high"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=60
    //% pin.fieldOptions.columns=1
    //% pin.fieldOptions.tooltips="false"
    //% high.shadow="toggleHighLow"
    export function read_Din(pin: available_pins, high: boolean): boolean {
        let Din_stat: number;
        if (pin == available_pins.P0) {
            Din_stat = pins.digitalReadPin(DigitalPin.P0);
            if (high == true && Din_stat == 1) {
                return toggle;
            }
            toggle = pins.digitalReadPin(DigitalPin.P0);
        } else if (condition) {

        }
        return toggle;
    }
}