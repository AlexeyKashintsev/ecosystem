/**
 * 
 * @author Alexey
 * @public 
 * @constructor
 */
function Check(dev, value, comparation) {
    var self = this;
    
    self.doCheck = function() {
        var val = dev.value;
        return comparation === '=' ? val == value :
                (comparation === '>' ? val > value : val < value);
    };
}
