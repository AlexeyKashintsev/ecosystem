/**
 * 
 * @author Alexey
 */
define('Interface',['logger'], function (Logger, ModuleName) {
    try {
        var mraa = Java.type('mraa.mraa');
        var Gpio = Java.type('mraa.Gpio');
        var Dir = Java.type('mraa.Dir');
        var Aio = Java.type('mraa.Aio');
//        var I2C = Java.type('mraa.I2c');

        return function() {
            Logger.info('Interface module is initialized in normal mode');
            
            this.getMraa = function() {
                return mraa;
            };

            this.GPIO = Gpio;
            this.DIR = Dir;
            this.AIO = Aio;
//            this.I2C = I2C;            
        };
    } catch(e) {
        return function() {
            Logger.info('Interface module is initialized in emulation mode');
            this.GPIO = function() {
                var state;
                this.write = function(aValue) {
                    state = aValue;
                };
                this.read = function() {
                    return state;
                };
                this.dir = function() {};
            };
            this.AIO = function() {
                this.read = function() {
                    return Math.random(1000);
                };
                this.readFloat = function() {
                    return Math.random(1000)/1000;
                };
            };
            this.DIR = {
                DIR_OUT:    'DIR_OUT',
                DIR_IN:     'DIR_IN'
            };
        };
    };
});
