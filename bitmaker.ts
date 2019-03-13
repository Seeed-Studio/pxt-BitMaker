enum GrovePort {
    //% block="P0"
    P0 = DigitalPin.P0,
    //% block="P1"
    P1 = DigitalPin.P1,
    //% block="P2"
    P2 = DigitalPin.P2,
    //% block="P8"
    P8 = DigitalPin.P8,
    //% block="P16"
    P16 = DigitalPin.P16
}

enum AnalogPort {
    //% block="P0"
    P0 = AnalogPin.P0,
    //% block="P1"
    P1 = AnalogPin.P1,
    //% block="P2"
    P2 = AnalogPin.P2
}


/**
 * Provides access to BitMaker for micro: bit functionality.
 */
//% color=190 icon="\uf126" block= "BitMaker"
//% groups="['Analog', 'Digital', 'I2C']"
namespace BitMaker {
    /**
    * Read the specified pin or Grove port as either or 1
     */
    //% blockId=read_Din_value
    //% block="digital read pin $groveport"
    //% group="Digital"
    export function read_Din_value(groveport: GrovePort): number {
        let port:number = groveport;

        return pins.digitalReadPin(<DigitalPin>port);
    }

    /**
     * Read the state of a pin or Grove port as either high or low
     */
    //% blockId=read_Din
    //% block="digital pin $groveport| is $high"
    //% high.shadow="toggleHighLow"
    //% high.defl="true"
    //% group="Digital"
    //% weight=10
    export function read_Din(groveport: GrovePort, high: boolean): boolean {
        let port:number = groveport;
        let Din_stat = pins.digitalReadPin(<DigitalPin>port);
        
        if ((high == true && Din_stat == 1) || (high == false && Din_stat == 0)) {
            return true;
        } else {
            return false;
        }
    }


    /**
    * Set a pin or Grove port to high or low
    */
    //% blockId=set_Dout
    //% block="set digital pin $groveport| to %high"
    //% high.shadow="toggleHighLow"
    //% high.defl="true"
    //% group="Digital"
    //% weight=10
    export function set_Dout(groveport: GrovePort, high: boolean) {
        let port:number = groveport;

        if (high) {
            pins.digitalWritePin(<DigitalPin>port, 1);
        } else {
            pins.digitalWritePin(<DigitalPin>port, 0);
        }
    }

    /**
    * Read the analog inputs at the specified Grove port, as a value comprised between 0 and 1023
    */
    //% blockId=read_Ain
    //% block="analog read pin $analogport"
    //% group="Analog"
    //% weight=50
    export function read_Ain(analogport: AnalogPort): number {
        let port:number = analogport;

        return pins.analogReadPin(<AnalogPin>port);
    }

    /**
    * Read the analog inputs at the specified Grove port, the map the value(was between 0 and 1023) to the specified range
    */
    //% blockId=convert_Ain
    //% block="map pin $analogport|to low $low_value|high $high_value"
    //% group="Analog"
    //% weight=40
    export function convert_Ain(analogport: AnalogPort, low_value: number, high_value: number): number {
        let port:number = analogport;

        return Math.map(pins.analogReadPin(<AnalogPin>port), 0, 1023, low_value, high_value);
    }

    /**
    * Set the Grove port value as analog. Value must be comprised between 0 and 1023
    */
    //% blockId=write_analog
    //% block="analog write pin $analogport| to $value"
    //% value.min=0 value.max=1023
    //% value.defl=1023
    //% group="Analog"
    //% weight=30
    export function write_analog(analogport: AnalogPort, value: number) {
        let port:number = analogport;

        pins.analogWritePin(<AnalogPin>port, value);
    }

    /**
    * Configure the period of Pulse Width Modulation (PWM) on the specified analog pin to a given value in "microseconds". Before you call this function, you should set the specified pin as analog output using "analog write pin".
    */
    //% blockId=config_PWM
    //% block="analog set period pin $analogport|(PWM) to (us) $value"
    //% value.defl=20000
    //% group="Analog"
    //% weight=20
    export function config_PWM(analogport: AnalogPort, value: number) {
        let port:number = analogport;

        pins.analogSetPeriod(<AnalogPin>port, value);
    }

    /**
    * Read one number to a 7-bit address
    */
    //% blockId=read_i2c
    //% block="i2c read number at address $add|of format $format|repeated $yes"
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
    //% yes.shadow="toggleYesNo"
    //% group="I2C"
    //% weight=40
    export function write_i2c(add: number, value: number, format: NumberFormat, yes: boolean) {
        pins.i2cWriteNumber(add, value, format, yes)
    }
}