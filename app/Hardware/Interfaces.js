/* global P */

/**
 * 
 * @author Alexey
 * @re_sident
 * @constructor 
 */
function Interfaces() {
    var self = this;
    
    var mraa = Java.type('mraa.mraa');
    var GPIO = Java.type('mraa.Gpio');
    var DIR = Java.type('mraa.Dir');
    
    var AIO = Java.type('mraa.Aio');
    
    var I2C = Java.type('mraa.J2c');
    
    function error(errorType) {
        throw { 
            name:        errorType, 
            level:       "Show Stopper", 
            message:     "Error detected. " + errorType, 
            htmlMessage: "Error detected. " + errorType,
            toString:    function(){return this.name + ": " + this.message;} 
        }; 
    }
    
    self.getMraa = function() {
        return mraa;
    };
    
    self.GPIO = function(port, dir, init) {
        var state = !!init;
        var gpio = new GPIO(port);
        gpio.dir(dir == 'out' ? DIR.DIR_OUT : DIR.DIR_IN);
        if (dir == 'out')
            gpio.write(state);
        
        object.defineProperty(this, 'value', {
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
    
    self.AIO = function(port) {
        var aio = new AIO(port);
        
        this.getInt = function() {
            return aio.read();
        };
        
        this.getFloat = function() {
            aio.readFloat();
        };
        
        object.defineProperty(this, 'value', {
            get: this.getInt
        });
    };
    
    self.I2C = function(port, anAdress) {
        var i2c = new I2C(port);
        var address = anAdress;
        
        function setAddress(anAdr) {
            i2c.address(anAdr);
        }
        
        object.defineProperty(this, 'address', {
            get: this.getInt
        });
    };
}
