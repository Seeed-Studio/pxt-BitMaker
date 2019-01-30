enum GrovePort {
    //% block="P0"
    P0,
    //% block="P1"
    P1,
    //% block="P2"
    P2,
    //% block="P8"
    P8,
    //% block="P16"
    P16
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
    //% Din.fieldOptions.width=250
    //% Din.fieldOptions.columns=3
    //% high.shadow="toggleHighLow"
    //% high.defl="true"
    export function read_Din(Din: GrovePort, high: boolean): boolean {
        let Din_stat: number;
        if (Din == GrovePort.P0) {
            Din_stat = pins.digitalReadPin(DigitalPin.P0);
        } else if (Din == GrovePort.P1) {
            Din_stat = pins.digitalReadPin(DigitalPin.P1);
        } else if (Din == GrovePort.P2) {
            Din_stat = pins.digitalReadPin(DigitalPin.P2);
        } else if (Din == GrovePort.P8) {
            Din_stat = pins.digitalReadPin(DigitalPin.P8);
        } else if (Din == GrovePort.P16) {
            Din_stat = pins.digitalReadPin(DigitalPin.P16);
        }

        if ((high == true && Din_stat == 1) || (high == false && Din_stat == 0)) {
            return true;
        } else {
            return false;
        }
    }
}