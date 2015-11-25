/**
 * 
 * @author Алексей
 * @stateless
 * @public 
 * @module Trigger
 */
define(['Interfaces'], function (Interfaces, ModuleName) {
    return function (devData) {
        var self = this;
        
        var interface = new Interfaces.GPIO(devData.port, 'out', devData.init)
        
        self.getValue = function() {
            return interface.value;
        };

        self.setValue = function(aValue) {
            interface.value = aValue;
        };
    };
});
