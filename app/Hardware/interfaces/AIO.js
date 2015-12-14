/**
 * 
 * @author Alexey
 * @module AIO
 */
define(['orm', 'Interface'], function (Orm, Interface, ModuleName) {
    return function (port) {
        var self = this, model = Orm.loadModel(ModuleName);
        
        var interface = new Interface();
        var aio = new interface.Aio(port);

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
});
