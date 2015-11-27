/**
 * 
 * @author Алексей
 * @stateless
 */
define(['Hardware/Interfaces'], function (Interfaces, Orm, ModuleName) {
    return function (devData) {
        var self = this;
        Logger.info('Calling for interface...');
        var interface = new Interfaces.GPIO(devData.port, 'out', devData.init);
        Logger.info('Calling for interface... Done');
        
        self.getValue = function() {
            return interface.value;
        };

        self.setValue = function(aValue) {
            interface.value = typeof(aValue) === 'object' ? aValue.value : aValue;
        };
    };
});
