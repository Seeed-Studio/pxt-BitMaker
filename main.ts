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

enum AnalogPort {
    //% block="P0"
    P0,
    //% block="P1"
    P1,
    //% block="P2"
    P2
}


/**
 * Provides access to BitMaker for micro: bit functionality.
 */
//% color=190 icon="\uf126" block= "BitMaker"
//% groups="['Digital Pins', 'Analog Pins', 'I2C']"
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
    //% group="Digital Pins"
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
     * read the value of a digital input
     */
    //% blockId=read_Din_value
    //% block="digital read pin $Din"
    //% Din.fieldEditor="gridpicker"
    //% Din.fieldOptions.width=200
    //% Din.fieldOptions.columns=3
    //% group="Digital Pins"
    export function read_Din_value(Din: GrovePort): number {
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

        return Din_stat;
    }

    /**
    * set the status of a digital output to high or low
    */
    //% blockId=set_Dout
    //% block="set digital pin $Dout| to %high"
    //% Dout.fieldEditor="gridpicker"
    //% Dout.fieldOptions.width=200
    //% Dout.fieldOptions.columns=3
    //% high.shadow="toggleHighLow"
    //% high.defl="true"
    //% group="Digital Pins"
    export function set_Dout(Dout: GrovePort, high: boolean) {
        let Dout_stat: number;
        if (high == true) {
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

    /**
    * read the analog inputs
    */
    //% blockId=read_Ain
    //% block="analog read pin $Ain"
    //% Ain.fieldEditor="gridpicker"
    //% Ain.fieldOptions.width=200
    //% Ain.fieldOptions.columns=3
    //% group="Analog Pins"
    //% weight=9
    export function read_Ain(Ain: AnalogPort): number {
        let Ain_value: number;
        if (Ain == AnalogPort.P0) {
            Ain_value = pins.analogReadPin(AnalogPin.P0);
        } else if (Ain == AnalogPort.P1) {
            Ain_value = pins.analogReadPin(AnalogPin.P1);
        } else if (Ain == AnalogPort.P2) {
            Ain_value = pins.analogReadPin(AnalogPin.P2);
        }
        return Ain_value;
    }

    /**
    * write value to the analog ports
    */
    //% blockId=write_analog
    //% block="analog write pin $A_port| to $value"
    //% A_port.fieldEditor="gridpicker"
    //% A_port.fieldOptions.width=200
    //% A_port.fieldOptions.columns=3
    //% value.min=0 value.max=1023
    //% value.defl=1023
    //% group="Analog Pins"
    //% weight=10
    export function write_analog(A_port: AnalogPort, value: number) {
        if (A_port == AnalogPort.P0) {
            pins.analogWritePin(AnalogPin.P0, value);
        } else if (A_port == AnalogPort.P1) {
            pins.analogWritePin(AnalogPin.P1, value);
        } else if (A_port == AnalogPort.P2) {
            pins.analogWritePin(AnalogPin.P2, value);
        }
    }
}