/**
 * 
 * @author Alexey
 * @public 
 * @constructor
 */
function Timer(time, accurancy, actions) {
    var self = this;
    
    var wd = new WatchDog(accurancy, checkTimer);
    var timerActionEnabled = false;
    
    function checkTimer() {
        var dt = new Date();
        var diff = Math.abs(dt.getTime() - time);
        if (diff < accurancy) {
            if (!timerActionEnabled) {
                timerActionEnabled = true;
                actions.forEach(function(act) {
                    act.act();
                });
            }
        } else {
            if (timerActionEnabled)
                timerActionEnabled = false;
        }
    }
}
