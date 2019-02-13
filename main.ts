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
//% groups="['Analog', 'Digital', 'I2C']"
namespace BitMaker {
    /**
    * read the value of a digital input
     */
    //% blockId=read_Din_value
    //% block="digital read pin $Din"
    //% Din.fieldEditor="gridpicker"
    //% Din.fieldOptions.width=200
    //% Din.fieldOptions.columns=3
    //% group="Digital"
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
     * read the status of a digital input
     */
    //% blockId=read_Din
    //% block="digital pin $Din| is %high"
    //% Din.fieldEditor="gridpicker"
    //% Din.fieldOptions.width=200
    //% Din.fieldOptions.columns=3
    //% high.shadow="toggleHighLow"
    //% high.defl="true"
    //% group="Digital"
    //% weight=10
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
    * set the status of a digital output to high or low
    */
    //% blockId=set_Dout
    //% block="set digital pin $Dout| to %high"
    //% Dout.fieldEditor="gridpicker"
    //% Dout.fieldOptions.width=200
    //% Dout.fieldOptions.columns=3
    //% high.shadow="toggleHighLow"
    //% high.defl="true"
    //% group="Digital"
    //% weight=10
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
    //% group="Analog"
    //% weight=50
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
    * read the analog inputs and convert the value to the specified range
    */
    //% blockId=convert_Ain
    //% block="map pin $Ain|to low $low_value|high $high_value"
    //% Ain.fieldEditor="gridpicker"
    //% Ain.fieldOptions.width=200
    //% Ain.fieldOptions.columns=3
    //% group="Analog"
    //% weight=40
    export function convert_Ain(Ain: AnalogPort, low_value: number, high_value: number): number {
        let Ain_value: number;
        if (Ain == AnalogPort.P0) {
            Ain_value = pins.analogReadPin(AnalogPin.P0);
        } else if (Ain == AnalogPort.P1) {
            Ain_value = pins.analogReadPin(AnalogPin.P1);
        } else if (Ain == AnalogPort.P2) {
            Ain_value = pins.analogReadPin(AnalogPin.P2);
        }
        return Math.map(Ain_value, 0, 1023, low_value, high_value);
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
    //% group="Analog"
    //% weight=30
    export function write_analog(A_port: AnalogPort, value: number) {
        if (A_port == AnalogPort.P0) {
            pins.analogWritePin(AnalogPin.P0, value);
        } else if (A_port == AnalogPort.P1) {
            pins.analogWritePin(AnalogPin.P1, value);
        } else if (A_port == AnalogPort.P2) {
            pins.analogWritePin(AnalogPin.P2, value);
        }
    }

    /**
    * Configure the period of Pulse Width Modulation (PWM) on the specified analog pin to a given value in "microseconds". Before you call this function, you should set the specified pin as analog output using "analog write pin".
    */
    //% blockId=config_PWM
    //% block="analog set period pin $A_port|(PWM) to (us) $value"
    //% A_port.fieldEditor="gridpicker"
    //% A_port.fieldOptions.width=200
    //% A_port.fieldOptions.columns=3
    //% value.defl=20000
    //% group="Analog"
    //% weight=20
    export function config_PWM(A_port: AnalogPort, value: number) {
        if (A_port == AnalogPort.P0) {
            pins.analogSetPeriod(AnalogPin.P0, value);
        } else if (A_port == AnalogPort.P1) {
            pins.analogSetPeriod(AnalogPin.P1, value);
        } else if (A_port == AnalogPort.P2) {
            pins.analogSetPeriod(AnalogPin.P2, value);
        }
    }

    /**
    * Read one number to a 7-bit address
    */
    //% blockId=read_i2c
    //% block="i2c read number at address $add|of format $format|repeated $yes"
    //% format.fieldEditor="gridpicker"
    //% format.fieldOptions.width=200
    //% format.fieldOptions.columns=4
    //% yes.shadow="toggleYesNo"
    //% group="I2C"
    //% inlineInputMode=inline
    export function read_i2c(add: number, format: NumberFormat, yes: boolean): number {
        return pins.i2cReadNumber(add, format, yes)
    }

    /**
    * Write one number to a 7-bit address
    */
    //% blockId=write_i2c
    //% block="i2c wrtie number $|at address $add|with value $value|of format $format|repeated $yes"
    //% format.fieldEditor="gridpicker"
    //% format.fieldOptions.width=200
    //% format.fieldOptions.columns=4
    //% yes.shadow="toggleYesNo"
    //% group="I2C"
    //% weight=40
    export function write_i2c(add: number, value: number, format: NumberFormat, yes: boolean) {
        pins.i2cWriteNumber(add, value, format, yes)
    }
}