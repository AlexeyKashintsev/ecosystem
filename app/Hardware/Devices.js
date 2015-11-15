/* global P */

/**
 * 
 * @author Alexey
 * @stateless
 * @public 
 * @constructor
 */
function Devices() {
    var self = this;
    var devs = [];
    var int = new Interfaces();
    
    var devTypes = {
        dIn:    {dir: 'in', type: 'd'},
        dOut:   {dir: 'out', type: 'd'},
        aIn:    {type: 'a'}
    };
    
    self.addDev = function(devType, port, init) {
        var d = devTypes[devType];
        if (d) {
            var res = devs.length;
            switch (d.type) {
                case 'd': {
//                        devs.push();
                    devs.push(new int.GPIO(port, d.dir, init));
                    break;
                }
                case 'a': {
//                        devs.push();
                    devs.push(new int.AIO(port));
                    break;
                }
            }
            return res;
        } else
            return null;
    };
    
    self.devGetValue = function(devId) {
        return devs[devId].value;
    };
    
    self.setDevValue = function(devId, value) {
        devs[devId].value = value;
    };
}
