/**
 * 
 * @author Alexey
 * @public 
 * @constructor
 */
function Action(dev, action, value) {
    var self = this;
    
    self.act = function() {
        dev[action](value);
    };
}
