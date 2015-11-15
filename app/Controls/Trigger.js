/**
 * 
 * @author Alexey
 * @public 
 * @constructor
 */
function Trigger(accurancy, checks, actions) {
    var self = this;
    
    var wd = new WatchDog(accurancy, checkTrigger);
    
    function checkTrigger() {
        var trigger = true;
        checks.forEach(function(check) {
            if (!check.doCheck())
                trigger = false;
        });
        if (trigger)
            actions.forEach(function(act) {
                act.act();
            });
    }
}
