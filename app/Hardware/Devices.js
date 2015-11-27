/**
 * 
 * @author Алексей
 * @resident
 * @public 
 * @module Devices
 */
define(['orm', 'logger', 'Hardware/Trigger', 'Hardware/TemperatureSensor'], function (Orm
, Logger, Trigger, TemperatureSensor, ModuleName) {
    return function () {
        var self = this, model = Orm.loadModel(ModuleName);
        var devs = {};
        
        function addDev(aDevId, aDevData) {
            Logger.info('Adding device. Dev_id: ' + aDevId + ', DevData: '+ JSON.stringify(aDevData));
            switch (aDevData.dev_type) {
                case 'Trigger': devs[aDevId] = new Trigger(aDevData);
                    break;
                case 'TemperatureSensor': devs[aDevId] = new TemperatureSensor(aDevData);
                    break;
            }
        }
        
        self.devLoadConfFromDatabase = function() {
            devs = {};
            Logger.info('Loading configuration from DB...');
            model.requery(function() {
                model.qDevices.forEach(function(dev) {
                    addDev(dev.dev_type, JSON.parse(dev.dev_data));
                });
            });
        };

        self.devPerformAction = function(anActionId) {
            var action = model.qActions.find(function(elem) {
                return elem.eco_actions_id === anActionId;
            });
            if (action) {
                var act = action.actionType;
                if (devs[action.device_id]) {
                    if (devs[action.device_id][act.act_command]) {
                        return devs[action.device_id][act.act_command](JSON.parse(action.action_params));
                    } else {
                        var err = 'There is no action in device. Device ID: ' + action.device_id + ', action: '+ anActionId;
                        Logger.warning(err);
                        return err;
                    }  
                } else {
                    var err = 'There is no device. Device ID: ' + action.device_id + ', action: '+ anActionId;
                    Logger.warning(err);
                    return err;
                }
            } else {
                var err = 'There is no action with given ID. Action ID: ' + anActionId
                Logger.warning(err);
                return err;
            }
        };
        
        self.devLoadConfFromDatabase();
    };
});
