/* global P */

/**
 * 
 * @author Alexey
 * @public 
 * @constructor
 */
function Devices() {
    var self = this;
    var int = new Interfaces();
    
    self.devs = [];
    
    var devTypes = {
        dIn:    {dir: 'in', type: 'd'},
        dOut:   {dir: 'out', type: 'd'},
        aIn:    {type: 'a'}
    };
    
    self.addDev = function(devData, init) {
        var d = devTypes[devData.type];
        if (d) {
            var res = self.devs.length;
            switch (d.type) {
                case 'd': {
//                        devs.push();
                    self.devs.push(new int.GPIO(devData.port, d.dir, init));
                    break;
                }
                case 'a': {
//                        devs.push();
                    self.devs.push(new int.AIO(devData.port));
                    break;
                }
            }
            return res;
        } else
            return null;
    };
    
    self.devGetValue = function(devId) {
        return self.devs[devId].value;
    };
    
    self.setDevValue = function(devId, value) {
        self.devs[devId].value = value;
    };
    
    self.getAllValues = function() {
        var res = [];
        for (var j in self.devs)
            res[j] = self.devs[j].value;
        return res;
    };
    
    self.clearAll = function() {
        for (var j in self.devs)
            try {
                self.devs[j].value = null;
            } catch (e) {
                P.Logger.warning('Cannot set dev value to null. Error: ' + e);
            }
        self.devs = [];
    };
}
