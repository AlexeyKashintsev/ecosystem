/**
 * 
 * @author Alexey
 * @public 
 * @constructor
 */
function DevsT() {
    var self = this;

    var int = new Interfaces();
    
    var devs = [];
    
    var devTypes = {
        dIn:    {dir: 'in', type: 'd'},
        dOut:   {dir: 'out', type: 'd'},
        aIn:    {type: 'a'},
        aTm:    {type: 'a', out_filter: 'temperature'}
    };
    
    self.addDev = function(devData, init) {
        var d = devTypes[devData.type];
        if (d) {
            var res = devs.length;
            switch (d.type) {
                case 'd': {
//                        devs.push();
                    var dev = new int.GPIO(devData.port, d.dir, init);
                    dev.type = d;
                    devs.push(dev);
                    break;
                }
                case 'a': {
//                        devs.push();
                    var dev = new int.AIO(devData.port);
                    dev.type = d;
                    devs.push(dev);
                    break;
                }
            }
            return res;
        } else
            return null;
    };
    
    self.setDevVal = function(devData, init) {
        var d = devTypes[devData.type];
        switch (d.type) {
                case 'd': {
                    var dev = new int.GPIO(devData.port, d.dir, init);
                    dev.type = d;
                    break;
                }
                case 'a': {
                    var dev = new int.AIO(devData.port);
                    dev.type = d;
                    break;
                }
            }
    };
    
    
    self.devGetValue = function(devId) {
        return devs[devId].value;
    };
    
    self.setDevValue = function(devId, value) {
        devs[devId].value = value;
    };
    
    self.getAllValues = function() {
        var res = [];
        for (var j in devs)
            switch (devs[j].type.out_filter) {
                case 'temperature': {
                        var a = devs[j].value;
                        var B = 3975;
                        var rs = (1023-a)*10000/a;
                        res[j] = 1/(Math.log(rs/10000)/B+1/298.15)-273.15;
                        break;
                    };
                default: res[j] = devs[j].value;
            }
        return res;
    };
    
    self.clearAll = function() {
        for (var j in devs)
            try {
                devs[j].value = null;
            } catch (e) {
                P.Logger.warning('Cannot set dev value to null. Error: ' + e);
            }
        devs = [];
    };
}
