/**
 * 
 * @author Alexey
 * @module I2C
 */
define(['orm', 'Interface'], function (Orm, Interface, ModuleName) {
    return function(port, anAdress) {
        var self = this, model = Orm.loadModel(ModuleName);
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
