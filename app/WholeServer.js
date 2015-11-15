/**
 * 
 * @author Alexey
 * @__statefull
 * @constructor 
 */
function __WholeServer() {
    var self = this, model = P.loadModel(this.constructor.name);
    
    var devMod = new Devices();
    
    self.devAdd = devMod.addDev;
    self.devClear = devMod.clearAll;
    self.devGetValue = devMod.devGetValue;
    self.devSetValue = devMod.setDevValue;
    self.devGetAllValues = devMod.getAllValues;
}
