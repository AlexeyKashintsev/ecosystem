/**
 * 
 * @author Алексей
 * @module Trigger
 */
define(['GPIO', 'logger'], function (GPIO, Logger, ModuleName) {
    return function (devData) {
        var self = this;
        var gpio = new GPIO(devData.port, 'out', devData.init);
        
        self.getValue = function() {
            return gpio.value;
        };

        self.setValue = function(aValue) {
            gpio.value = typeof(aValue) === 'object' ? aValue.value : aValue;
        };
    };
});
