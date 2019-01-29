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
    //% block="123$high|    123123"
    //% high.shadow="toggleHighLow"
    export function highLow(high: boolean): boolean {
        return high;
    }
}