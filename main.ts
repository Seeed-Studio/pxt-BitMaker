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
    //% block="digital pin $Din| is %high"
    //% Din.fieldEditor="gridpicker"
    //% Din.fieldOptions.width=60
    //% Din.fieldOptions.columns=2
    //% Din.fieldOptions.tooltips="false"
    //% high.shadow="toggleHighLow"
    //% high.defl="true"
    export function read_Din(Din: available_pins, high: boolean): boolean {
        let Din_stat: number;
        if (Din == available_pins.P0) {
            Din_stat = pins.digitalReadPin(DigitalPin.P0);
        } else if (Din == available_pins.P1) {
            Din_stat = pins.digitalReadPin(DigitalPin.P1);
        }

        if ((high == true && Din_stat == 1) || (high == false && Din_stat == 0)) {
            return true;
        } else {
            return false;
        }
    }
}