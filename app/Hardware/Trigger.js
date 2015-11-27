/**
 * 
 * @author Алексей
 * @stateless
 */
define(['Hardware/Interfaces'], function (Interfaces, Orm, ModuleName) {
    return function (devData) {
        var self = this;
        var interface = new Interfaces.GPIO(devData.port, 'out', devData.init);
        
        self.getValue = function() {
            return interface.value;
        };

        self.setValue = function(aValue) {
            interface.value = typeof(aValue) === 'object' ? aValue.value : aValue;
        };
    };
});
