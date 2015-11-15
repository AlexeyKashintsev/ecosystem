/**
 * 
 * @author Alexey
 * @stateless
 * @public 
 * @constructor
 */
function WatchDog(period, watchFunc) {
    var self = this;
    var enabled = true;
    
    function watch() {
        watchFunc();
        if (enabled)
            P.invokeDelayed(period, watch);
    };
    
    self.stop = function() {
        enabled = false;
    };
    
    P.invokeDelayed(period, watch);
}
