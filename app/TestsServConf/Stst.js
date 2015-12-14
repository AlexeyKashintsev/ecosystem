/**
 * 
 * @author Алексей
 * @module Stst
 * @public
 * @stateless
 */
define(['orm'], function (Orm, ModuleName) {
    return function () {
        var self = this, model = Orm.loadModel(ModuleName);
        var t = 'init';
        
        self.getT = function() {
            return t;
        };
        
        self.setT = function(aNewT) {
            t = aNewT;
        };
        
    };
});
