/**
 * 
 * @author Алексей
 * @module Trigger
 */
define(['GPIO', 'logger'], function (GPIO, Logger, ModuleName) {
    return function (devData) {
        var self = this;
        
        try {
            var gpio = new GPIO(devData.port, 'out', devData.init);
        } catch (e) {
            Logger.info('Error initializing interface: ' + e);
        }
        
        self.getValue = function() {
            return gpio.value;
        };

        self.setValue = function(aValue) {
            gpio.value = typeof(aValue) === 'object' ? aValue.value : aValue;
        };
    };
});
