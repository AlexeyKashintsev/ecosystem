/**
 * 
 * @author Alexey
 * @stateless
 * @public 
 * @module WatchDog
 */
define(['invoke'], function(invoke) {
    return function (aPeriod, watchFunc) {
        var enabled = true;
        var period = aPeriod;

        function watch() {
            watchFunc();
            if (enabled)
                invoke.delayed(period, watch);
        };

        this.stop = function() {
            enabled = false;
        };
        
        Object.defineProperty(this, 'period', {
            get: function() {
                return period;
            },
            set: function (aNewPeriod) {
                period = aNewPeriod;
            }
        });

        invoke.delayed(period, watch);
    };
});
