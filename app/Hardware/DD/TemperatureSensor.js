/**
 * 
 * @author Алексей
 * @module TemperatureSensor
 */
define(['AIO', 'logger'], function (AIO, Logger, ModuleName) {
    return function (devData) {
        var self = this;
        
        try {
            var aio = new AIO(devData.port);
        } catch (e) {
            Logger.info('Error initializing interface: ' + e);
        }
        
        self.getRawValue = function() {
            return aio.value;
        };
        
        self.getValue = function() {
            var a = aio.value;
            var B = 3975;
            var rs = (1023-a)*10000/a;
            return 1/(Math.log(rs/10000)/B+1/298.15)-273.15;
        };
    };
});
