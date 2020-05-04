/* Copyright (c) 2019 Tom Gidden. See the file LICENSE for copying permission. */

/* Based on character set of Mullard SAA5055 character generator, as used by BBC Microcomputer "MODE 7", but with character set equivalent to 7-bit US ASCII.

Usage:

```
require("FontTeletext10x18Ascii").add(Graphics);
g.setFontTeletext10x18Ascii();
g.drawString("0123456789");
```
*/
const font = atob("AAAAAAAAAAAA/8w/8wAAAAAAAAAAAAAAAAAAAAAAAA/AA/AAAAAAAA/AA/AAAAAAAAAAAAAADMADMA//w//wDMADMA//w//wDMADMAAAAAAAPDAfjg5xwwww//w//wwww45wcfgMPAAAAAAA8DA8HA8OA8cAA4ABwADjwHDwODwMDwAAAAAAPPAf/g55w54wf8wPPwAHgAHgAPwAMwAAAAAAAAAAAADAAHAA+AA8AAAAAAAAAAAAAAAAAAAAAAAAAAD8AH+AOHAcDg4BwwAwAAAAAAAAAAAAAAAAAAwAw4BwcDgOHAH+AD8AAAAAAAAAAAAAMDAOHAHOADMA//w//wDMAHOAOHAMDAAAAAAAAwAAwAAwAAwAP/AP/AAwAAwAAwAAwAAAAAAAAAAAAAAAMAAcAD4ADwAAAAAAAAAAAAAAAAAAAAAAAAAwAAwAAwAAwAAwAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAwAAAAAAAAAAAAAAAAAAADAAHAAOAAcAA4ABwADgAHAAOAAMAAAAAAAAD8AH+AOHAcDg4Bw4BwcDgOHAH+AD8AAAAAAAAAAAAAMAwMAw//w//wAAwAAwAAAAAAAAAAAAMDwcHw4Owwcww4wwwwwww5wwfgwPAwAAAAAAwDAwDgwBwwAwwwwwwwzww35w+fg8PAAAAAAAA8AB8ADsAHMAOMAMMA//w//wAMAAMAAAAAAA/DA/DgzBwzAwzAwzAwzAwzhwx/gw/AAAAAAAD/AH/gOxwcww4wwwwwwwww5wAfgAPAAAAAAAwAAwAAwPwwfww4AxwAzgA3AA+AA8AAAAAAAAPPAf/g55wwwwwwwwwwwww55wf/gPPAAAAAAAPAAfgA5wwwwwwwwwxwwzg43Af+AP8AAAAAAAAAAAAAAAAAAADAwDAwAAAAAAAAAAAAAAAAAAAAAAAAAAMAAcDD4DDwAAAAAAAAAAAAAAAAAAAwAB4AD8AHOAOHAcDg4BwwAwAAAAAAAAAAAADMADMADMADMADMADMADMADMADMADMAAAAAAAAAAAAAwAw4BwcDgOHAHOAD8AB4AAwAAAAAAAMAAcAA4AAwAAw8wx8wzgA/AAeAAMAAAAAAAAP/Af/g4BwwAwz8wz8wzMw7Mwf8AP8AAAAAAAD/wH/wOMAcMA4MA4MAcMAOMAH/wD/wAAAAAA//w//wwwwwwwwwwwwwwww55wf/gPPAAAAAAAP/Af/g4BwwAwwAwwAwwAw4BwcDgMDAAAAAAA//w//wwAwwAwwAwwAwwAw4Bwf/gP/AAAAAAA//w//wwwwwwwwwwwwwwwwwwwwAwwAwAAAAAA//w//wwwAwwAwwAwwAwwAwwAwAAwAAAAAAAAP/Af/g4BwwAwwAwwAwwMw4MwcPwMPwAAAAAA//w//wAwAAwAAwAAwAAwAAwA//w//wAAAAAAAAAAAAwAwwAw//w//wwAwwAwAAAAAAAAAAAAADAADgABwAAwAAwAAwAAwABw//g//AAAAAAA//w//wAwAB4AD8AHOAOHAcDg4BwwAwAAAAAA//w//wAAwAAwAAwAAwAAwAAwAAwAAwAAAAAA//w//wMAAOAAHwAHwAOAAMAA//w//wAAAAAA//w//wDAADgABwAA4AAcAAMA//w//wAAAAAAP/Af/g4BwwAwwAwwAwwAw4Bwf/gP/AAAAAAA//w//wwwAwwAwwAwwAwwA5wAfgAPAAAAAAAAP/Af/g4BwwAwwMwwPwwHg4Hgf/wP8wAAAAAA//w//wwwAwwAw8Aw+Aw3A5zgfhwPAwAAAAAAPDAfjg5xwwwwwwwwwwwww45wcfgMPAAAAAAAwAAwAAwAAwAA//w//wwAAwAAwAAwAAAAAAAA//A//gABwAAwAAwAAwAAwABw//g//AAAAAAA/AA/gAB8AA+AAHwAHwA+AB8A/gA/AAAAAAAA//A//gABwABwAPgAPgABwABw//g//AAAAAAA8Dw+HwHOAD8AB4AB4AD8AHOA+Hw8DwAAAAAA8AA+AAHAADgAB/wB/wDgAHAA+AA8AAAAAAAAwDwwHwwOwwcww4wxwwzgw3Aw+Aw8AwAAAAAAAAAAAA//w//wwAwwAwwAwwAwwAwwAwAAAAAAMAAOAAHAADgABwAA4AAcAAOAAHAADAAAAAAAwAwwAwwAwwAwwAwwAw//w//wAAAAAAAAAAAADAAHAAOAAcAA4AA4AAcAAOAAHAADAAAAAAAAAAwAAwAAwAAwAAwAAwAAwAAwAAwAAwAAAAAAAAAAAAAAAAAA8AA+AAHAADAAAAAAAAAAAAAAADAAHgDPwDMwDMwDMwDMwDswB/wA/wAAAAAA//w//wDAwDAwDAwDAwDAwDhwB/gA/AAAAAAAA/AB/gDhwDAwDAwDAwDAwDAwDAwDAwAAAAAAA/AB/gDhwDAwDAwDAwDAwDAw//w//wAAAAAAA/AB/gDtwDMwDMwDMwDMwDswB8AA8AAAAAAAAAAAAAAwAAwAP/wf/w4wAwwAAAAAAAAAAAAAA/AB/gDhzDAzDAzDAzDAzDA3D/+D/8AAAAAA//w//wDAADAADAADAADAADgAB/wA/wAAAAAAAAAAAADAwDAwz/wz/wAAwAAwAAAAAAAAAAAAAAAAAAAADAAHz/+z/8AAAAAAAAAAAAAAAAAAAAAAAA//w//wAMAAeAA/ABzgDhwDAwAAAAAAAAAAAAwAwwAw//w//wAAwAAwAAAAAAAAAAAAD/wD/wDAADgAB/wB/wDgADgAB/wA/wAAAAAAD/wD/wDAADAADAADAADAADgAB/wA/wAAAAAAA/AB/gDhwDAwDAwDAwDAwDhwB/gA/AAAAAAAD//D//DAwDAwDAwDAwDAwDhwB/gA/AAAAAAAA/AB/gDhwDAwDAwDAwDAwDAwD//D//AAAAAAAAAAAAD/wD/wAwABwADgADAADAADAAAAAAAAAwwB4wD8wDMwDMwDMwDMwDPwDHgDDAAAAAAAAAAAAADAADAA//A//gDBwDAwAAAAAAAAAAAAD/AD/gABwAAwAAwAAwAAwAAwD/wD/wAAAAAADwAD4AAfAAPgABwABwAPgAfAD4ADwAAAAAAAD/AD/gABwABwAPgAPgABwABwD/gD/AAAAAAADAwDhwBzgA/AAeAAeAA/ABzgDhwDAwAAAAAAD/AD/gABzAAzAAzAAzAAzAA3D/+D/8AAAAAADAwDAwDDwDHwDOwDcwD4wDwwDAwDAwAAAAAAAAAAAAAwAB4AP/AfPg4BwwAwwAwwAwAAAAAAAAAAAAAAAAAA/Pw/PwAAAAAAAAAAAAAAAAAAwAwwAwwAw4BwfPgP/AB4AAwAAAAAAAAAAAAAMAAcAA4AA4AAcAAOAAHAAHAAOAAMAAAAAAAA//w//w//w//w//w//w//w//w//w//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
exports.add = function(graphics) {
    graphics.prototype.setFontTeletext10x18Ascii = function() {
        this.setFontCustom(font, 33, 12, 18);
    }
}
