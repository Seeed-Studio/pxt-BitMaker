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

namespace BitMaker {
    /**
     * read the status of a digital input
     */
    //% blockId=read_Din
    //% block="digital pin $Din| is %high"
    //% Din.fieldEditor="gridpicker"
    //% Din.fieldOptions.width=200
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

    /**
    * read the status of a digital input
    */
    //% blockId=set_Dout
    //% block="set digital pin $Dout| to %high"
    //% Din.fieldEditor="gridpicker"
    //% Din.fieldOptions.width=200
    //% Din.fieldOptions.columns=3
    //% toggle.shadow="toggleHighLow"
    //% toggle.defl="true"
    export function set_Dout(Dout: GrovePort, toggle: boolean) {
        let Dout_stat: number;
        if (toggle == true) {
            Dout_stat = 1;
        } else {
            Dout_stat = 0;
        }

        if (Dout == GrovePort.P0) {
            pins.digitalWritePin(DigitalPin.P0, Dout_stat);
        } else if (Dout == GrovePort.P1) {
            pins.digitalWritePin(DigitalPin.P1, Dout_stat);
        } else if (Dout == GrovePort.P2) {
            pins.digitalWritePin(DigitalPin.P2, Dout_stat);
        } else if (Dout == GrovePort.P8) {
            pins.digitalWritePin(DigitalPin.P8, Dout_stat);
        } else if (Dout == GrovePort.P16) {
            pins.digitalWritePin(DigitalPin.P16, Dout_stat);
        }
    }
}