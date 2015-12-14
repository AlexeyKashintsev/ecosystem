/**
 * 
 * @author Alexey
 * @module AIO
 */
define(['logger', 'Interface'], function (Logger, Interface, ModuleName) {
    return function (port) {
        var self = this;
        
        Logger.info('Initializing module AIO on port: ' + port);
        
        var interface = new Interface();
        var aio = new interface.AIO(port);

        this.getInt = function() {
            return aio.read();
        };

        this.getFloat = function() {
            aio.readFloat();
        };

        Object.defineProperty(this, 'value', {
            get: this.getInt
        });
        
        Logger.info('Module AIO has successfully initialized on port: ' + port);
    };
});
