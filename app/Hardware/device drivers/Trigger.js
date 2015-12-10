/**
 * 
 * @author Алексей
 * @stateless
 */
define(['Hardware/Interfaces', 'logger'], function (Interfaces, Logger, ModuleName) {
    return function (devData) {
        var self = this;
        
        try {
            var interface = new Interfaces.GPIO(devData.port, 'out', devData.init);
        } catch (e) {
            Logger.info('Error initializing interface: ' + e);
        }
        
        self.getValue = function() {
            return interface.value;
        };

        self.setValue = function(aValue) {
            interface.value = typeof(aValue) === 'object' ? aValue.value : aValue;
        };
    };
});
