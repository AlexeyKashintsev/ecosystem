/**
 * 
 * @author Alexey
 */
define('I2C',['logger', 'Interface'], function (Logger, Interface, ModuleName) {
    return function(port, anAdress) {
        var self = this;
        var interface = new Interface();
        
        var i2c = new interface.I2C(port);
        var address = anAdress;

        function setAddress(anAdr) {
            i2c.address(anAdr);
        }

        Object.defineProperty(this, 'address', {
            get: this.getInt
        });
    };
});
