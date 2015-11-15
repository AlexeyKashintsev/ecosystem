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
        aDevList.forEach(function (row){
            model.qDevices.push({
                port: row.port,
                type: row.type,
                name: row.name
            });
        });
        model.save();
    };
    
    self.getDevList = function(callback) {
        var devs = [];
        model.qDevices.requery(function(){
            model.qDevices.forEach(function(row){
                devs.push({
                    port: row.port,
                    type: row.type,
                    name: row.name
                });
            });
            callback(devs);
        });
    };
}
