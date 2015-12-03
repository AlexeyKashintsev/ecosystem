/**
 * 
 * @author Alexey
 * @module Interfaces
 */
define(['logger'], function (Logger, ModuleName) {
    function error(errorType) {
        throw { 
            name:        errorType, 
            level:       "Show Stopper", 
            message:     "Error detected. " + errorType, 
            htmlMessage: "Error detected. " + errorType,
            toString:    function(){return this.name + ": " + this.message;} 
        };
    }
    try {
        var mraa = Java.type('mraa.mraa');
        var Gpio = Java.type('mraa.Gpio');
        var DIR = Java.type('mraa.Dir');
        var Aio = Java.type('mraa.Aio');
        var I2C = Java.type('mraa.I2c');

        return new function() {
            Logger.info('Interface module is initialized in normal');

            this.getMraa = function() {
                return mraa;
            };

            this.GPIO = function(port, dir, init) {
                var state = !!init;
                var gpio = new Gpio(port);
                gpio.dir(dir == 'out' ? DIR.DIR_OUT : DIR.DIR_IN);
                if (dir == 'out')
                    gpio.write(state);

                Object.defineProperty(this, 'value', {
                    set: function(aValue) {
                        if (dir === 'out') {
                            gpio.write(aValue);
                            state = aValue;
                        } else {
                            error('GPIO: couldn\'t set value for input pin!' );
                        }
                    },
                    get: function() {
                        return dir == 'in' ? gpio.read() : state;
                    }
                });
            };

            this.AIO = function(port) {
                var aio = new Aio(port);

                this.getInt = function() {
                    return aio.read();
                };

                this.getFloat = function() {
                    aio.readFloat();
                };

                Object.defineProperty(this, 'value', {
                    get: this.getInt
                });
            };

            this.I2C = function(port, anAdress) {
                var i2c = new I2C(port);
                var address = anAdress;

                function setAddress(anAdr) {
                    i2c.address(anAdr);
                }

                Object.defineProperty(this, 'address', {
                    get: this.getInt
                });
            };
        }();
    } catch(e) {
        return new function() {
            Logger.info('Interface module is initialized in emulation mode');
            this.getMraa = function() {};
            this.GPIO = function(port, dir, init) {
                var state = !!init;
                Object.defineProperty(this, 'value', {
                    set: function(aValue) {
                        if (dir === 'out') {
                            state = aValue;
                        } else {
                            error('GPIO: couldn\'t set value for input pin!' );
                        }
                    },
                    get: function() {
                        return state;
                    }
                });
            };
            this.AIO = function(port) {
                Object.defineProperty(this, 'value', {
                    get: Math.random(1000)
                });
            };
        }();
    };
});
