/**
 * 
 * @author Алексей
 * @stateless
 * @public 
 * @module ServFacade
 */
define(['orm', 'rpc'], function (Orm, Lpc, ModuleName) {
    return function () {
        var self = this, model = Orm.loadModel(ModuleName);
        var dev = new Lpc.Proxy('Devices');
        
        self.reloadConfiguaration = function() {
            dev.devLoadConfFromDatabase();
        };
        
        self.executeAction = function(anActionId) {
            
        };
    };
});
