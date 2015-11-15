/**
 * 
 * @author Alexey
 * @stateless
 * @public 
 * @constructor
 */
function CloudManager() {
    var self = this, model = P.loadModel(this.constructor.name);
    var cloud_URL = '192.168.11.176:8080/azureEco/application/';
    
    self.uploadDevList = function(aDevList) {
        
    };
}
