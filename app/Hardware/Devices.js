/**
 * 
 * @author Алексей
 * @stateless
 * @public 
 * @module Devices
 */
define(['orm', 'Trigger', 'TemperatureSensor'], function (Orm, ModuleName) {
    return function () {
        var self = this, model = Orm.loadModel(ModuleName);
        
        var devs = {};
        
        function addDev(aDevId, aDevData) {
            switch (aDevData.dev_type) {
                case 'Trigger': devs[aDevId] = new Trigger(aDevData);
                    break;
                case 'TemperatureSensor': devs[aDevId] = new TemperatureSensor(aDevData);
                    break;
            }            
//            devs[aDevId] = 
        }
        
        self.loadConfFromDatabase = function() {
            
        };
    };
});
