/**
 * 
 * @author Алексей
 * @stateless
 * @public 
 * @module TemperatureSensor
 */
define(['Interfaces'], function (Interfaces, ModuleName) {
    return function (devData) {
        var self = this;
        
        var interface = new Interfaces.AIO(devData.port);
        
        self.getValue = function() {
            var a = interface.value;
            var B = 3975;
            var rs = (1023-a)*10000/a;
            return 1/(Math.log(rs/10000)/B+1/298.15)-273.15;
        };
    };
});
