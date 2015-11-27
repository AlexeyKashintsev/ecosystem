/**
 * 
 * @author Алексей
 * @stateless
 */
define(['Hardware/Interfaces', 'logger'], function (Interfaces, Logger, ModuleName) {
    return function (devData) {
        var self = this;
        
        try {
            var interface = new Interfaces.AIO(devData.port);
        } catch (e) {
            Logger.info('Error initializing interface: ' + e);
        }
        
        self.getRawValue = function() {
            return interface.value;
        };
        
        self.getValue = function() {
            var a = interface.value;
            var B = 3975;
            var rs = (1023-a)*10000/a;
            return 1/(Math.log(rs/10000)/B+1/298.15)-273.15;
        };
    };
});
