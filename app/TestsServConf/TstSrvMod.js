/**
 * 
 * @author Алексей
 * @stateless
 * @public 
 * @constructor
 */
function TstSrvMod() {
    var self = this, model = P.loadModel(this.constructor.name);
    
    self.test = function(aSucceess) {
        aSucceess('good');
    };
}
